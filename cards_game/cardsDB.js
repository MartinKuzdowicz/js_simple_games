// object coonstructors ---------------------------------

function PlayCard(src, key, val, name) {
	this.imgSrc = src;
	this.key = key;
	this.gameVal = val;
	this.name = name;
}

// cards ------------------------------------------------

var cardsDir = 'cards/';

var cards = {

	twoOfClubs : new PlayCard(cardsDir+ '2_of_clubs.png', 'twoOfClubs', 2, '2 of clubs'),
	twoOfDiamonds : new PlayCard(cardsDir+ '2_of_diamonds.png', 'twoOfDiamonds', 2, '2 of diamonds'),
	twoOfHearts : new PlayCard(cardsDir+ '2_of_hearts.png', 'twoOfHearts', 2, '2 of hearts'),
	twoOfSpades : new PlayCard(cardsDir+ '2_of_spades.png', 'twoOfSpades', 2, '2 of spades'),

	threeOfClubs : new PlayCard(cardsDir+ '3_of_clubs.png', 'threeOfClubs', 3, '3 of clubs'),
	threeOfDiamonds : new PlayCard(cardsDir+ '3_of_diamonds.png', 'threeOfDiamonds', 3, '3 of diamonds'),
	threeOfHearts : new PlayCard(cardsDir+ '3_of_hearts.png', 'threeOfHearts', 3, '3 of hearts'),
	threeOfSpades : new PlayCard(cardsDir+ '3_of_spades.png', 'threeOfSpades', 3, '3 of spades'),

	fourOfClubs : new PlayCard(cardsDir+ '4_of_clubs.png', 'fourOfClubs', 4, '4 of clubs'),
	fourOfDiamonds : new PlayCard(cardsDir+ '4_of_diamonds.png', 'fourOfDiamonds', 4, '4 of diamonds'),
	fourOfHearts : new PlayCard(cardsDir+ '4_of_hearts.png', 'fourOfHearts', 4, '4 of hearts'),
	fourOfSpades : new PlayCard(cardsDir+ '4_of_spades.png', 'fourOfSpades', 4, '4 of spades'),

	fiveOfClubs : new PlayCard(cardsDir+ '5_of_clubs.png', 'fiveOfClubs', 5, '5 of clubs'),
	fiveOfDiamonds : new PlayCard(cardsDir+ '5_of_diamonds.png', 'fiveOfDiamonds', 5, '5 of diamonds'),
	fiveOfHearts : new PlayCard(cardsDir+ '5_of_hearts.png', 'fiveOfHearts', 5, '5 of hearts'),
	fiveOfSpades : new PlayCard(cardsDir+ '5_of_spades.png', 'fiveOfSpades', 5, '5 of spades'),

	sixOfClubs : new PlayCard(cardsDir+ '6_of_clubs.png', 'sixOfClubs', 6, '6 of clubs'),
	sixOfDiamonds : new PlayCard(cardsDir+ '6_of_diamonds.png', 'sixOfDiamonds', 6, '6 of diamonds'),
	sixOfHearts : new PlayCard(cardsDir+ '6_of_hearts.png', 'sixOfHearts', 6,'6 of hearts'),
	sixOfSpades : new PlayCard(cardsDir+ '6_of_spades.png', 'sixOfSpades', 6, '6 of spades'),

	sevenOfClubs : new PlayCard(cardsDir+ '7_of_clubs.png', 'sevenOfClubs', 7, '7 of clubs'),
	sevenOfDiamonds : new PlayCard(cardsDir+ '7_of_diamonds.png', 'sevenOfDiamonds', 7, '7 of diamonds'),
	sevenOfHearts : new PlayCard(cardsDir+ '7_of_hearts.png', 'sevenOfHearts', 7, '7 of hearts'),
	sevenOfSpades : new PlayCard(cardsDir+ '7_of_spades.png', 'sevenOfSpades', 7, '7 of spades'),

	eightOfClubs : new PlayCard(cardsDir+ '8_of_clubs.png', 'eightOfClubs', 8, '8 of clubs'),
	eightOfDiamonds : new PlayCard(cardsDir+ '8_of_diamonds.png', 'eightOfDiamonds', 8, '8 of diamonds'),
	eightOfHearts : new PlayCard(cardsDir+ '8_of_hearts.png', 'eightOfHearts', 8, '8 of hearts'),
	eightOfSpades : new PlayCard(cardsDir+ '8_of_spades.png', 'eightOfSpades', 8, '8 of spades'),

	nineOfClubs : new PlayCard(cardsDir+ '9_of_clubs.png', 'nineOfClubs', 9, '9 of clubs'),
	nineOfDiamonds : new PlayCard(cardsDir+ '9_of_diamonds.png', 'nineOfDiamonds', 9, '9 of diamonds'),
	nineOfHearts : new PlayCard(cardsDir+ '9_of_hearts.png', 'nineOfHearts', 9, '9 of hearts'),
	nineOfSpades : new PlayCard(cardsDir+ '9_of_spades.png', 'nineOfSpades', 9, '9 of spades'),

	tenOfClubs : new PlayCard(cardsDir+ '10_of_clubs.png', 'tenOfClubs', 10, '10 of clubs'),
	tenOfDiamonds : new PlayCard(cardsDir+ '10_of_diamonds.png', 'tenOfDiamonds', 10, '10 of diamonds'),
	tenOfHearts : new PlayCard(cardsDir+ '10_of_hearts.png', 'tenOfHearts', 10, '10 of hearts'),
	tenOfSpades : new PlayCard(cardsDir+ '10_of_spades.png', 'tenOfSpades', 10, '10 of spades'),

	jackOfClubs : new PlayCard(cardsDir+ 'jack_of_clubs2.png', 'jackOfClubs', 11, 'jack of clubs'),
	jackOfDiamonds : new PlayCard(cardsDir+ 'jack_of_diamonds2.png', 'jackOfDiamonds', 11, 'jack of diamonds'),
	jackOfHearts : new PlayCard(cardsDir+ 'jack_of_hearts2.png', 'jackOfHearts', 11, 'jack of hearts'),
	jackOfSpades : new PlayCard(cardsDir+ 'jack_of_spades2.png', 'jackOfSpades', 11, 'jack of spades'),

	kingOfClubs : new PlayCard(cardsDir+ 'king_of_clubs2.png', 'kingOfClubs', 12, 'king of clubs'),
	kingOfDiamonds : new PlayCard(cardsDir+ 'king_of_diamonds2.png', 'kingOfDiamonds', 12, 'king of diamonds'),
	kingOfHearts : new PlayCard(cardsDir+ 'king_of_hearts2.png', 'kingOfHearts', 12, 'king of hearts'),
	kingOfSpades : new PlayCard(cardsDir+ 'king_of_spades2.png', 'kingOfSpades', 12, 'king of spades'),

	queenOfClubs : new PlayCard(cardsDir+ 'queen_of_clubs2.png', 'queenOfClubs', 13, 'queen of clubs'),
	queenOfDiamonds : new PlayCard(cardsDir+ 'queen_of_diamonds2.png', 'queenOfDiamonds', 13, 'queen of diamonds'),
	queenOfHearts : new PlayCard(cardsDir+ 'queen_of_hearts2.png', 'queenOfHearts', 13, 'queen of hearts'),
	queenOfSpades : new PlayCard(cardsDir+ 'queen_of_spades2.png', 'queenOfSpades', 13, 'queen of spades'),

	aceOfClubs : new PlayCard(cardsDir+ 'ace_of_clubs.png', 'aceOfClubs', 14, 'ace of clubs'),
	aceOfDiamonds : new PlayCard(cardsDir+ 'ace_of_diamonds.png', 'aceOfDiamonds', 14, 'ace of diamonds'),
	aceOfHearts : new PlayCard(cardsDir+ 'ace_of_hearts.png', 'aceOfHearts', 14, 'ace of hearts'),
	aceOfSpades : new PlayCard(cardsDir+ 'ace_of_spades.png', 'aceOfSpades', 14, 'ace of spades'),

	blackJoker : new PlayCard(cardsDir+ 'black_joker.png', 'blackJoker', 15, 'black joker'),
	redJoker : new PlayCard(cardsDir+ 'red_joker.png', 'redJoker', 15, 'red joker')
}