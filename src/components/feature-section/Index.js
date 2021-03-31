import React from 'react'
import Card from './card/card'
import './Index.css'

export default function Index() {
    return (
        <>
            <div className="feature-section">
                <div className="container">
                    <div className="info-text">
                        <span>Your eCommerce made simple</span>
                    </div>
                    <Card />
                </div>
            </div>
        </>
    )
}
