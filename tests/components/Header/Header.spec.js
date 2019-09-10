import React from 'react';
import Header, { START_GAME, GAME_OVER, O_TURN, X_TURN } from '../../../src/components/Header/Header';
import { shallow } from 'enzyme';


it('expect start game message', () => {
    const header = shallow(<Header cells={new Array(9).fill(null)} isGameOver={false} />);
    const state = header.find('.state');
    expect(state.text()).toEqual(START_GAME);
});

it('expect game over message', () => {
    const header = shallow(<Header cells={[]} isGameOver={true} />);
    const state = header.find('.state');
    expect(state.text()).toEqual(GAME_OVER);
});

it('expect Os turn', () => {
    const cells = new Array(9).fill(null);
    cells[5] = 'X';
    const header = shallow(<Header cells={cells} isGameOver={false} />);
    const state = header.find('.state');
    expect(state.text()).toEqual(O_TURN);
});

it('expect Xs turn', () => {
    const cells = new Array(9).fill(null);
    cells[0] = 'O';
    cells[5] = 'X';
    const header = shallow(<Header cells={cells} isGameOver={false} />);
    const state = header.find('.state');
    expect(state.text()).toEqual(X_TURN);
});