//Create game object instance
var game_instance = new Game();

/**
 * @desc Add piece to board
 * @param {array} i - Board index
 * @param {string} imgPath - Path to image
 */
function fillCell(i, imgPath) {
    var elem        = document.createElement('img');
    elem.className  = "selectedCell";
    elem.src        = imgPath;
    document.getElementById(i[0] + "" + i[1]).appendChild(elem);
}


/**
 * @desc Perform a (game) move
 * @param {array} i - Board Index
 */
function selectCell(i) {
    game_instance.placePiece(i[0], i[1]);
    fillCell(i[0], i[1]);
}


/**
 * @desc Provide an alert if the game is over.
 * @returns {boolean} true if game is over
 */
function checkGameStatus() {
    var status = false;
    if(game_instance.checkForWin() && game_instance.gameOver) {
        alert("Game Over! \n" + game_instance.currentPlayer.getName() + " Wins!");
        status = true;
    }
    if(game_instance.checkForTie() && game_instance.gameOver) {
        alert("Game Over! \n" + "The result is a tie!");
        status = true;
    }
    return status;
}


/**
 * @desc Create a new game
 */
function newGame() {
    var currentTheme = game_instance.getCurrentTheme();
    game_instance = new Game();
    game_instance.setPlayersPieceTheme(currentTheme);
    clearBoard();
}

//I find it very sus that this works, should probably refactor at some point
/**
 * @desc Clear game board (visual)
 */
function clearBoard() {
    let elems_cell = document.getElementsByClassName("selected_cell");
    while(elems_cell.length > 0) {
        elems_cell[0].parentNode.removeChild(elems_cell[0]);
    }
}

//Sloppy
/**
 * @desc Change the board & piece theme
 * @param {string} theme 
 */
function changeTheme(theme) { 
    game_instance.setPlayersPieceTheme(theme);
    var page = document.documentElement;
    var themes = {
        "dark"          : ["black", "white", "white", "rgba(78, 78, 78, 0.5)", "white", "black", "none"],
        "light"         : ["white", "black", "black", "rgba(78, 78, 78, 0.5)", "black", "white", "none"],
        "blue_red"      : ["rgb(42,185,255)", "white", "white", "rgba(78, 78, 78, 0.5)", "black", "black", 
                           "linear-gradient(90deg, rgba(42,185,255,1) 0%, rgba(255,57,57,1) 100%)"],
        "green_orange"  : ["rgb(255, 255, 255)", "black", "black", "rgba(78, 78, 78, 0.5)", "black", "white"],
        "yellow_purple" : ["black", "black", "black", "rgba(78, 78, 78, 0.5)", "black", "white"],
    }
    page.style.setProperty("--background-color", themes[theme][0]);
    page.style.setProperty("--font-color", themes[theme][1]);
    page.style.setProperty("--cell-background-color", themes[theme][2]);
    page.style.setProperty("--cell-highlight-color", themes[theme][3]);
    page.style.setProperty("--board-border-color", themes[theme][4]);
    page.style.setProperty("--board-background-color", themes[theme][5]);
    page.style.setProperty("--gradient", themes[theme][6]);
}
