// VARIABELS DECLARATION ------------------------------------

var NUBER_OF_BLOCKS = 20;
var BLOCKS_ON_COLUMN = 5;
var blocks = [];
var takenBlocks = [];
var moveCounts = 0;

var board = $('#board');

var startGameBtn = document.getElementById('startGameBtn');

var blocksImages = [
    'images/ititle_1.png',
    'images/title_2.png',
    'images/title_3.png',
    'images/title_4.png',
    'images/title_5.png',
    'images/title_6.png',
    'images/title_7.png',
    'images/title_8.png',
    'images/title_9.png',
    'images/title_10.png'
]


startGameBtn.addEventListener("click", function(){

	startGame();

});


// FUNCTIONS ---------------------------------------------

function startGame() {
	console.log('startGame()');

	reset();
	fillBlocksArrayWithAscendingPairs();

	swapOrderedBlocksArrayToRandom();

	fillBoardWithBlocks();
	

	
}

function fillBlocksArrayWithAscendingPairs() {
	// fill array with pairs
	for (var i=0; i<NUBER_OF_BLOCKS; i++) {

   		 blocks.push(Math.floor(i/2));
	}

}

function swapOrderedBlocksArrayToRandom() {

	for (var i= NUBER_OF_BLOCKS-1; i > 0; i--) {
	    var swap = Math.floor(Math.random()*i);
	    var tmp = blocks[i];
	    blocks[i] = blocks[swap];
	    blocks[swap] = tmp;
	}  

}

function fillBoardWithBlocks() {

	for (var i = 0; i < NUBER_OF_BLOCKS; i++) {


		var tile = $('<div class="block"></div>');
		  board.append(tile);

		tile.data('cardType',blocks[i]);
	    tile.data('index', i);
	    
	     tile.css({
	        left : 5+(tile.width()+5)*(i%BLOCKS_ON_COLUMN)
	    });
	    tile.css({
	        top : 5+(tile.height()+5)*(Math.floor(i/BLOCKS_ON_COLUMN))
	    });
	 
	    tile.click('click',function() {
	        // klikniecieKafelka($(this))
	    });

	  
   
	}

}


function reset() {
	console.log('reset()');

	 blocks = [];
	 takenBlocks = [];
	 moveCounts = 0;
	 board.innerHTML = '';

}