  /*
   ** TESTS
   */

  function testGame(g) {
    //PRINT BOARD
    console.log("\n\nTEST - Print Board: \n")
    g.prtBoard();

    //PRINT PLAYER NAMES
    console.log("\n\nTEST - Player names: \n");
    console.log("Player 1: " + g.player_1.getName());
    console.log("Player 2: " + g.player_2.getName());

    //PLACE PIECE
    console.log("\n\nTEST - Place Piece: \n" + "Was able to place piece: " +
      g.placePiece(g.player_1.getPiece(), 0, 0) + " | TRUE");
    g.prtBoard();

    //LEGAL MOVE
    console.log("\n\nTEST - Legal Move: \n" + "Legal Move at 0,0: " + g.legalMove(0, 0) +
      " | FALSE");

    //CHECK WIN STATE
    console.log("\n\nTEST - Print Board: \n")
    g.placePiece(g.player_1.getPiece(), 0, 1);
    g.placePiece(g.player_1.getPiece(), 0, 2);
    g.prtBoard();
    console.log("Game state: " + g.checkForWin() + "| TRUE");

  }

  function testPlayer(p) {
    return 0;
  }