class Player {
    /**
     * @constructor
     * @desc Player constructor
     * @param {string} name - player name
     * @param {char} piece - (x or o) 
     * @param {string} color - color
     */
    constructor(name, piece, color) {
        var name;
        var piece;
        var pieceImagePath;
        var playerColor
        var themes;
        var themeKey;
        this.themes = {
            "dark": "theme-dark/",
            "light": "theme-light/",
            "blue_red": "theme_blue-red/",
            "green_orange": "theme_green-orange/",
            "yellow_purple": "theme_yellow-purple/"
        }
        this.themeKey       = "dark";
        this.playerColor    = color;
        this.name           = name;
        this.piece          = piece;
        this.set            = this.themes.dark;
        this.pieceImagePath = "images/";
    }

    /**
     * @desc Get name
     * @returns {string} - object's name property
     */
    getName() {
        return this.name;
    }

    /**
     * @desc Get player piece
     * @returns {char} - object piece 
     */
    getPiece() {
        return this.piece;
    }

    /**
     * @desc Get piece image path for this player
     * @returns {string} piece image path
     */
    getPieceImage() {
        let p = Math.floor(Math.random() * 3) + 1;
        return "" + this.pieceImagePath + this.set + this.piece + "_1.png"; 
    }

    getColor() {
        return this.playerColor;
    }

    getSet() {
        return this.themeKey;
    }
    
    setName(name) {
        this.name = name;
    }

    setSet(theme) {
        this.themeKey = theme;
        this.set = this.themes[theme];
    }
}
