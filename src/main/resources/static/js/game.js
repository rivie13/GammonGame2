document.addEventListener('DOMContentLoaded', function() {
    initializeBoard();
});

function initializeBoard() {
    // Initial piece positions
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

    for (let position in initialPositions) {
        const point = document.querySelector(`.point.p${position}`);
        const { count, color } = initialPositions[position];
        
        for (let i = 0; i < count; i++) {
            const piece = document.createElement('div');
            piece.className = `piece ${color}`;
            
            // Calculate position
            const offset = i * 45; // Spacing between pieces
            if (position <= 12) {
                piece.style.bottom = `${offset}px`;
            } else {
                piece.style.top = `${offset}px`;
            }
            
            point.appendChild(piece);
        }
    }
} 