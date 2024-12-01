function checkVerticalsAndHorizontals(board) {
    for (let i = 0; i < board.length; i++) {
        const rowValue = board[i][0];
        const colValue = board[0][i];

        // We are checking if all the values in a row are the same and are not falsey
        const rowWinner = rowValue && board[i].every(value => value === rowValue);
        if (rowWinner) {
            return rowValue;
        }

        // We are checking if all the values in a column are the same and are not falsey
        const colWinner = colValue && board.every(value => value[i] === colValue);
        if (colWinner) {
            return colValue;
        }
    }

    return null;
}

function checkCorners(board) {
    // Best approach in this case is to just take the 4 values via indexing the corners, see if they are truthy, and they all equal each other
    const topLeft = board[0][0];
    const bottomLeft = board[0][board.length - 1];
    const topRight = board[board.length - 1][0];
    const bottomRight = board[board.length - 1][board.length - 1];

    // We are checking if all the corners are truthy here
    const allCornersHaveValues = (topLeft && bottomLeft && topRight && bottomRight);
    if (!allCornersHaveValues) {
        return null;
    }

    // Now we are checking if the corners are all either X's or O's
    const allCornersAreSameValue = (topLeft === bottomLeft && bottomLeft === bottomRight && bottomRight === topRight);
    if (!allCornersAreSameValue) {
        return null;
    }

    // We can just return this as it is the winning value, all other corners are the same
    return topLeft;
}

function checkDiagonals(board) {
    // For diagonal check, we are checking if values [0][0], [1][1], .... , [3][3] are all the same
    const diagonalValue = board[0][0];
    const diagonalWinner = board.every((row, i) => row[i] && row[i] === diagonalValue);
    if (diagonalWinner) {
        return diagonalValue;
    }

    // For anti diagonal, we are checking if values [0][3], [1][2], [2][1], [3][0] are all the same
    const reverseDiagonalValue = board[0][board.length - 1];
    const reverseDiagonalWinner = board.every((row, i) => reverseDiagonalValue && row[board.length - 1 - i] === reverseDiagonalValue);
    if (reverseDiagonalWinner) {
        return reverseDiagonalValue;
    }

    return null;
}

function checkBox(board) {
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            // We are grabbing the value, and checking to the right, underneath, and diagonally to the right. If they are all the same, we gotta winner.
            const boxValue = board[i][j];
            if (boxValue && boxValue === board[i][j + 1] && boxValue === board[i + 1][j] && boxValue === board[i + 1][j + 1]) {
                return boxValue;
            }
        }
    }

    return null;
}

module.exports = {
    checkVerticalsAndHorizontals,
    checkCorners,
    checkDiagonals,
    checkBox,
};