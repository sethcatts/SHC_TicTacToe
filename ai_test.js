var ai = new AI_Player("AI", "x", "black", 3, "-");

/* ============================ AI TESTING ================================ *
MEM: ► (9744), • (7), ○ (9), 
    >> TODO <<
    ► Check AI class methods
        • getBestMove
        ○ evaluate
        ○ minmax
        ○ isMovesLeft
 * ======================================================================== */
//Best move boards
var board1 = [["x","-","o"],
              ["-","-","x"],
              ["o","-","-"]];
var board2 = [["-","o","x"],
              ["x","-","-"],
              ["-","o","-"]];
var board3 = [["o","x","x"],
              ["-","-","o"],
              ["o","-","x"]];
/*-- Eval boards
var board_x = [["x","x","x"],
              ["-","-","o"],
              ["o","-","x"]];  
var board_y = [["x","x","o"],
              ["-","-","o"],
              ["o","-","o"]]; 
var board_z = [["x","o","x"],
              ["o","-","x"],
              ["o","-","x"]]; 
var board_n = [["x","o","x"],
              ["-","-","x"],
              ["o","o","o"]];      
console.log("board eval: " + ai.evaluate(board1));
console.log("board eval: " + ai.evaluate(board2));
console.log("board eval: " + ai.evaluate(board3));
*/
//console.log("Best move for board 1 is: " + ai.getBestMove(board1));
var b1bm = ai.getBestMove(board1);
board1[b1bm[0]][b1bm[1]] = "P";
console.log(board1);

//console.log("Best move for board 2 is: " + ai.getBestMove(board2));
var b2bm = ai.getBestMove(board2);
board2[b2bm[0]][b2bm[1]] = "P";
console.log(board2);

//console.log("Best move for board 3 is: " + ai.getBestMove(board3));
var b3bm = ai.getBestMove(board3);
board3[b3bm[0]][b3bm[1]] = "P";
console.log(board3);

/* ======================================================================== *
 * ======================================================================== *
 * ======================================================================== */
