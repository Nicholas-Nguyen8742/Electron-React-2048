import './Header.scss';
import React from 'react';
import logo from '../../assets/images/2048_logo.png';
import InstructionsSection from '../InstructionsSection/InstructionsSection';


export default function Header() {
    return (
        <header className='header'>
            <img className="header__logo" src={logo} alt='The Number 2048 on Yellow Background Color'/>
            <div className='header__scores'>
                <div className='header__scores-current'>0</div>
                <div className='header__scores-best'>0</div>
            </div>
            <InstructionsSection />
        </header>
    );
}
