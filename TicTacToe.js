const {
    checkVerticalsAndHorizontals,
    checkCorners,
    checkDiagonals,
    checkBox
} = require('./helpers');

class TicTacToe {
    constructor(board) {
        // The tic-tac-toe board
        this.board = board;

        // Boolean flag
        this.winnerFound = false;
    }

    checkWinner() {
        // Check corners
        const cornerWinner = checkCorners(this.board);
        if (cornerWinner) {
            this.winnerFound = true;
            return cornerWinner;
        }

        // Check vertical and horizontal lines
        const verticalOrHorizontalWinner = checkVerticalsAndHorizontals(this.board);
        if (verticalOrHorizontalWinner) {
            this.winnerFound = true;
            return verticalOrHorizontalWinner;
        }

        // Check diagonals
        const diagonalWinner = checkDiagonals(this.board);
        if (diagonalWinner) {
            this.winnerFound = true;
            return diagonalWinner;
        }

        // Check 2x2 boxes
        const boxWinner = checkBox(this.board);
        if (boxWinner) {
            this.winnerFound = true;
            return boxWinner;
        }

        // There is no winner
        return null;
    }

    anyMovesLeft() {
        // If a winner is declared, no moves are left
        if (this.winnerFound) {
            return false;
        }

        // If there are no empty cells, no moves left
        return this.board.some(row => row.includes(''));
    }

    isGameOver() {
        // Game ends immediately if a winner is found
        if (this.winnerFound) {
            return true;
        }

        // Check if there are no empty cells (board is full)
        return !this.board.some(row => row.some(value => !value));
    }
}

module.exports = TicTacToe;