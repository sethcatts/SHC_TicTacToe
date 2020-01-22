class Game {
  var board = [[],[]];
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

}
const game_1 = new Game(3);
console.error(game.getBoard());
