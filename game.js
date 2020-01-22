class Game {
  var board = [[],[]];
  var win   = false;
  var player_1 = new Player("One");
  var player_2 = new Player("Two");
  /*
  * ARGS: number to be squared to create board of size n
  */
  constructor(3) {
     createBoard(board);
  }

  function createBoard(size, board) {
    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
          board[i][j] = x;
      }
    }
    return board;
  }
  
  function getBoard() {
    return this.board;
  }
  
  function checkForWin() {
    return false;
  }
}
const game_1 = new Game(3);
console.error(game.getBoard());
