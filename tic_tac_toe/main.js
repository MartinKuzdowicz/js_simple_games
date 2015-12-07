
// VARS DECLARATION

var COLOR_RED = 'red';

var COLOR_BLUE = 'blue';

var GAME_IS_OVER = false;

var userMoved = false;

var gameRound;

var fields;

var actualEmptyFieldsIndexes = [];

var computerTimeForThinkingMillis = 1500;


// MAIN -----------------------------------------

$(document).ready(function(){

	initGame();

	// EVENT LITSENERS -------------------------------

	$('td').click(function(e){

		play(e);

	});



	$('#startNewGameBtn').click(function(){

		resetFields();
		initGame();
		
		$('#roundColor').css('background-color', gameRound);

	});


});


// FUNCTIONS -------------------------


function initGame() {

	fields = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'];

	gameRound = COLOR_RED;

	GAME_IS_OVER = false;

    userMoved = false;
}

function switchPlayer(){

	if(gameRound == COLOR_RED) {
		 gameRound = COLOR_BLUE;
	} else {
		gameRound = COLOR_RED
	}

	 $('#roundColor').css('background-color', gameRound);
}

function addColorToEventTarget(e) {

	var eventTarget = e.target;

	var id = eventTarget.id;
	console.log(eventTarget.id);

	$('#'+id).css('background-color', gameRound);
	$('#'+id).attr('disabled', true);

	setFieldVariabels(id, gameRound);

}

function addColorToTargetById(fieldNodeId) {


	$('#'+fieldNodeId).css('background-color', gameRound);
	$('#'+fieldNodeId).attr('disabled', true);

	setFieldVariabels(fieldNodeId, gameRound);

}

function setFieldVariabels(fieldName, color) {
	console.log('setFieldVariabels()');

	console.log('field name ' + fieldName);

	if(fieldName == 'p1') {
		fields[0] = color;
	}

	if(fieldName == 'p2') {
		fields[1] = color;
	}

	if(fieldName == 'p3') {
		fields[2] = color;
	}

	if(fieldName == 'p4') {
		fields[3] = color;
	}

	if(fieldName == 'p5') {
		fields[4] = color;
	}

	if(fieldName == 'p6') {
		fields[5] = color;
	}

	if(fieldName == 'p7') {
		fields[6] = color;
	}

	if(fieldName == 'p8') {
		fields[7] = color;
	}

	if(fieldName == 'p9') {
		fields[8] = color;
	}

}

function alertWinnerIfThereIsAWinner() {




	if(fields.indexOf('n') == -1){

		alert('Game over!!! nobodo won');
		return;

	}

	var p1 = fields[0];
	var p2 = fields[1];
	var p3 = fields[2];
	var p4 = fields[3];
	var p5 = fields[4];
	var p6 = fields[5];
	var p7 = fields[6];
	var p8 = fields[7];
	var p9 = fields[8];

	if(p1 == p2 && p2 == p3 && p1 != 'n') {

		GAME_IS_OVER = true;
		alert('winning color: '+p1);

	}

	if(p4 == p5 && p5 == p6 && p4 != 'n') {

		GAME_IS_OVER = true;
		alert('winning color: '+p4);

	}

	if(p7 == p8 && p8 == p9 && p7 != 'n') {

		GAME_IS_OVER = true;
		alert('winning color: '+p7);

	}

	if(p1 == p5 && p5 == p9 && p1 != 'n') {

		GAME_IS_OVER = true;
		alert('winning color: '+p1);

	}

	if(p7 == p5 && p5 == p3 && p7 != 'n') {

		GAME_IS_OVER = true;
		alert('winning color: '+p7);

	}

	if(p1 == p4 && p4 == p7 && p1 != 'n') {

		GAME_IS_OVER = true;
		alert('winning color: '+p1);

	}

	if(p2 == p5 && p5 == p8 && p2 != 'n') {

		GAME_IS_OVER = true;
		alert('winning color: '+p2);

	}

	if(p3 == p6 && p6 == p9 && p3 != 'n') {

		GAME_IS_OVER = true;
		alert('winning color: '+p3);

	}

}

function chceckIfFieldISSet(event) {

	var eventTargetElId = event.target.id;

	var p1 = fields[0];
	var p2 = fields[1];
	var p3 = fields[2];
	var p4 = fields[3];
	var p5 = fields[4];
	var p6 = fields[5];
	var p7 = fields[6];
	var p8 = fields[7];
	var p9 = fields[8];

	if(eventTargetElId == 'p1') {
		return chceckIFFieldIsSet(p1);
	}
	if(eventTargetElId == 'p2') {
		return chceckIFFieldIsSet(p2);
	}
	if(eventTargetElId == 'p3') {
		return chceckIFFieldIsSet(p3);
	}
	if(eventTargetElId == 'p4') {
		return chceckIFFieldIsSet(p4);
	}
	if(eventTargetElId == 'p5') {
		return chceckIFFieldIsSet(p5);
	}
	if(eventTargetElId == 'p6') {
		return chceckIFFieldIsSet(p6);
	}
	if(eventTargetElId == 'p7') {
		return chceckIFFieldIsSet(p7);
	}
	if(eventTargetElId == 'p8') {
		return chceckIFFieldIsSet(p8);
	}
	if(eventTargetElId == 'p9') {
		return chceckIFFieldIsSet(p9);
	}

}

function chceckIFFieldIsSet(filedVar) {

	if(filedVar != 'n') {
		return false;
	} else {
		return true;
	}

}


function populateActualEmtpyFields() {

	actualEmptyFieldsIndexes = [];

	for(var i = 0; i < fields.length; i++) {

			if(fields[i] == 'n') {

				actualEmptyFieldsIndexes.push(i);
				
			}

		}


	actualEmptyFieldsIndexes.sort();

	console.log('actual empty fields indexes ' + actualEmptyFieldsIndexes);

}


function play(e) {

		if(!userMoved) {


			humanMove(e);
			

		} else {

			alert('wait for computer');
		}

	

		if(userMoved && !GAME_IS_OVER) {

			computerMove();
	
		}

	}

function humanMove(e) {

	var isNotset = chceckIfFieldISSet(e);

		if(isNotset) {

			addColorToEventTarget(e);
			switchPlayer();
			populateActualEmtpyFields();
			alertWinnerIfThereIsAWinner();
			userMoved = true;

		}

}


function computerMove() {

	var randomIndexToSet = Math.floor( Math.random() * actualEmptyFieldsIndexes.length );

	var emtyFiledId = actualEmptyFieldsIndexes[randomIndexToSet];

	setTimeout(function(){

		var fieldNodeId = 'p' + (emtyFiledId + 1);

		addColorToTargetById(fieldNodeId);

		switchPlayer();
	
		userMoved = false;
		populateActualEmtpyFields();

		if(!GAME_IS_OVER) {
			alertWinnerIfThereIsAWinner();
		}
			

	}, computerTimeForThinkingMillis);

}

function resetFields() {
	var fieldsList = $('td');

	for(var i = 0; i < fieldsList.length; i++){

		var fieldId = fieldsList[i].id;

		$('#'+fieldId).css('background-color', '');
		$('#'+fieldId).attr('disabled', false);

	}
}

