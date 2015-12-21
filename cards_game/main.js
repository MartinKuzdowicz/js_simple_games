
// global vars ------------------------------------------

var droppedCardsStack;

var darggedElId;

var droppedObject;

var dropCounter;

var points;

var cardsList = [];

var compCardsList;

var humCardsList;

var palyers = ['human', 'computer'];

var round;

var winner = '';

// constructors ---------------------

var ResetGameStackState = {

	stateName : 'ResetGameStackState',
	updateState : function() {

		console.log('updateState ResetGameStackState');

		droppedCardsStack = [];
		var dropZone = document.getElementById('dropZone');
		dropZone.innerHTML = '';
		dropCounter = 0;

		var compCardsUL = document.getElementById('compCardsUL');

		resetCardsList(compCardsList, compCardsUL);

		var humCardsUL = document.getElementById('humCardsUL');

		resetCardsList(humCardsList, humCardsUL);

	}

}

var StartGameState = {

	stateName : 'StartGameState',
	updateState: function() {

		console.log('updateState StartGameState');

		copyCardsFromCrdsDBtoCardsList();

		var compCardsUL = document.getElementById('compCardsUL');
		compCardsUL.innerHTML = '';
		var humCardsUL = document.getElementById('humCardsUL');
		humCardsUL.innerHTML = '';
		var dropZone = document.getElementById('dropZone');
		dropZone.innerHTML = '';

		dropCounter = 0;
		points = 0;
		round = palyers[0];
		humCardsList = [];
		compCardsList = [];
		droppedCardsStack = [];

		initComputerCards();
		initHumanCards();


	}

}


var GameOverState = {

	stateName : 'GameOver',
	updateState: function() {

		if(humCardsList.length == 1) {

			winner = palyers[0];

		} else {

			winner = palyers[1];
		}

		alert('Game Over, the winner is : ' + winner);
		
		ContextObject.sate = StartGameState;

		ContextObject.sate.updateState();

	}

}

// context object -------------------------

function ContextObject(state) {

	this.state = state;

}

var ContextObject = new ContextObject(StartGameState);

// main ----------------------------------------------------

window.onload = function() {

	ContextObject.state.updateState();

	var dropZone = document.getElementById('dropZone');

	dropZone.addEventListener("dragover", dragover, false);

	dropZone.addEventListener("drop", drop, false);

	var compGetCardsFromStackBtn = document.getElementById('compGetCardsStackBtn');

	compGetCardsFromStackBtn.addEventListener("click", computerGetCardsFromStack, false);


	var humanGetCardsFromStackBtn = document.getElementById('humnGetCardsStackBtn');

	humanGetCardsFromStackBtn.addEventListener("click", humanGetCardsFromStack, false);

};

// functions ---------------------------------------------------

function copyCardsFromCrdsDBtoCardsList() {

	for(var key in cards) {
		cardsList.push(cards[key]);
	}

	shuffleCardsList(cardsList);

}

function shuffleCardsList(cardsArr){

	for(var i = (cardsArr.length-1); i > 0; i--) {

		var temp = cardsArr[i];
		var j = Math.floor(Math.random() * (i + 1) );
		cardsArr[i] = cardsArr[j];
		cardsArr[j] = temp;

	}

}

function swapRound() {

	var roundDiv = document.getElementById('round');

	if(dropCounter % 2 == 0) {
		round = palyers[0];

	} else {
		round = palyers[1];
	}

	roundDiv.innerHTML = "round: <br />" + round;

}

function initComputerCards() {

	populateComputerCardsList();

	var compCardsUL = document.getElementById('compCardsUL');

	for(var i = 0; i < compCardsList.length; i++) {

		var li = document.createElement('LI');
		var img = document.createElement('IMG');
		var tempCard = compCardsList[i];
		img.src = tempCard.imgSrc;
		img.id = tempCard.key;
		img.className = 'card';

		img.addEventListener("dragstart", drag, false);

		li.appendChild(img);
		compCardsUL.appendChild(li);

	}

}

function resetCardsList(cardsList, nodeUl) {

	nodeUl.innerHTML = '';

	for(var i = 0; i < cardsList.length; i++) {

		var li = document.createElement('LI');
		var img = document.createElement('IMG');
		var tempCard = cardsList[i];
		img.src = tempCard.imgSrc;
		img.id = tempCard.key;
		img.className = 'card';

		img.addEventListener("dragstart", drag, false);

		li.appendChild(img);
		nodeUl.appendChild(li);

	}

}


function initHumanCards() {

	populateHumanCardsList();

	var humCardsUL = document.getElementById('humCardsUL');

	for(var i = 0; i < humCardsList.length; i++) {

		var li = document.createElement('LI');
		var img = document.createElement('IMG');
		var tempCard = humCardsList[i];
		img.src = tempCard.imgSrc;
		img.id = tempCard.key;
		img.className = 'card';

		img.addEventListener("dragstart", drag, false);

		li.appendChild(img);
		humCardsUL.appendChild(li);

	}

}


function populateHumanCardsList() {

	for(var i = 0; i < cardsList.length; i++) {

		if(i % 2 == 0) {
			humCardsList.push(cardsList[i]);
		}

	}

}


function populateComputerCardsList() {

	for(var i = 0; i < cardsList.length; i++) {

		if(i % 2 != 0) {
			compCardsList.push(cardsList[i]);
		}
	}

}


function drag(e) {

	darggedElId = e.target.id;

}

function dragover(e) {

	e.preventDefault();

}

function drop(e){

	e.preventDefault();

	if (compCardsList.length == 1 || humCardsList.length == 1) {
		
			ContextObject.state = GameOverState;
			ContextObject.state.updateState();
			return;

	}

	performGameLogic();
	swapRound();

	
	}

	function removeCardFromPalyersCards(player, card) {


			for(var i = 0; i < humCardsList.length; i++) {

				if(humCardsList[i].key == card.key) {
					humCardsList.splice(i, 1);
				}

			}


			for(var i = 0; i < compCardsList.length; i++) {

				if(compCardsList[i].key == card.key) {
					compCardsList.splice(i, 1);
				}

			}


	}


function humanGetCardsFromStack() {

	humCardsList = humCardsList.concat(droppedCardsStack);

	ContextObject.state = ResetGameStackState;
	ContextObject.state.updateState();
	

}

function computerGetCardsFromStack() {

	compCardsList = compCardsList.concat(droppedCardsStack);
	
	ContextObject.state = ResetGameStackState;
	ContextObject.state.updateState();

}

function performGameLogic() {

	var dropZone = document.getElementById('dropZone');

	var actualCardInDropZoneObj = droppedObject;

	var newDroppedCard = cards[darggedElId];

	var gameStatus = document.getElementById('status');

	var statusMsg;


	var Strategy = {

		firstTime: function() {

							// set object
							droppedObject = cards[darggedElId];
							// add to stack
							droppedCardsStack.push(droppedObject);

							var newCardNode = document.getElementById(darggedElId);

							dropZone.appendChild(newCardNode);
							// larger image
							newCardNode.className = 'cardInDropeZone';

							dropCounter++;

							statusMsg = 'drop count: ' + dropCounter + '<br />' 
									+ droppedObject.name + ' is in drop zone' 
									+ '<br /> points: ' +points;
								
							gameStatus.innerHTML = statusMsg;

							// update palyers cards list
							removeCardFromPalyersCards(round, droppedObject);
								
						},

		isGreaterOrEqual : function() {
							// delete preview card
							dropZone.innerHTML = '';
							// move new
							var newCardNode = document.getElementById(darggedElId);
							dropZone.appendChild(newCardNode);
							// larger image
							newCardNode.className = 'cardInDropeZone';
							// swap global var for actual card in playground
							droppedObject = newDroppedCard;
							// add to stack
							droppedCardsStack.push(droppedObject);

							dropCounter++;
							points++;

							statusMsg = 'drop count: ' + dropCounter + 
								'<br />' + newDroppedCard.name + 
								' is in drop zone' + '<br /> points: ' +points;
							// update status msg	
							gameStatus.innerHTML = statusMsg;

							// update palyers cards list
							removeCardFromPalyersCards(round, droppedObject);

						},
		
		isLess : function() { alert(newDroppedCard.name + ' is less then ' + actualCardInDropZoneObj.name + ', choose greater card');}

	}

	if(dropCounter == 0) {

		Strategy.firstTime();
		return;

	} 

	if (newDroppedCard.gameVal >= actualCardInDropZoneObj.gameVal) {

		Strategy.isGreaterOrEqual();
		return;
	} 

	if(newDroppedCard.gameVal < actualCardInDropZoneObj.gameVal) {

		Strategy.isLess();
		return;
	} 


}

