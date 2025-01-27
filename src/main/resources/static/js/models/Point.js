class Point {
    constructor(number) {
        this.number = number;
        this.pieces = [];
        this.element = this.createPointElement();
    }

    createPointElement() {
        const point = document.createElement('div');
        point.className = `point p${this.number}`;
        point.dataset.point = this.number;
        return point;
    }

    addPiece(color) {
        const piece = new Piece(color);
        const offset = this.pieces.length * 45;
        piece.setPosition(offset, this.number > 12);
        this.pieces.push(piece);
        this.element.appendChild(piece.element);
    }

    clear() {
        this.pieces = [];
        this.element.innerHTML = '';
    }
}
