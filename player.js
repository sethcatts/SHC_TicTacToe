class Player {
    constructor(name, piece, color) {
        var name;
        var piece;
        var pieceImagePath;
        var playerColor
        var themes = {
            dark: "theme-dark/",
            light: "theme-light/",
            blue_red: "theme_blue-red/",
            green_orange: "theme_green-orange/",
            yellow_purple: "theme_yellow-purple/"
        }
        this.playerColor    = color;
        this.name           = name;
        this.piece          = piece;
        this.set            = themes.green_orange;
        this.pieceImagePath = "images/";
    }

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
    
    setName(name) {
        this.name = name;
    }

    setSet(theme) {
        this.set = themes.theme;
    }
}
