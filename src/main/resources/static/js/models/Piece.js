class Piece {
    constructor(color) {
        this.color = color;
        this.element = this.createPieceElement();
    }

    createPieceElement() {
        const piece = document.createElement('div');
        piece.className = `piece ${this.color}`;
        return piece;
    }

    setPosition(offset, isTopHalf) {
        if (isTopHalf) {
            this.element.style.top = `${offset}px`;
        } else {
            this.element.style.bottom = `${offset}px`;
        }
    }
}