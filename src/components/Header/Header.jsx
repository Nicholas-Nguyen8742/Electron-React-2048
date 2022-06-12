import './Header.scss';
import React from 'react';
import logo from '../../assets/images/2048_logo.png';


export default function Header() {
    return (
        <header className='header'>
            <img className="header__logo" src={logo} alt='The Number 2048 on Yellow Background Color'/>
            <div className='header__scores'>
                <h2 className='header__scores-current'>Score</h2>
                <h2 className='header__scores-best'>0</h2>
            </div>
            <div className='header__buttons'>
                <button className='header__buttons-new'>NEW</button>
                <button className='header__buttons-undo'>UNDO</button>
            </div>
        </header>
    );
}
