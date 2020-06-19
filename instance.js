//Create Game Object
var ai = new AI_Player("testy", "x", "White", 0);
var testboard = [   
                ["x","[ ]","[ ]"],
                ["o","[ ]","[ ]"],
                ["x","o","x"]
            ];
console.log(testboard);
//console.log(ai.evaluate(testboard));
console.log("---");
ai.findBestMove(testboard);



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

//Sloppy
function newGame() {
    var currentTheme = game_instance.getCurrentTheme();
    game_instance = new Game();
    game_instance.setPlayersPieceTheme(currentTheme);
    clearBoard();
}

//I find it very sus that this works, should probably refactor at some point
function clearBoard() {
    let elems_cell = document.getElementsByClassName("selected_cell");
    while(elems_cell.length > 0) {
        elems_cell[0].parentNode.removeChild(elems_cell[0]);
    }
}

//Sloppy
function changeTheme(theme) { 
    game_instance.setPlayersPieceTheme(theme);
    var page = document.documentElement;
    var themes = {
        "dark"          : ["white", "white", "white", "rgba(78, 78, 78, 0.5)", "white", "black", "none"],
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
