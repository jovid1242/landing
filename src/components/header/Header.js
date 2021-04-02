import React from 'react'
import Logo from './components/logo/Logo'
import Menu from './components/navigation/Menu'
import Navigation from './components/navigation/Navigation'

import './Header.css'

export default function Header() {
    window.onscroll = function (e) {
        const nav = document.querySelector('.navbar')
        if (window.scrollY > 0) {
            nav.classList.add('affix');
        }
        if (window.scrollY === 0) {
            nav.classList.remove('affix')
        }
    };
    return (
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                    <div className="container">
                        <Logo />
                        <Menu />
                        <Navigation />
                        <div className="hamburger-menu">
                            <input id="menu__toggle" type="checkbox" />
                            <label className="menu__btn" htmlFor="menu__toggle">
                                <span></span>
                            </label>
                            <ul className="menu__box">
                                <li><a className="menu__item" href="#">Главная</a></li>
                                <li><a className="menu__item" href="#">Resources</a></li>
                                <li><a className="menu__item" href="#">Develop</a></li>
                                <li><a className="menu__item" href="#">Community</a></li>
                                <li><a className="menu__item" href="#">Marketplace</a></li>
                                <li><a className="menu__item" href="#">Sell</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
