import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

export const START_GAME = 'Start Game';
export const X_TURN = 'X Turn'
export const O_TURN = 'O Turn';
export const GAME_OVER = 'Game Over';

/**
 * Displays current game state
 */
export class Header extends React.Component {

    static propTypes = {
        cells: PropTypes.array,
        isGameOver: PropTypes.bool
    }

    /**
     * get current game state
     */
    get currentState() {
        const { cells, isGameOver } = this.props;

        if (isGameOver) {
            return GAME_OVER;
        }

        const isEmpty = !cells.some(e => e);
        if (isEmpty) {
            return START_GAME;
        }

        // count X and O
        // and find who's turn now
        const countOfXs = cells.filter(e => e === 'X').length;
        const countOfOs = cells.filter(e => e === 'O').length;

        if (countOfXs > countOfOs) {
            // this means X made its turn, now O's turn
            return O_TURN;
        }
        // when they are equal, it is X's turn
        return X_TURN;
    }

    render() {
        const message = this.currentState;

        return (
            <div className="header">
                <span className="state">
                    {message}
                </span>
            </div>
        )
    }
};

export default Header;