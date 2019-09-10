import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

export class Footer extends React.Component {

    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        const { onClick } = this.props;
        return (
            <div className="footer">
                <div className="action-bar">
                    <button type="button" onClick={onClick}>Restart Game</button>
                </div>
            </div>
        );
    }
};

export default Footer;