import './Header.scss';
import React from 'react';
import logo from '../../assets/images/2048_logo.png';


export default function Header() {
    return (
        <header className='header'>
            <img className="header__logo" src={logo} alt='The Number 2048 on Yellow Background Color'/>
            <div className='header__scores'>
                <article className='header__scores-container'>
                    <h4 className='header__scores__title'>Score</h4>
                    <h3>0</h3>
                </article>
                <article className='header__scores-container'>
                    <h4 className='header__scores__title'>Best</h4>
                    <h3>0</h3>
                </article>
            </div>
        </header>
    );
}
// <div className='header__buttons'>
// <button className='header__buttons-new'>NEW</button>
// <button className='header__buttons-undo'>UNDO</button>
// </div>