import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='nav-menu'>
                <img src={logo} alt="" />
                <div className='nav-items'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;