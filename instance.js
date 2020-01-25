const Game = require("./game");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
var input = 'c';
const game_1 = new Game(3);

game_1.prtBoard();
readline.question('Command: ', (com) => {
    console.error(com);
    input = com; 
    readline.close();
});


