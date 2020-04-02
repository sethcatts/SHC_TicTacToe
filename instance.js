//Create Game Object
const game_instance = new Game(3);

function selectCell(idn) {
    var cell = document.getElementById(idn[0] + "" + idn[1]);
    var elem = document.createElement('img');
    if(game_instance.currentPlayer == game_instance.player_1) {
        //cell.style.backgroundColor = game_instance.player_1.getColor();
        elem.src = game_instance.player_1.getPieceImage();
        cell.appendChild(elem);
    } else {
        //cell.style.backgroundColor = game_instance.player_2.getColor();
        elem.src = game_instance.player_2.getPieceImage();
        cell.appendChild(elem);
    }
    game_instance.placePiece(idn[0], idn[1]);
    if(game_instance.checkForWin()) {
        alert("Game Over! \n" + game_instance.currentPlayer.getName() + " Wins!");
    }
}