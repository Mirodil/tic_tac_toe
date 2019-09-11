

export const WIN_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/**
 * Check to winner
 *
 * @export
 * @param {Array} cells
 * @returns
 */
export function calculateWinner(cells) {
    for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
        const [a, b, c] = WIN_COMBINATIONS[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}

/**
 * Helper function to randomly choose cell index to update
 *
 * @export
 * @param {Array} cells
 * @returns cell index
 */
export function randomPickCell(cells) {
    const freeCells = cells
        .map((e, i) => e ? -1 : i)
        .filter(e => e > -1);

    if (!freeCells.length) {
        debugger;
        return false;
    }
    let index = -1;
    while (!(index >= 0 && index < freeCells.length)) {
        index = Math.floor(Math.random() * freeCells.length);
    }
    return freeCells[index];
}

/**
 * Checks is board full
 *
 * @export
 * @param {Array} cells
 * @returns
 */
export function isBoardFull(cells) {
    return cells.every(e => e);
}

/**
 * helper function to wait n ms
 *
 * @export
 * @param {Number} ms
 * @returns Promise
 */
export function waitFor(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}