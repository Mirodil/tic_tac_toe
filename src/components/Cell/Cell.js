import React from 'react';
import PropTypes from 'prop-types';
import './Cell.scss';

export class Cell extends React.Component {

    static propTypes = {
        state: PropTypes.string,
        index: PropTypes.number,
        onClick: PropTypes.func
    }

    onClick = () => {
        const { state, index, onClick } = this.props;
        // call parents onClick method when state is empty
        if (!state) {
            onClick(index);
        }
    }

    renderX() {
        return (
            <svg className="xs" aria-label="X" role="img" viewBox="0 0 128 128">
                <path d="M16,16L112,112"></path>
                <path d="M112,16L16,112"></path>
            </svg>
        );
    }

    renderO() {
        return (
            <svg className="os" aria-label="O" role="img" viewBox="0 0 128 128">
                <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
            </svg>
        );
    }

    render() {
        const { state } = this.props;
        let content = null;

        if (state === 'X') {
            content = this.renderX();
        } else if (state === 'O') {
            content = this.renderO();
        }

        return (
            <div className="cell" onClick={this.onClick}>
                {content}
            </div>
        );
    }
};

export default Cell;