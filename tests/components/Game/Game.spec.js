import React from 'react';
import Game from '../../../src/components/Game';
import { waitFor } from '../../../src/helpers';
import { shallow, mount } from 'enzyme';


it('expect to render a new game', () => {
    const game = shallow(<Game />);
    expect(game.find('Header').length).toEqual(1);
    expect(game.find('Board').length).toEqual(1);
    expect(game.find('Footer').length).toEqual(1);
    expect(game.state()).toEqual({
        cells: new Array(9).fill(null),
        isGameOver: false,
        winner: null
    });
});

it('expect to reset state', () => {
    const game = mount(<Game />);
    game.setState({
        cells: new Array(9).fill('X'),
        isGameOver: true,
        winner: 'X'
    });

    game.find('button').simulate('click');

    expect(game.state()).toEqual({
        cells: new Array(9).fill(null),
        isGameOver: false,
        winner: null
    });
});

it('expect put X into first cell', async () => {
    const game = mount(<Game />);
    game.find('Cell').at(0).simulate('click');

    await waitFor(200);

    const cells = game.state('cells');
    expect(cells[0]).toEqual('X');
    expect(cells.indexOf('O')).toBeGreaterThan(-1);
});

it('expect end the game when we have winner', async () => {
    const game = mount(<Game />);

    const cells = new Array(9).fill(null);
    cells[0] = cells[1] = 'X';
    cells[3] = cells[4] = 'O';

    game.setState({ cells });

    game.find('Cell').at(2).simulate('click');

    await waitFor(200);

    expect(game.state()).toEqual({
        cells: game.state('cells'),
        isGameOver: true,
        winner: 'X'
    });
});