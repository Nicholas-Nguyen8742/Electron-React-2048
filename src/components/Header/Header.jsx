import './Header.scss';
import React from 'react';


export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>2048</h1>
            <article className='header__scores'>
                <div className='header__scores-current'>0</div>
                <div className='header__scores-best'>0</div>
            </article>
        </header>
    );
}
