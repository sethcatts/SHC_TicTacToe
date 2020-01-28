module.exports = class Player {
    constructor(name, piece) {
        var name;
        var piece;
        var pieceImagePath;
        this.name = name;
        this.piece = piece;
        this.pieceImagePath = "";
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
}
