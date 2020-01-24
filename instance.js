while(!exit(input)) {
    const game_1 = new Game(3);
    game_1.prtBoard();
}


//Fix/Test
function exit(char) {
    try {
        return char.length == 1;
    } catch(err) {
        console.error("Invalid string");
        return false;
    }
}
