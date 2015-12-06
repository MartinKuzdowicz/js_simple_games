
// GLOBAL VARS ------------------------------------

var lettersUl = document.getElementById('letters');

var sentenceUl = document.getElementById('sentence');

var LETTERS_ARR = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w','x','y','z','ź','ż'];

var startGameBtn = document.getElementById('startGameBtn');

var sentences = ['Fantomas','Super Szamson','Hasło'];

var howManyCanYouTry = 5;

var numberOfGuessedLetters = 0;

var actualSentence;


// MAIN ----------------------------------------


init();
setActualPassword();



// FUNCTIONS ------------------------------------------

function checkIfGameOVer() {
	if(howManyCanYouTry == 0) {

		alert('game over! You lose');


	}

	if(numberOfGuessedLetters == actualSentence.length) {

		alert('game over! You winn');

	}
}


function setActualPassword() {

	var randomNum = Math.floor(Math.random() * 3);

	actualSentence = sentences[randomNum].toUpperCase();

	for(var i = 0; i < actualSentence.length; i++) {

		var liNode = document.createElement("LI"); 

		liNode.setAttribute('id', 'sentenceIndex'+i);

		 sentenceUl.appendChild(liNode);
		
	}



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
	}

	checkIfGameOVer();

}

function setGuesseddLetters (letter) {


	for(var i = 0; i < actualSentence.length; i++) {


			if(actualSentence[i] == letter){

				document.getElementById('sentenceIndex'+i).innerHTML = letter;
				numberOfGuessedLetters++;
			}

	}


}


// EVENTS LISTENERS -------------------------------



startGameBtn.addEventListener("click", function(e){

	resetDomElementsAndVars();
	init();
	setActualPassword();

});


