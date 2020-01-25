module.exports = class Player {
    constructor(name, piece) {
        var name;
        var piece;
        this.name = name;
        this.piece = piece;
    }

    getName() {
        return this.name;
    }

    getPiece() {
        return this.piece;
    }
}