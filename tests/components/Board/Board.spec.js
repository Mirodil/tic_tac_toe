import React from 'react';
import sinon from 'sinon';
import Board from '../../../src/components/Board';
import { shallow, mount } from 'enzyme';


let props = null;
beforeEach(() => {
    props = {
        cells: new Array(9).fill(null),
        onCellClick: sinon.spy(),
        isGameOver: false,
        winner: null
    };
});


it('expect to render new game', () => {
    const board = shallow(<Board {...props} />);
    const cells = board.find('Cell');
    expect(cells.length).toEqual(9);
});

it('expect to render winner', () => {
    props.isGameOver = true;
    props.winner = 'X';
    const board = shallow(<Board {...props} />);
    const cells = board.find('Cell');
    const winner = board.find('.winner');

    expect(cells.length).toEqual(0);
    expect(winner.text()).toEqual('X Winner!');
});