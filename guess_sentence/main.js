
// MAIN ----------------------------------------

var lettersUl = document.getElementById('letters');

var LETTERS_ARR = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w','x','y','z','ź','ż'];

var startGameBtn = document.getElementById('startGameBtn');

init();




// FUNCTIONS ------------------------------------------

function init(){

	for(var i = 0; i < LETTERS_ARR.length; i++) {

		var liNode = document.createElement("LI"); 

		 liNode.innerHTML = LETTERS_ARR[i];
		 lettersUl.appendChild(liNode);

	}

}


startGameBtn.addEventListener("click", function(e){

	alert(e.target.id);

});


