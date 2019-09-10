import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import './Board.scss';

export class Board extends React.Component {

    static propTypes = {
        cells: PropTypes.array
    }

    renderCells(cells, addition) {
        return cells.map((s, i) => <Cell key={i} state={s} index={i + addition} />)
    }

    render() {
        const { cells } = this.props;

        return (
            <div className="board">
                <div className="grid">
                    <div className="row">
                        {this.renderCells(cells.slice(0, 3), 0)}
                    </div>
                    <div className="row">
                        {this.renderCells(cells.slice(3, 6), 3)}
                    </div>
                    <div className="row">
                        {this.renderCells(cells.slice(6, 9), 6)}
                    </div>
                </div>
            </div>
        );
    }
};

export default Board;