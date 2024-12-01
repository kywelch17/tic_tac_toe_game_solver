# tic_tac_toe_game_solver

This is a Tic-Tac-Toe game solver that checks for the following conditions:

### 1) If there is a declared winner, through one of five scenarios:
- Vertically
- Horizontally
- Diagonally
- All four corners
- 2x2 box

### 2) If there are any moves remaining:
- If there are empty spaces (spaces where there are no X's or O's), and there is no winner, there are remaining moves.

### 3) Game is over:
- If one of the 5 conditions above is met, or the board is full of X's and O's with no winner, then the game is over.

---

## Running Test Cases:

I have created a file called `testCases.js`, which contains an array of objects with the following properties:
- `description` - A brief summary of the scenario.
- `board` - The current state of the Tic-Tac-Toe board.
- `expectedWinner` - The expected winner for this scenario.
- `expectedAnyMovesLeft` - Whether there are any remaining moves to be made.
- `expectedGameOver` - Whether the game is over.

The `index.js` file loops through this array, comparing the board and expected values against the corresponding functions in the `TicTacToe` class.

### To run the test cases:
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. If you have Node installed, run the following command in your terminal: `node index.js`

The test cases will execute, and the results will be displayed in your terminal. If no error messages or `Assertion failed` messages appear, it means all the test cases have passed successfully. Note that I have not used Jest or any other unit testing libraries; instead, I utilized `console.assert` to test the code.
