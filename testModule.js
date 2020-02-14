  /*
  ** TESTS
  */
  
testGame() {
  Game g = new Game(3);
  
  //PRINT BOARD
  console.log("\n\nTEST - Print Board: \n")
  g.prtBoard();
  
  //PLACE PIECE
  console.log("\n\nTEST - Place Piece: \n" + "Was able to place piece: " + g.placePiece(g.player1.piece(), 0, 0) + " | TRUE");
  g.prtBoard()'
  
  //LEGAL MOVE
  console.log("\n\nTEST - Legal Move: \n" + "Legal Move at 0,0: " + g.legalMove(0,0) + " | FALSE");
}
