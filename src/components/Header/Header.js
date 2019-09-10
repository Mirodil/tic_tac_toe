import React from 'react';
import './Header.scss';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <span className="state">
                    Start Game
                </span>
            </div>
        )
    }
};

export default Header;