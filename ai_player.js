//https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/

class AI_Player extends Player {
    constructor(name, piece, color, difficulty) {
        super(name, piece, color);
        this.difficulty = difficulty;
    }

    evaluate(board) {
        //Check Rows
        for(var i = 0; i < 3; i++) {
            if(board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
                if(board[i][0] == this.piece) {
                    return 10;
                } else if(board[i][0] != "[ ]") {
                    return -10;
                }
            }
        }

        //Check columns
        for(var i = 0; i < 3; i++) {
            if(board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
                if(board[0][i] == this.piece) {
                    return 10;
                } else if(board[0][i] != "[ ]") {
                    return -10;
                }
            }
        }

        //Check diagonals
        if(board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
            if(board[0][0] == this.piece) {
                return 10;
            } else if(board[0][0] == "[ ]") {
                return -10;
            }
        }

        if(board[0][2] == board[1][1] && board[0][0] == board[2][0]) {
            if(board[0][2] == this.piece) {
                return 10;
            } else if(board[0][2] == "[ ]") {
                return -10;
            }
        }
        
        //Not a winning board
        return 0;
    }

    minimax(board, depth, max) {
        var score = this.evaluate(board);

        //Game ending cases
        if(score == 10 || score == -10) {
            return score;
        } else if(!this.isMovesLeft(board)) {
            return 0;
        }

        if(max) {
            var best = -Infinity;
            for(var i = 0; i < 3; i++) {
                for(var j = 0; j < 3; j++) {
                    if(board[i][j] == "[ ]") {
                        board[i][j] = this.piece;
                        best = Math.max(best, minimax(board, depth, !isMax));
                        board[i][j] = "[ ]";
                    }
                }
            }
            return best;
        } else {
            var best = Infinity;
            for(var i = 0; i < 3; i++) {
                for(var j = 0; j < 3; j++) {
                    if(board[i][j] == "[ ]") {
                        board[i][j] = this.piece;
                        best = Math.min(best, minimax(board, depth, !isMax));
                        board[i][j] = "[ ]";
                    }
                }
            }
            return best;
        }
        return best;
    }

    isMovesLeft(board) {
        var full = true;
	    for (let i = 0; i < 3; i++) {
             for (let j = 0; j < 3; j++) {      
                if(board[i][j] === "[ ]") {
                    full = false;
                }
            }
        }
        return full;
    }
}