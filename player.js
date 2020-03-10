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
        return this.pieceImagePath;
    }

    getColor() {
        return this.color;
    }
    
    setName(name) {
        this.name = name;
    }
}
