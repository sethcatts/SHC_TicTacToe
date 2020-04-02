class Game {
  /*
   * ARGS: number to be squared to create board of size [N x N]
   */
  constructor(boardSize) {
    var board;
    var gameOver;
    var blank;
    var currentPlayer;
    this.blank 		      = "[ ]";
    this.board 		      = this.createBoard(boardSize);
    this.gameOver       = false;
    this.player_1       = new Player("Player One", "x", "white");
    this.player_2       = new Player("Player Two", "o", "orange");
    this.currentPlayer  = this.player_1;
  }

  /*
   ** Function    : Create a board of size n^2
   ** @Args       : Integer
   ** @Returns    : Array
   */
  createBoard(size) {
    let board = [];
    for (let i = 0; i < size; i++) {
      let tempArray = [];
      for (let j = 0; j < size; j++) {
        tempArray.push(this.blank);
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
    for (let i = 0; i < this.board[0].length; i++) {
      console.log(this.board[i][0] + " " + this.board[i][1] + " " + this.board[i][2]);
    }
  }

  /*
   ** Function    : Place piece on game board
   ** @Args       : Piece, x-coord, y-coord
   ** @Returns    : Boolean
   */
  placePiece(x, y, p = this.currentPlayer) {
    if(this.legalMove(x, y) && !this.gameOver) {
      this.board[x][y] = p.getPiece();
      this.switchMovingPlayer();

      //DEBUG
      this.prtBoard();
      
      return true;
    } else {
      console.error("GAME CLASS ERROR: Attempted illegal move");
      return false;
    }
  }

  /*
   ** Function    : Rotate the current moving player according to the game
   ** @Args       : None
   ** @Returns    : Current player according to the game class
   */
  switchMovingPlayer() {
    if(this.currentPlayer == this.player_1) {
      this.currentPlayer = this.player_2;
    } else {
      this.currentPlayer = this.player_1;
    }
    return this.currentPlayer;
  }

  /*
  ** Function     : Check if a piece can be placed at the coordinate
  ** @Args        : [x,y] board coordinates 
  ** @Returns     : Boolean  
  */
  legalMove(x, y) {
    if(x <= this.board.length && y <= this.board[0].length) {
	    return this.board[x][y] === this.blank;
    } else {
	    return false;
    }
  }
  
  /*
  ** Function     : Check if all game board cells are used
  ** @Args        : None 
  ** @Returns     : Boolean 
  **
  ** NOT TESTED
  **
  */
  boardFull() {
	  var full = true;
	  for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if(this.board[i][j] === this.blank) {
          full = false;
        }
      }
    }
    return full;
  }

	/*
  ** Function     : Check if the board is full and nobody has won
  ** @Args        : None 
  ** @Returns     : Boolean value
  */
  checkForTie() {
	  if(this.boardFull() && !checkForWin()) {
		  return true;
	  } else {
		  return false;
	  }
  }

  /*
   ** Function     : Check the board for a winning 
   **                position and return a win object
   ** @Args        : None
   ** @Returns     : Object
   **
   ** NOTE: HAS NOT BEEN TESTED
   **
   ** NOTE: I'm going to write this the stupid way so that testing can continue
   **       but it should be refactored later using for-loops
   */
  checkForWin() {
    let state = false;
    /*  
    **  H: Horizontal/Row, 
    **  T: Top/First, 
    **  M: Middle/Center, 
    **  B: Bottom/Last, 
    **  V: Vertical/Column
    **  D: Diagonal(START-FINISH)
    */
    //Case coverage total: 1/8
    //H-T
    if(this.board[0][0] === this.board[0][1] 
       && this.board[0][0] === this.board[0][2] 
       && this.board[0][0] != this.blank) {
      state = true;
      //H-M
    } else if(this.board[1][0] === this.board[1][1] 
              && this.board[1][0] === this.board[1][2]
              && this.board[1][0] != this.blank) {
      state = true;
      //H-B
    } else if(this.board[2][0] === this.board[2][1] 
              && this.board[2][0] === this.board[2][2]
              && this.board[2][0] != this.blank) {
      state = true;
      //V-T
    } else if(this.board[0][0] === this.board[1][0] 
              && this.board[0][0] === this.board[2][0]
              && this.board[0][0] != this.blank) {
      state = true;
      //V-M
    } else if(this.board[0][1] === this.board[1][1] 
              && this.board[0][1] === this.board[1][2]
              && this.board[0][1] != this.blank) {
      state = true;
      //V-B
    } else if(this.board[2][0] === this.board[1][2] 
              && this.board[2][0] === this.board[2][2]
              && this.board[2][0] != this.blank) {
      state = true;
      //D(T-B)
    } else if(this.board[0][0] === this.board[1][1] 
              && this.board[0][0] === this.board[2][2]
              && this.board[0][0] != this.blank) {
      state = true;
      //D(B-T)
    } else if(this.board[2][0] === this.board[1][1] 
              && this.board[2][0] === this.board[0][2]
              && this.board[2][0] != this.blank) {
      state = true;
    }
    this.gameOver = state;
    return state;
  }
}
