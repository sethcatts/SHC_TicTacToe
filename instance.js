//Create Game Object
const game_instance = new Game(3);

function selectCell(idn) {
    var cell = document.getElementById(idn[0] + "" + idn[1]);
    if(game_instance.currentPlayer == game_instance.player_1) {
        cell.style.backgroundColor = game_instance.player_1.getColor();
    } else {
        cell.style.backgroundColor = game_instance.player_2.getColor();
    }
    game_instance.placePiece(idn[0], idn[1]);
    if(game_instance.checkForWin()) {
        alert("Game Over! \n" + game_instance.currentPlayer.getName() + " Wins!");
    }
}