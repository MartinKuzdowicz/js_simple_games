// object coonstructors ---------------------------------

function PlayCard(src, val, name) {
	this.imgSrc = src;
	this.gameVal = val;
	this.name = name;
}

// cards ------------------------------------------------

var cardsDir = 'cards/';

var cards = {

	twoOfClubs : new PlayCard(cardsDir+ '2_of_clubs.png', 2, '2 of clubs'),
	twoOfDiamonds : new PlayCard(cardsDir+ '2_of_diamonds.png', 2, '2 of diamonds'),
	twoOfHearts : new PlayCard(cardsDir+ '2_of_hearts.png', 2, '2 of hearts'),
	twoOfSpades : new PlayCard(cardsDir+ '2_of_spades.png', 2, '2 of spades'),

	threeOfClubs : new PlayCard(cardsDir+ '3_of_clubs.png', 3, '3 of clubs'),
	threeOfDiamonds : new PlayCard(cardsDir+ '3_of_diamonds.png', 3, '3 of diamonds'),
	threeOfHearts : new PlayCard(cardsDir+ '3_of_hearts.png', 3, '3 of hearts'),
	threeOfSpades : new PlayCard(cardsDir+ '3_of_spades.png', 3, '3 of spades'),

	fourOfClubs : new PlayCard(cardsDir+ '4_of_clubs.png', 4, '4 of clubs'),
	fourOfDiamonds : new PlayCard(cardsDir+ '4_of_diamonds.png', 4, '4 of diamonds'),
	fourOfHearts : new PlayCard(cardsDir+ '4_of_hearts.png', 4, '4 of hearts'),
	fourOfSpades : new PlayCard(cardsDir+ '4_of_spades.png', 4, '4 of spades'),

	fiveOfClubs : new PlayCard(cardsDir+ '5_of_clubs.png', 5, '5 of clubs'),
	fiveOfDiamonds : new PlayCard(cardsDir+ '5_of_diamonds.png', 5, '5 of diamonds'),
	fiveOfHearts : new PlayCard(cardsDir+ '5_of_hearts.png', 5, '5 of hearts'),
	fiveOfSpades : new PlayCard(cardsDir+ '5_of_spades.png', 5, '5 of spades'),

	sixOfClubs : new PlayCard(cardsDir+ '6_of_clubs.png', 6, '6 of clubs'),
	sixOfDiamonds : new PlayCard(cardsDir+ '6_of_diamonds.png', 6, '6 of diamonds'),
	sixOfHearts : new PlayCard(cardsDir+ '6_of_hearts.png', 6, '6 of hearts'),
	sixOfSpades : new PlayCard(cardsDir+ '6_of_spades.png', 6, '6 of spades'),

	sevenOfClubs : new PlayCard(cardsDir+ '7_of_clubs.png', 7, '7 of clubs'),
	sevenOfDiamonds : new PlayCard(cardsDir+ '7_of_diamonds.png', 7, '7 of diamonds'),
	sevenOfHearts : new PlayCard(cardsDir+ '7_of_hearts.png', 7, '7 of hearts'),
	sevenOfSpades : new PlayCard(cardsDir+ '7_of_spades.png', 7, '7 of spades'),

	eightOfClubs : new PlayCard(cardsDir+ '8_of_clubs.png', 8, '8 of clubs'),
	eightOfDiamonds : new PlayCard(cardsDir+ '8_of_diamonds.png', 8, '8 of diamonds'),
	eightOfHearts : new PlayCard(cardsDir+ '8_of_hearts.png', 8, '8 of hearts'),
	eightOfSpades : new PlayCard(cardsDir+ '8_of_spades.png', 8, '8 of spades'),

	nineOfClubs : new PlayCard(cardsDir+ '9_of_clubs.png', 9, '9 of clubs'),
	nineOfDiamonds : new PlayCard(cardsDir+ '9_of_diamonds.png', 9, '9 of diamonds'),
	nineOfHearts : new PlayCard(cardsDir+ '9_of_hearts.png', 9, '9 of hearts'),
	nineOfSpades : new PlayCard(cardsDir+ '9_of_spades.png', 9, '9 of spades'),

	tenOfClubs : new PlayCard(cardsDir+ '10_of_clubs.png', 10, '10 of clubs'),
	tenOfDiamonds : new PlayCard(cardsDir+ '10_of_diamonds.png', 10, '10 of diamonds'),
	tenOfHearts : new PlayCard(cardsDir+ '10_of_hearts.png', 10, '10 of hearts'),
	tenOfSpades : new PlayCard(cardsDir+ '10_of_spades.png', 10, '10 of spades'),

	jackOfClubs : new PlayCard(cardsDir+ 'jack_of_clubs2.png', 11, 'jack of clubs'),
	jackOfDiamonds : new PlayCard(cardsDir+ 'jack_of_diamonds2.png', 11, 'jack of diamonds'),
	jackOfHearts : new PlayCard(cardsDir+ 'jack_of_hearts2.png', 11, 'jack of hearts'),
	jackOfSpades : new PlayCard(cardsDir+ 'jack_of_spades2.png', 11, 'jack of spades'),

	kingOfClubs : new PlayCard(cardsDir+ 'king_of_clubs2.png', 12, 'king of clubs'),
	kingOfDiamonds : new PlayCard(cardsDir+ 'king_of_diamonds2.png', 12, 'king of diamonds'),
	kingOfHearts : new PlayCard(cardsDir+ 'king_of_hearts2.png', 12, 'king of hearts'),
	kingOfSpades : new PlayCard(cardsDir+ 'king_of_spades2.png', 12, 'king of spades'),

	queenOfClubs : new PlayCard(cardsDir+ 'queen_of_clubs2.png', 13, 'queen of clubs'),
	queenOfDiamonds : new PlayCard(cardsDir+ 'queen_of_diamonds2.png', 13, 'queen of diamonds'),
	queenOfHearts : new PlayCard(cardsDir+ 'queen_of_hearts2.png', 13, 'queen of hearts'),
	queenOfSpades : new PlayCard(cardsDir+ 'queen_of_spades2.png', 13, 'queen of spades'),

	aceOfClubs : new PlayCard(cardsDir+ 'ace_of_clubs.png', 14, 'ace of clubs'),
	aceOfDiamonds : new PlayCard(cardsDir+ 'ace_of_diamonds.png', 14, 'ace of diamonds'),
	aceOfHearts : new PlayCard(cardsDir+ 'ace_of_hearts.png', 14, 'ace of hearts'),
	aceOfSpades : new PlayCard(cardsDir+ 'ace_of_spades.png', 14, 'ace of spades'),

	blackJoker : new PlayCard(cardsDir+ 'black_joker.png', 15, 'black joker'),
	redJoker : new PlayCard(cardsDir+ 'red_joker.png', 15, 'red joker')
}