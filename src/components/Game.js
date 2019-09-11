import React from 'react';
import './Game.scss';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';
import { calculateWinner, randomPickCell, isBoardFull, waitFor } from '../helpers';

/**
 * The main game object keeps the whole game state.
 *
 * @export
 * @class Game
 * @extends {React.Component}
 */
export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: new Array(9).fill(null),
            isGameOver: false,
            winner: null
        };
    }

    /**
     * Restarts game state
     *
     * @memberof Game
     */
    restart = () => {
        this.setState({
            cells: new Array(9).fill(null),
            isGameOver: false,
            winner: null
        });
    }

    /**
     * Updates cells values by index
     *
     * @param {Number} index
     * @param {String} value
     * @returns new cells state
     * @memberof Game
     */
    setCellState(index, value) {
        if (!(0 <= index && index < this.state.cells.length)) return;
        const cells = this.state.cells.map((e, i) => i === index ? value : e);
        this.setState({ cells });
        return cells;
    }

    onCellClick = async (index) => {
        let newCellsState = this.setCellState(index, 'X');
        let winner = calculateWinner(newCellsState);
        if (winner) {
            await waitFor(200);
            this.endGame(winner);
        }

        if (isBoardFull(newCellsState)) {
            return;
        }

        // put O
        await waitFor(200)
        newCellsState = this.setCellState(randomPickCell(newCellsState), 'O');
        winner = calculateWinner(newCellsState);

        if (winner) {
            await waitFor(200);
            this.endGame(winner);
            return;
        }
    }

    /**
     * Update state and ends game
     *
     * @param {String} winner
     * @memberof Game
     */
    endGame(winner) {
        this.setState({
            isGameOver: true,
            winner
        });
    }

    render() {
        const { cells, isGameOver, winner } = this.state;
        return (
            <div className="game">
                <Header cells={cells} isGameOver={this.isGameOver} />
                <Board cells={cells} onCellClick={this.onCellClick} isGameOver={isGameOver} winner={winner} />
                <Footer onClick={this.restart} />
            </div>
        );
    }
};

export default Game;
