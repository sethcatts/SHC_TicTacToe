//https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/

class AI_Player extends Player {
    constructor(name, piece, color, difficulty) {
        super(name, piece, color);
        this.difficulty = difficulty;
    }

    getBestMove(board) {
        //TODO
    }

    minimax(board, depth, isMaximazingPlayer) {
        if(/*current board state is terminal*/true) {
            //return value of board
        }

        if(isMaximazingPlayer) {
            var bestVal = -Infinity;
            //for()
        }
    }

    isMovesLeft(board) {
        //TODO
    }


}