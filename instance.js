//Create Game Object
var game_instance = new Game();

function selectCell(idn) {
    var cell = document.getElementById(idn[0] + "" + idn[1]);
    var elem = document.createElement('img');
    elem.className = "selected_cell";
    if(game_instance.currentPlayer == game_instance.player_1 && !game_instance.gameOver) {
        //cell.style.backgroundColor = game_instance.player_1.getColor();
        elem.src = game_instance.player_1.getPieceImage();
        cell.appendChild(elem);
        game_instance.placePiece(idn[0], idn[1]);
    } else if (!game_instance.gameOver){
        //cell.style.backgroundColor = game_instance.player_2.getColor();
        elem.src = game_instance.player_2.getPieceImage();
        cell.appendChild(elem);
        game_instance.placePiece(idn[0], idn[1]);
    } 
    
    if(game_instance.checkForWin()) {
        alert("Game Over! \n" + game_instance.waitingPlayer.getName() + " Wins!");
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