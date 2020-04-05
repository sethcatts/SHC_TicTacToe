//Create Game Object
const game_instance = new Game();

function selectCell(idn) {
    var cell = document.getElementById(idn[0] + "" + idn[1]);
    var elem = document.createElement('img');
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
}