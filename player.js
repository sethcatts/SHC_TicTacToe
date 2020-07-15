class Player {
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
     * @returns objects name property
     */
    getName() {
        return this.name;
    }

    getPiece() {
        return this.piece;
    }

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
