class Piece {
    constructor(color) {
        this.color = color;
        this.element = this.createPieceElement();
        this.setupDragListeners();
    }

    createPieceElement() {
        const piece = document.createElement('div');
        piece.className = `piece ${this.color}`;
        piece.draggable = true;
        return piece;
    }

    setupDragListeners() {
        this.element.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', this.color);
            this.element.classList.add('dragging');
        });

        this.element.addEventListener('dragend', () => {
            this.element.classList.remove('dragging');
        });
    }

    setPosition(offset, isTopHalf) {
        if (isTopHalf) {
            this.element.style.top = `${offset}px`;
        } else {
            this.element.style.bottom = `${offset}px`;
        }
    }
}