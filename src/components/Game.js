import React from 'react';
import './Game.css';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: new Array(9).fill(null)
        };
    }

    restart = () => {
        this.setState({
            cells: new Array(9).fill(null)
        });
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Board cells={this.state.cells} />
                <Footer restart={this.restart} />
            </div>
        );
    }
}

export default Game;
