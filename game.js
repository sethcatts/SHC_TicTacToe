class Game {
  /**
   * @constructor
   * @desc Game constructor
   * @implements {player} Player
   */
  constructor() {
    this.blank 		      = "[ ]";
    this.board 		      = this.createBoard();
    this.gameOver       = false;
    this.player_1       = new Player("Player One (X)", "x");
    this.player_2       = new Player("Player Two (O)", "o");
    this.currentPlayer  = this.player_1;
    this.waitingPlayer  = this.player_2;
  }

  /**
   * @desc Create a board of size n^2
   * @returns {array} Array representing the current game board
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

  /**
   * @desc Get the current board array
   * @returns {array} Board array
   */
  getBoard() {
    return this.board;
  }

  /**
   * @desc Set game board array
   * @param {array} boardArray - The desired board
   */
  setBoard(boardArray) {
    this.board = boardArray;
  }

  /**
   * @desc Print the board as it currently looks
   */
  printBoard() {
    for (let i = 0; i < this.board[0].length; i++) {
      console.log(this.board[i][0] + " " + this.board[i][1] + " " + this.board[i][2]);
    }
  }

  /**
   * @desc Place a piece in the game board array
   * @param {int} x - Board x pos
   * @param {int} y - Board y pos
   * @param {player} p - Player placing this piece
   */
  placePiece(x, y, p = this.currentPlayer) {
    if(this.legalMove(x, y) && !this.gameOver) {
      this.board[x][y] = p.getPiece();
      this.switchMovingPlayer();
      this.printBoard();
      this.checkForWin();
      this.checkForTie();
      return true;
    } else {
      console.error("GAME CLASS ERROR: Attempted illegal move");
      return false;
    }
  }

  /**
   * @desc Switch the current moving player
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

  /**
   * @desc Switch the theme for both player objects 
   * @param {string} theme - New theme
   */
  setPlayersPieceTheme(theme) {
    this.player_1.setSet(theme);
    this.player_2.setSet(theme);
  }

  /**
   * @desc Set the name of one of the players
   * @param {int} player - 1 or 2 
   * @param {string} name - Selected player's new name
   */
  setPlayerName(player, name) {
    if(player == 1) {
      this.player_1.setPlayerName(name);
    } else if(player == 2) {
      this.player_2.setPlayerName(name);
    } else {
      console.log("Invalid player selected for name change");
    }
  }


  /**
   * @desc Get the current theme
   * @returns {string} theme
   */
  getCurrentTheme() {
    return this.currentPlayer.getSet();
  }

  /**
   * @desc Verify if a move is legal at the board position provided
   * @param {int} x - Board x pos
   * @param {int} y - Board y pos
   * @returns {boolean} 
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
