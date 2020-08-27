//https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/


/**
 * @class AI Player
 */
class AI_Player extends Player {
    /**
     * @constructor AI Player
     * @param {string} name 
     * @param {*} piece 
     * @param {*} color 
     * @param {*} difficulty 
     */
    constructor(name, piece, color, difficulty, blank) {
        super(name, piece, color);
        this.blank = blank;
        this.enemyPiece = "o";
        this.difficulty = difficulty;
    }

    /**
     * @desc Get best single move
     * @param {array} board 
     */
    getBestMove(board) {
        var bestVal = -1000;
        var bestMove = [-1,-1];

        //Loop over all empty values of the board
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(board[i][j] == this.blank) {

                    //Place move
                    board[i][j] = this.piece;
                    //console.log("Evaluating new first move");

                    //Get the likelyhood of a win based on this move (as a number)
                    var moveVal = this.minimax(board, 0, false);

                    //Undo the piece placement
                    board[i][j] = this.blank;

                    //If the new move that was found is the best move found so far
                    //set the optimal move to the new move;
                    //console.log("M: " + i + " " + j + "\nV: " + moveVal);
                    if(moveVal > bestVal) {
                        //console.log("found new best move of value: " + moveVal 
                                    //+ " compared to " + bestVal);
                        bestVal = moveVal;
                        bestMove = new Array(i, j);
                    }
                }
            }
        }
        //console.log("Best Move: " + bestMove[0] + ", " + bestMove[1]);
        return bestMove;
    }

    /**
     * @desc check for a win
     * @param {array} board 
     * @returns {int} board score based on who, if anyone, won the game
     */
    evaluate(board) {
        //Check Rows
        for(var i = 0; i < 3; i++) {
            if(board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
                if(board[i][0] == this.piece) {
                    return 10;
                } else if(board[i][0] == this.enemyPiece) {
                    return -10;
                }
            }
        }

        //Check columns
        for(var i = 0; i < 3; i++) {
            if(board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
                if(board[0][i] == this.piece) {
                    return 10;
                } else if(board[0][i] == this.enemyPiece) {
                    return -10;
                }
            }
        }

        //Check diagonals
        if(board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
            if(board[0][0] == this.piece) {
                return 10;
            } else if(board[0][0] == this.enemyPiece) {
                return -10;
            }
        }

        if(board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
            if(board[0][2] == this.piece) {
                return 10;
            } else if(board[0][2] == this.enemyPiece) {
                return -10;
            }
        }
        
        //Not a winning board
        return 0;
    }

    /**
     * @desc Get best move from board
     * @param {array} board 
     * @param {int} depth 
     * @param {int} max 
     */
    minimax(board, depth, max) {
        var score = this.evaluate(board);
        if(score == 10) {
            //console.log(depth);
            return score - depth;
        }else if(score == -10) {
            return score + depth;
        }

        if(!this.isMovesLeft(board)) {
            return 0;
        }

        if(max) {
            var best = -1000;
            for(var i = 0; i < 3; i++) {
                for(var j = 0; j < 3; j++) {
                    if(board[i][j] == this.blank) {
                        board[i][j] = this.piece;
                        best = Math.max(best, this.minimax(board, depth + 1, !max));
                        board[i][j] = this.blank;
                    }
                }
            }
            return best;
        } else {
            var best = 1000;
            for(var i = 0; i < 3; i++) {
                for(var j = 0; j < 3; j++) {
                    if(board[i][j] == this.blank) {
                        board[i][j] = this.piece;
                        best = Math.min(best, this.minimax(board, depth + 1, !max));
                        board[i][j] = this.blank;
                    }
                }
            }
            return best;
        }
    }

    /**
     * @desc Check for empty squares on the board
     * @param {array} board 
     */
    isMovesLeft(board) {
	    for (let i = 0; i < 3; i++) {
             for (let j = 0; j < 3; j++) {      
                if(board[i][j] == this.blank) {
                    return true;
                }
            }
        }
        return false;
    }
}











