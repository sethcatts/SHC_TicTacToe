module.exports = class Game {
  /*
  * ARGS: number to be squared to create board of size n squared
  */
  constructor(boardSize) {
    var board;
    var gameOver;
    this.board      = this.createBoard(boardSize);
    this.gameOver   = false;
    //this.player_1   = new Player("One");
    //this.player_2   = new Player("Two");
  }

  /*
  ** Function    : Create a board of size n^2
  ** @Args       : Integer
  ** @Returns    : Array
  */
  createBoard(size) {
    let board = [];
    for(let i = 0; i < size; i++) {
      let tempArray = [];
      for(let j = 0; j < size; j++) {
          tempArray.push("[ ]");
      }
      board.push(tempArray);
      tempArray = [];
    }
    return board;
  }
  
  /*
  ** Function    : Get the current game board array
  ** @Args       : None
  ** @Returns    : Array
  */
  getBoard() {
    return this.board;
  }
  
  /*
  ** Function    : Set the board object to a new array
  ** @Args       : Array
  ** @Returns    : None
  */
  setBoard(boardArray) {
    this.board = boardArray;
  }

  /*
  ** Function    : Print current state of game board
  ** @Args       : None
  ** @Returns    : None
  */
  prtBoard() {
    for(let i = 0; i < this.board[0].length; i++) {
      console.log(this.board[i]);
    }
  }

  /*
  ** Function    : Place piece on game board
  ** @Args       : Piece, x-coord, y-coord
  ** @Returns    : None
  */
  placePiece(p, x, y) {
    this.board[x][y] = p;
  }
  
  /*
  ** Function    : Check the board for a winning 
  **               position and return a win object
  ** @Args       : None
  ** @Returns    : Object
  */
  checkForWin() {
    let state = false;
    for(let i in this.board) {
      if(this.board[i][0] === this.board[i][1] === this.board[0][2]) {
        state = true;
      } else if(this.board[0][i] === this.board[1][i] === this.board[2][i]) {
        state = true;
      } else if(this.board[0][0] === this.board[1][1] === this.board[2][2]) {
        state = true;
      } else if(this.board[0][2] === this.board[1][1] === this.board[2][0]) {
        state = true;
      }
    }
    return state;
  }
}
