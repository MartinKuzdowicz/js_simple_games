
// GLOBAL VARS ------------------------------------

var lettersUl = document.getElementById('letters');

var sentenceUl = document.getElementById('sentence');

var LETTERS_ARR = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w','x','y','z','ź','ż'];

var startGameBtn = document.getElementById('startGameBtn');

var sentences = ['Fantomas','Super Szamson','Hasło'];

var howManyCanYouTry = 5;

var numberOfGuessedLetters = 0;

var actualSentence;

var ctx;


// for canvas ----------------------------------

var MAX_LINE_PARTS = 5;

var counter = 0;

var positionIncrementVal = 30;

var starPos = 20;

var actualYPos;


var canvasGallow;


// MAIN ----------------------------------------

window.onload = function() {

	init();
	setActualPassword();

	canvasGallow = document.getElementById('canvasGallow');

	ctx = canvasGallow.getContext('2d');

	initCanvasGallow(ctx);

}

// FUNCTIONS ------------------------------------------

function checkIfGameOVer() {

	if(howManyCanYouTry == 0) {

		disableLettersBtns();
		alert('game over! You lose');


	}

	if(numberOfGuessedLetters == actualSentence.length) {

		disableLettersBtns();
		alert('You winn');

	}

}


function disableLettersBtns() {

	for(var i = 0; i < LETTERS_ARR.length; i++) {

		var letterBtn = document.getElementById(LETTERS_ARR[i]);
		letterBtn.setAttribute('class', 'dissabled');

		letterBtn.removeEventListener("click" , checkLetter);

	}


}


function setActualPassword() {

	var randomNum = Math.floor(Math.random() * 3);

	actualSentence = sentences[randomNum].toUpperCase();

	var sentenceChars = actualSentence.split('');

	for(var i = 0; i < sentenceChars.length; i++) {

		if(sentenceChars[i] != ' ') {

			var liNode = document.createElement("LI"); 
			liNode.setAttribute('id', 'sentenceIndex'+i);
			liNode.setAttribute('class', 'sentenceLetterLi');
		 	sentenceUl.appendChild(liNode);

		} else {

			var liNode = document.createElement("LI"); 
			liNode.setAttribute('class', 'space');
		 	sentenceUl.appendChild(liNode);

		}		
		
	}

	checkSpacesInSentence();

}

function resetDomElementsAndVars() {

	sentenceUl.innerHTML = '';
	lettersUl.innerHTML = '';
	howManyCanYouTry = 5;

    numberOfGuessedLetters = 0;

}


function init(){

	for(var i = 0; i < LETTERS_ARR.length; i++) {

		var liNode = document.createElement("LI"); 

		 liNode.setAttribute('id', LETTERS_ARR[i]);
		 liNode.innerHTML = LETTERS_ARR[i];

		 	liNode.addEventListener("click", checkLetter);

		 lettersUl.appendChild(liNode);

	}

	document.getElementById('howMany').innerHTML = howManyCanYouTry;

}


function checkLetter(e) {


	var letter = (e.target.id).toUpperCase();
	console.log(letter + " click");


	if(actualSentence.indexOf(letter) > -1) {

		setGuesseddLetters(letter);

		e.target.removeEventListener("click", checkLetter);

	} else {

		 howManyCanYouTry--;
		 document.getElementById('howMany').innerHTML = howManyCanYouTry;
		 addGallowELements();
	}

	checkIfGameOVer();

}

function addGallowELements() {

	drawGallowNextLine(ctx);

}

function setGuesseddLetters (letter) {


	for(var i = 0; i < actualSentence.length; i++) {


			if(actualSentence[i] == letter){

				document.getElementById('sentenceIndex'+i).innerHTML = letter;
				numberOfGuessedLetters++;
			}

	}


}

function checkSpacesInSentence() {

	for(var i = 0; i < actualSentence.length; i++) {


			if(actualSentence[i] == ' '){
				numberOfGuessedLetters++;
			}

	}

}


// EVENTS LISTENERS -------------------------------



startGameBtn.addEventListener("click", function(e){

	resetDomElementsAndVars();
	init();
	setActualPassword();
	ctx.clearRect(0,0, canvasGallow.width,canvasGallow.height);
	counter = 0;
	positionIncrementVal = 30;
	starPos = 20;
	howManyCanYouTry = 5;
	numberOfGuessedLetters = 0;

});


// CANVAS gallow ----------------------------------------------

var xCoordinate = 150;

function initCanvasGallow(context) {

		context.beginPath();
		context.moveTo(xCoordinate, starPos);
		context.lineWidth = 8;
		context.setLineDash([6,2]);

	}


	function drawGallowNextLine(context) {

		if(counter == 0) {
			actualYPos = starPos + positionIncrementVal;
			ctx.lineTo(xCoordinate, actualYPos);
			ctx.stroke();
			counter++;
			return;
		}

		if(counter < MAX_LINE_PARTS - 1) {

			actualYPos += positionIncrementVal;
			context.lineTo(xCoordinate, actualYPos);
			context.stroke();
			counter++;

		} else {

			ctx.lineWidth = 8;

			ctx.beginPath();
			ctx.lineWidth = 8;
			ctx.setLineDash([6,2]);
			actualYPos += positionIncrementVal;
			ctx.lineWidth = 15;
			var diameter = 50;
			context.arc(xCoordinate, actualYPos + (diameter / 2 ), diameter, 0, Math.PI * 2);
			context.stroke();

		}

	}


