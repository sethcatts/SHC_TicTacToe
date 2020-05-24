class Game {
  /*
   * ARGS: number to be squared to create board of size [N x N]
   */
  constructor() {
    var board;
    var gameOver;
    var blank;
    var currentPlayer;
    var waitingPlayer;
    this.blank 		      = "[ ]";
    this.board 		      = this.createBoard();
    this.gameOver       = false;
    this.player_1       = new Player("Player One (X)", "x", "white");
    this.player_2       = new Player("Player Two (O)", "o", "orange");
    this.currentPlayer  = this.player_1;
    this.waitingPlayer  = this.player_2;
    console.log("NEW GAME CREATED");
    //console.table(this);
  }

  /*
   ** Function    : Create a board of size n^2
   ** @Args       : Integer
   ** @Returns    : Array
   */
  createBoard() {
    let board = [];
    for (let i = 0; i < 3; i++) {
      let tempArray = [];
      for (let j = 0; j < 3; j++) {
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
      this.waitingPlayer = this.player_1;
    } else {
      this.currentPlayer = this.player_1;
      this.waitingPlayer = this.player_2;
    }
    return this.currentPlayer;
  }

  /*
  ** Function     : Set players 1 & 2 piece types(images)
  ** @Args        : Theme key (String)
  ** @Returns     : None
  */
  setPlayersPieceTheme(theme) {
    this.player_1.setSet(theme);
    this.player_2.setSet(theme);
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
  */
  boardFull() {
	  var full = true;
	  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {      
        if(this.board[i][j] === this.blank) {
          full = false;
        }
      }
    }
    return full;
  }

  /*
  ** Function     : Check if a cell is empty
  **
  ** @args        : Board coords
  ** @Returns     : Boolean
  */
  emptyCell(x,y) {
    return this.board[x][y] == this.blank;
  }

	/*
  ** Function     : Check if the board is full and nobody has won
  ** @Args        : None 
  ** @Returns     : Boolean value
  */
  checkForTie() {
	  if(this.boardFull() && !this.gameOver) {
		  return true;
	  } else {
		  return false;
	  }
  }

  /*
  ** Function     : Check the board for a winning 
  **                position and return a win object
  ** @Args        : None
  ** @Returns     : Boolean
  **
  ** NOTE: I'm going to write this the stupid way so that testing can
  **       continue but it should be refactored later using for-loops
  */
  checkForWin() {
    /*
    ** Helper     : True if all 3 arguments match
    **
    ** @Args      : 3 [Strings](cell values)
    ** @Returns   : Boolean
    */
    function c(f,s,t) {
      return (f == s && f == t);
    }
    let state = false;
    let R = this.board;
    if(c(R[0][0], R[0][1], R[0][2]) && R[0][0] != this.blank) {
      state = true;
    } else if(c(R[1][0], R[1][1], R[1][2]) && R[1][0] != this.blank) {
      state = true
    } else if(c(R[2][0], R[2][1], R[2][2]) && R[2][0] != this.blank) {
      state = true
    } else if(c(R[0][0], R[1][0], R[2][0]) && R[0][0] != this.blank) {
      state = true
    } else if(c(R[0][1], R[1][1], R[2][1]) && R[0][1] != this.blank) {
      state = true
    } else if(c(R[0][2], R[1][2], R[2][2]) && R[0][2] != this.blank) {
      state = true
    } else if(c(R[0][0], R[1][1], R[2][2]) && R[0][0] != this.blank) {
      state = true
    } else if(c(R[2][0], R[1][1], R[0][2]) && R[0][2] != this.blank) {
      state = true
    }
    this.gameOver = state;
    return state;
  }
}
