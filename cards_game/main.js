
// global vars ------------------------------------------

var droppedCardsStack;

var darggedElId;

var droppedObject;

var dropCounter;

var computerPoints;

var humanPoints;

var cardsList;

var computerActualPossibleMoves;

var compCardsList;

var humCardsList;

var players = ['human', 'computer'];

var round;

var winner;

var dropZoneChanged;

var cardBackSrc = "cards/cardBack_blue5.png"

var compuerMovesTimeout = 2000;


// constructors ---------------------

var ResetGameStackState = {

	stateName : 'ResetGameStackState',
	updateState : function() {

		console.log('updateState ResetGameStackState');

		droppedObject = null;
		droppedCardsStack = [];

		var dropZone = document.getElementById('dropZone');
		dropZone.innerHTML = '';

		var compCardsUL = document.getElementById('compCardsUL');

		resetCardsList(compCardsList, compCardsUL);

		hideComputerCards();

		var humCardsUL = document.getElementById('humCardsUL');

		resetCardsList(humCardsList, humCardsUL);

		updateComputerPossibleMoves();
		swapRound();

	}

}

var StartGameState = {

	stateName : 'StartGameState',
	updateState: function() {

		console.log('updateState StartGameState');

		initOrResetGlobalVars();
		copyCardsFromCrdsDBtoCardsList();

		clearCardsULNodesAndDropeZoneNode();

		initComputerCards();

		hideComputerCards();

		initHumanCards();


	}

}

function initOrResetGlobalVars() {

		dropCounter = 0;
		computerPoints = 0;
		humanPoints = 0;
		round = players[0];
		humCardsList = [];
		compCardsList = [];
		droppedCardsStack = [];
		cardsList = [];
		omputerActualPossibleMoves = [];
		winner = '';
		dropZoneChanged = false;
}

function clearCardsULNodesAndDropeZoneNode() {

	var compCardsUL = document.getElementById('compCardsUL');
		compCardsUL.innerHTML = '';
	var humCardsUL = document.getElementById('humCardsUL');
		humCardsUL.innerHTML = '';
	var dropZone = document.getElementById('dropZone');
		dropZone.innerHTML = '';

}


var GameOverState = {

	stateName : 'GameOver',
	updateState: function() {

		if(humCardsList.length == 1) {

			winner = players[0];

		} else {

			winner = players[1];
		}

		alert('Game Over, the winner is : ' + winner);
		
		contextObject.sate = StartGameState;

		contextObject.sate.updateState();

	}

}

// context object -------------------------

function ContextObject(state) {

	this.state = state;
	this.changeStateTo = function(newState) {
		this.state = newState;

		state.updateState();
	}

}

var contextObject = new ContextObject(StartGameState);

// main ----------------------------------------------------

window.onload = function() {

	contextObject.state.updateState();

	var dropZone = document.getElementById('dropZone');

	dropZone.addEventListener("dragover", dragover, false);

	dropZone.addEventListener("drop", drop, false);

	var humanGetCardsFromStackBtn = document.getElementById('humnGetCardsStackBtn');

	humanGetCardsFromStackBtn.addEventListener("click", humanGetCardsFromStack, false);

};

// functions ---------------------------------------------------

function updateComputerPossibleMoves() {
	console.log('updateComputerPossibleMoves');

	computerActualPossibleMoves = [];

	if(droppedCardsStack.length != 0) {
			var firstCardOnStack = droppedCardsStack[droppedCardsStack.length-1];

			var actualCardVal = firstCardOnStack.gameVal;

			for(var i = 0; i < compCardsList.length;i++){

				var tempVal = compCardsList[i].gameVal;
				if(tempVal >= actualCardVal) {
					computerActualPossibleMoves.push(compCardsList[i]);
				}

			}

	} else {

		computerActualPossibleMoves = computerActualPossibleMoves.concat(compCardsList);
		
	}


}

function compPickCardFromPossibleMovesAndReturnId() {

	var possibleMovesCount = computerActualPossibleMoves.length;

	var randomIndex = Math.floor(Math.random() * possibleMovesCount);

	var randomCard = computerActualPossibleMoves[randomIndex];

	return randomCard.key;

}

function computerMakeMove() {
	console.log('computerMakeMove()');

	if(computerActualPossibleMoves.length != 0) {
			darggedElId = compPickCardFromPossibleMovesAndReturnId();

		if (compCardsList.length == 1 || humCardsList.length == 1) {
			
				contextObject.state = GameOverState;
				contextObject.state.updateState();
				return;

		}

		performGameLogic();

	} else {

		computerGetCardsFromStack();
	}

}

function copyCardsFromCrdsDBtoCardsList() {
	console.log('copyCardsFromCrdsDBtoCardsList()');

	for(var key in cards) {
		cardsList.push(cards[key]);
	}

	shuffleCardsList(cardsList);
	shuffleCardsList(cardsList);

}

function shuffleCardsList(cardsArr){

	console.log('shuffleCardsList()');

	for(var i = (cardsArr.length-1); i > 0; i--) {

		var temp = cardsArr[i];
		var j = Math.floor(Math.random() * (i + 1) );
		cardsArr[i] = cardsArr[j];
		cardsArr[j] = temp;

	}

}

function swapRound() {

	console.log('swapRound()');

	var roundDiv = document.getElementById('round');

	if(round == players[1]) {
		round = players[0];
		roundDiv.className = 'backColorBrown';

	} else {
		round = players[1];
		roundDiv.className = 'backColorBlue';
	}

	roundDiv.innerHTML = '<p class="text-center">round: </p><p class="text-center">' + round + '</p>';
}

function hideComputerCards() {

	console.log('hideComputerCards()');

	var compCardsImages = document.querySelectorAll('#compCardsUL li img');

	for(var i = 0; i < compCardsImages.length; i++) {

		compCardsImages[i].src = cardBackSrc;

	}

}

function initComputerCards() {

	console.log('initComputerCards()');

	populateComputerCardsList();

	var compCardsUL = document.getElementById('compCardsUL');

	for(var i = 0; i < compCardsList.length; i++) {

		var li = document.createElement('LI');
		var img = document.createElement('IMG');
		var tempCard = compCardsList[i];
		img.src = tempCard.imgSrc;
		img.id = tempCard.key;
		img.className = 'card';

		li.appendChild(img);
		compCardsUL.appendChild(li);

	}

}

function resetCardsList(cardsList, nodeUl) {

	console.log('resetCardsList()');

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
	console.log('initHumanCards()');

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

	if(round == players[0]) {

		darggedElId = e.target.id;

	} else {

		alert('wait for computer move!');

	}	

}

function dragover(e) {

	e.preventDefault();

}

function drop(e){

	e.preventDefault();

	if (compCardsList.length == 1 || humCardsList.length == 1) {
		
			contextObject.state = GameOverState;
			contextObject.state.updateState();
			return;

	}

	performGameLogic();
	
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

	contextObject.state = ResetGameStackState;
	contextObject.state.updateState();

	setTimeout(function(){
				computerMakeMove();
			}, compuerMovesTimeout);
	

}

function computerGetCardsFromStack() {

	compCardsList = compCardsList.concat(droppedCardsStack);
	
	contextObject.state = ResetGameStackState;
	contextObject.state.updateState();

}

function incrementPoints() {
	console.log('incrementPoints()');

	if(round === players[0]){

		humanPoints++;

	} else {

		computerPoints++;

	}

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
							var newCardObject = cards[darggedElId];
							newCardNode.src = newCardObject.imgSrc;

							dropZone.appendChild(newCardNode);
							// larger image
							newCardNode.className = 'cardInDropeZone';

							dropCounter++;

							incrementPoints();

							statusMsg = 'moves count: ' + dropCounter + '<br />' 
									+ droppedObject.name + ' is in drop zone' 
									+ '<br /> computerPoints: ' + computerPoints
									+ '<br /> humanPoints: ' + humanPoints;
								
							gameStatus.innerHTML = statusMsg;

							// update palyers cards list
							removeCardFromPalyersCards(round, droppedObject);
								
						},

		isGreaterOrEqual : function() {
							// delete preview card
							dropZone.innerHTML = '';
							// move new
							var newCardNode = document.getElementById(darggedElId);
							var newCardObject = cards[darggedElId];
							newCardNode.src = newCardObject.imgSrc;

							dropZone.appendChild(newCardNode);
							// larger image
							newCardNode.className = 'cardInDropeZone';
							// swap global var for actual card in playground
							droppedObject = newDroppedCard;
							// add to stack
							droppedCardsStack.push(droppedObject);

							dropCounter++;

							incrementPoints();
							
							statusMsg = 'moves count: ' + dropCounter + 
								'<br />' + newDroppedCard.name + 
								' is in drop zone' 
								+ '<br /> computerPoints: ' + computerPoints
								+ '<br /> humanPoints: ' + humanPoints;
							// update status msg	
							gameStatus.innerHTML = statusMsg;

							// update palyers cards list
							removeCardFromPalyersCards(round, droppedObject);

						},
		
		isLess : function() { alert(newDroppedCard.name + ' is less then ' + actualCardInDropZoneObj.name + ', choose greater card');}

	}

	if(droppedCardsStack.length == 0) {

		Strategy.firstTime();

		swapRound();
		updateComputerPossibleMoves();

		if(round == players[1]) {

			setTimeout(function(){
				computerMakeMove();
			}, compuerMovesTimeout);

		}


		return;

	} 

	if (newDroppedCard.gameVal >= actualCardInDropZoneObj.gameVal) {

		Strategy.isGreaterOrEqual();

		swapRound();
		updateComputerPossibleMoves();

		if(round == players[1]) {

			setTimeout(function(){
				computerMakeMove();
			}, compuerMovesTimeout);

		}

		return;
	} 

	if(newDroppedCard.gameVal < actualCardInDropZoneObj.gameVal) {

		Strategy.isLess();
		dropZoneChanged = false;

		return;
	} 


}

