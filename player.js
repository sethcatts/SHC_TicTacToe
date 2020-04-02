class Player {
    constructor(name, piece, color) {
        var name;
        var piece;
        var pieceImagePath;
        var playerColor
        this.playerColor    = color;
        this.name           = name;
        this.piece          = piece;
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
        return "" + this.pieceImagePath + "" + this.piece + '_' + p + '.png';
    }

    getColor() {
        return this.playerColor;
    }
    
    setName(name) {
        this.name = name;
    }
}
