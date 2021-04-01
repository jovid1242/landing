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
                    </div>
                </nav>
            </div>
        </>
    )
}
