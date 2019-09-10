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

    render() {
        const { state } = this.props;
        return (
            <div className="cell" onClick={this.onClick}>
                {state}
            </div>
        );
    }
};

export default Cell;