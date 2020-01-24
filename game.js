class Game {
  /*
  * ARGS: number to be squared to create board of size n
  */
  constructor(boardSize) {
    var board;
    var gameOver;
    this.board      = this.createBoard(boardSize);
    this.gameOver   = false;
    //this.player_1   = new Player("One");
    //this.player_2   = new Player("Two");
  }

  createBoard(size) {
    let board = [];
    for(let i = 0; i < size; i++) {
      let tempArray = [];
      for(let j = 0; j < size; j++) {
          tempArray.push("X");
      }
      board.push(tempArray);
      tempArray = [];
    }
    return board;
  }
  
  getBoard() {
    return this.board;
  }
  
  setBoard(x) {
    this.board = x;
  }

  prtBoard() {
    for(let x in this.board) {
      console.error(this.board[x]);
    }
  }
  
  checkForWin() {
    return false;
  }
}

const game_1 = new Game(3);
console.error(game_1.prtBoard());
