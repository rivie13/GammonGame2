class Point {
    constructor(number) {
        this.number = number;
        this.pieces = [];
        this.element = this.createPointElement();
        this.setupDropListeners();
    }

    createPointElement() {
        const point = document.createElement('div');
        point.className = `point p${this.number}`;
        point.dataset.point = this.number;
        return point;
    }

    setupDropListeners() {
        this.element.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.element.classList.add('drag-over');
        });

        this.element.addEventListener('dragleave', () => {
            this.element.classList.remove('drag-over');
        });

        this.element.addEventListener('drop', (e) => {
            e.preventDefault();
            this.element.classList.remove('drag-over');
            const color = e.dataTransfer.getData('text/plain');
            const draggedPiece = document.querySelector('.piece.dragging');
            
            if (draggedPiece) {
                const oldPoint = draggedPiece.parentElement;
                oldPoint.removeChild(draggedPiece);
                
                // Update the pieces array for the old point
                const oldPointObj = Board.getInstance().points.get(Number(oldPoint.dataset.point));
                oldPointObj.pieces = oldPointObj.pieces.filter(p => p.element !== draggedPiece);
                
                // Add to new point
                this.addPiece(color);
                
                // Restack pieces in both points
                oldPointObj.restackPieces();
                this.restackPieces();
            }
        });
    }

    addPiece(color) {
        const piece = new Piece(color);
        this.pieces.push(piece);
        this.element.appendChild(piece.element);
        this.restackPieces();
    }

    restackPieces() {
        this.pieces.forEach((piece, index) => {
            const offset = index * 45;
            piece.setPosition(offset, this.number > 12);
        });
    }

    clear() {
        this.pieces = [];
        this.element.innerHTML = '';
    }
}
