const Game = require("./game");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var input = 'c';
const game_1 = new Game(3);

game_1.prtBoard();
readline.question('Command: ', (com) => {
    com = com.split("");
    game_1.placePiece("X", com[0], com[1])
    readline.close();
    game_1.prtBoard();
});



/*
    Untied code
*/
$(function() {
	$(".r_1").click(function() {
  	$(this).css('background-color', 'black');
  });
});
