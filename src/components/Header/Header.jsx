import './Header.scss';
import React from 'react';


export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>2048</h1>
            <article className='header__scores'>
                <h2 className='header__scores-current'>0</h2>
                <h2 className='header__scores-best'>0</h2>
            </article>
        </header>
    );
}
