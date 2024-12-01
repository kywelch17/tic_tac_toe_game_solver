const TicTacToe = require('./TicTacToe');
const testCases = require('./testCases');

for (let i = 0; i < testCases.length; i++) {
    const { description, board, expectedWinner, expectedIsGameOver, expectedAnyMovesLeft } = testCases[i];
    
    const game = new TicTacToe(board);

    // If a test passed, you will just see the description. If it doesn't, you will see the error message.
    console.log(description);
    console.assert(game.checkWinner() === expectedWinner, `checkWinner() failed: Expected: ${expectedWinner}, Actual: ${game.checkWinner()}`);
    console.assert(game.anyMovesLeft() === expectedAnyMovesLeft, `anyMovesLeft() failed: Expected: ${expectedAnyMovesLeft}, Actual: ${game.anyMovesLeft()}`);
    console.assert(game.isGameOver() === expectedIsGameOver, `isGameOver() failed: Expected: ${expectedIsGameOver}, Actual: ${game.isGameOver()}`);
}