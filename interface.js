//Create Game Object
var game_instance = new Game();

function selectCell(idn) {
    var cell = document.getElementById(idn[0] + "" + idn[1]);
    var elem = document.createElement('img');
    elem.className = "selected_cell";
    if(!game_instance.gameOver && game_instance.legalMove(idn[0], idn[1])) {
        game_instance.placePiece(idn[0],idn[1]);
        elem.src = game_instance.currentPlayer.getPieceImage();
        cell.appendChild(elem);
    } 
    if(game_instance.checkForWin()) {
        alert("Game Over! \n" + game_instance.currentPlayer.getName() + " Wins!");
    }
    if(game_instance.checkForTie()) {
        alert("Game Over! \n" + "The result is a tie!");
    }
}

function newGame() {
    game_instance = new Game();
    clearBoard();
}


//I find it very sus that this works, should probably refactor at some point
function clearBoard() {
    let elems_cell = document.getElementsByClassName("selected_cell");
    while(elems_cell.length > 0) {
        elems_cell[0].parentNode.removeChild(elems_cell[0]);
    }
}