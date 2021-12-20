import React from 'react';
import './Header.css';
import logo from '../../images/netflix_logo.png';
import avatar from '../../images/Netflix_avatar.png';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src={logo} alt="Netflix" />
                </a>
            </div>
            <div className='header--user'>
                <a href="/">
                    <img src={avatar} alt="Usuário" />
                </a>
            </div>
        </header>
    );
}