//Create Game Object
const game_instance = new Game(3);

function selectCell(idn) {
    var cell = document.getElementById(idn[0] + "" + idn[1]);
    if(game_instance.currentPlayer == game_instance.player_1) {
        cell.style.backgroundColor = "red";
    } else {
        cell.style.backgroundColor = "blue";
    }
    game_instance.placePiece(idn[0], idn[1]);
    console.log(game_instance.checkForWin());
}