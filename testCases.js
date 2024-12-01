const testCases = [
    {
        description: 'X wins all four corners',
        board: [
            ['X', '', '', 'X'],
            ['O', '', '', ''],
            ['X', 'X', '',''],
            ['X', '', '', 'X'],
        ],
        expectedWinner: 'X',
        expectedIsGameOver: true,
        expectedAnyMovesLeft: false,
    },
    {
        description: 'O wins diagonally',
        board: [
            ['O', '', '', ''],
            ['X', 'O', 'X', ''],
            ['', '', 'O', ''],
            ['', '', '', 'O'],
        ],
        expectedWinner: 'O',
        expectedIsGameOver: true,
        expectedAnyMovesLeft: false,
    },
    {
        description: 'X wins reverse diagonally',
        board: [
            ['', 'O', '', 'X'],
            ['O', '', 'X', 'O'],
            ['O', 'X', '', 'O'],
            ['X', 'O', '', ''],
        ],
        expectedWinner: 'X',
        expectedIsGameOver: true,
        expectedAnyMovesLeft: false,
    },
    {
        description: 'O wins vertically column 2',
        board: [
            ['', 'O', '', ''],
            ['X', 'O', 'X', ''],
            ['X', 'O', 'X', ''],
            ['O', 'O', 'X', ''],
        ],
        expectedWinner: 'O',
        expectedIsGameOver: true,
        expectedAnyMovesLeft: false,
    },
    {
        description: 'X wins horizontally row 4',
        board: [
            ['', '', 'O', 'X'],
            ['O', '', '', 'X'],
            ['O', '', '', ''],
            ['X', 'X', 'X', 'X'],
        ],
        expectedWinner: 'X',
        expectedIsGameOver: true,
        expectedAnyMovesLeft: false,
    },
    {
        description: 'O wins 2x2 box',
        board: [
            ['X', '', '', ''],
            ['', 'O', 'O', ''],
            ['X', 'O', 'O', ''],
            ['', 'X', 'X', ''],
        ],
        expectedWinner: 'O',
        expectedIsGameOver: true,
        expectedAnyMovesLeft: false,
    },
    {
        description: 'X wins with multiple winning conditions (row + diagonal)',
        board: [
            ['X', 'X', 'X', 'O'],
            ['O', 'X', 'O', 'O'],
            ['X', 'O', 'X', 'O'],
            ['X', 'X', 'X', 'X'],
        ],
        expectedWinner: 'X',
        expectedIsGameOver: true,
        expectedAnyMovesLeft: false,
    },
    {
        description: 'No winner, full board',
        board: [
            ['X', 'O', 'X', 'O'],
            ['X', 'O', 'X', 'O'],
            ['O', 'X', 'X', 'X'],
            ['O', 'X', 'O', 'X'],  
        ],
        expectedWinner: null,
        expectedIsGameOver: true,
        expectedAnyMovesLeft: false,
    },
    {
        description: 'No winner, moves remaining',
        board: [
            ['X', 'X', '', ''],
            ['O', 'O', '', ''],
            ['X', '', '', ''],
            ['', '', 'O', ''],
        ],
        expectedWinner: null,
        expectedIsGameOver: false,
        expectedAnyMovesLeft: true,
    },
    {
        description: 'Empty board',
        board: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['' ,'', '', ''],
        ],
        expectedWinner: null,
        expectedIsGameOver: false,
        expectedAnyMovesLeft: true,
    },
];

module.exports = testCases;