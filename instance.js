//Create Game Object
const game_instance = new Game(3);

function selectCell(idn) {
    game_instance.placePiece(idn[0], idn[1]);
}