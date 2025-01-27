class Board {
    static instance = null;

    constructor() {
        if (Board.instance) {
            return Board.instance;
        }
        Board.instance = this;
        this.points = new Map();
        this.element = this.createBoardElement();
        this.initializePoints();
    }

    static getInstance() {
        if (!Board.instance) {
            new Board();
        }
        return Board.instance;
    }

    createBoardElement() {
        const board = document.createElement('div');
        board.className = 'backgammon-board';
        board.innerHTML = `
            <div class="board-half top"></div>
            <div class="board-bar"></div>
            <div class="board-half bottom"></div>
        `;
        return board;
    }

    initializePoints() {
        const topHalf = this.element.querySelector('.board-half.top');
        const bottomHalf = this.element.querySelector('.board-half.bottom');

        // Create points 13-24 (top)
        for (let i = 13; i <= 24; i++) {
            const point = new Point(i);
            this.points.set(i, point);
            topHalf.appendChild(point.element);
        }

        // Create points 1-12 (bottom)
        for (let i = 12; i >= 1; i--) {
            const point = new Point(i);
            this.points.set(i, point);
            bottomHalf.appendChild(point.element);
        }
    }

    setupInitialPosition() {
        const initialPositions = {
            1: { count: 2, color: 'white' },
            6: { count: 5, color: 'black' },
            8: { count: 3, color: 'black' },
            12: { count: 5, color: 'white' },
            13: { count: 5, color: 'black' },
            17: { count: 3, color: 'white' },
            19: { count: 5, color: 'white' },
            24: { count: 2, color: 'black' }
        };

        for (const [position, setup] of Object.entries(initialPositions)) {
            const point = this.points.get(Number(position));
            for (let i = 0; i < setup.count; i++) {
                point.addPiece(setup.color);
            }
        }
    }
}
