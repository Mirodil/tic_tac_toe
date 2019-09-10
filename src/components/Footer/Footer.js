import React from 'react';
import './Footer.scss';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="action-bar">
                    <button type="button">Restart Game</button>
                </div>
            </div>
        );
    }
};

export default Footer;