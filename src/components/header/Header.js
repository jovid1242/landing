import React from 'react'
import Logo from './components/logo/Logo'
import Menu from './components/navigation/Menu'
import Navigation from './components/navigation/Navigation'

import './Header.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg fixed-top bg-transparent ">
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
