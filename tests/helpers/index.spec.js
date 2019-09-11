import { randomPickCell, calculateWinner, WIN_COMBINATIONS, isBoardFull, waitFor } from '../../src/helpers';


it('expect choose free cell from an array', () => {
    const cells = new Array(9).fill('X');
    cells[1] = cells[2] = cells[3] = null;
    const index = randomPickCell(cells);
    expect(cells[index]).toEqual(null);
});

it('expect to calculate winner', () => {
    let cells = null;
    for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
        const el = WIN_COMBINATIONS[i];
        cells = new Array(9).fill(null);
        cells[el[0]] = cells[el[1]] = cells[el[2]] = 'O';
        expect(calculateWinner(cells)).toEqual('O');
    }
    cells = new Array(9).fill(null);
    expect(calculateWinner(cells)).toEqual(null);
});

it('expect to full board', () => {
    const cells = new Array(9).fill('X');
    expect(isBoardFull(cells)).toEqual(true);
});

it('expect to wait for n ms', ()=>{
    return waitFor(200);
});