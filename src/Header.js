import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />
            <div className="header__logo">
                <input 
                    className="header__searchInput"
                    type="text"
                />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineOne">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineOne">
                        Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineOne">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;