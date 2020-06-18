//https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/

class AI_Player extends Player {
    constructor(name, piece, color, difficulty) {
        super(name, piece, color);
        var enemyPiece;
        var blank;
        this.blank = "[ ]";
        this.enemyPiece = "o";
        this.difficulty = difficulty;
    }

    //Appears to return the correct results based on one or two tests
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

        if(board[0][2] == board[1][1] && board[0][0] == board[2][0]) {
            if(board[0][2] == this.piece) {
                return 10;
            } else if(board[0][2] == this.enemyPiece) {
                return -10;
            }
        }
        
        //Not a winning board
        return 0;
    }

    minimax(board, depth, max) {
        //Calculate initial score
        var score = this.evaluate(board);
        console.log("Score: " + score);
        //Game ending cases
        if(score == 10 || score == -10) {
            return score;
        //If there are no moves left
        } else if(!this.isMovesLeft(board)) {
            return 0;
        }

        console.log("Got here");
        if(max) {
            var best = -1000;
            for(var i = 0; i < 3; i++) {
                for(var j = 0; j < 3; j++) {
                    if(board[i][j] == this.blank) {
                        board[i][j] = this.piece;
                        best = Math.max(best, this.minimax(board, depth++, !max));
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
                        best = Math.min(best, this.minimax(board, depth++, !max));
                        board[i][j] = this.blank;
                    }
                }
            }
            return best;
        }
    }

    findBestMove(board) {
        var bestVal = -Infinity;
        var bestMove = [-1,-1];
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(board[i][j] == this.blank) {
                    console.log("P: " + i + ", " + j);
                    //console.log(this.piece);
                    board[i][j] = "R";
                    console.log(board);
                    board[0][0] = this.piece;
                    console.log(board);
                    let moveVal = this.minimax(board, 0, false);
                    board[i][j] = this.blank;
                    if(moveVal > bestVal) {
                        bestMove = [i, j];
                    }
                }
            }
        }
        //console.log("Best Move: " + bestMove[0] + ", " + bestMove[1]);
        //console.log(this.piece);
        return bestMove;
    }

    //Checked
    isMovesLeft(board) {
        var full = true;
	    for (let i = 0; i < 3; i++) {
             for (let j = 0; j < 3; j++) {      
                if(board[i][j] == this.blank) {
                    full = false;
                }
            }
        }
        return full;
    }
}











