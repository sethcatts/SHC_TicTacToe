while(!exit(input)) {
    const game_1 = new Game(3);
    game_1.prtBoard();
}

function exit(char) {
    return char == 'q';
}