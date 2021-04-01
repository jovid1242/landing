import React from 'react'
import peopleimg from '../../../src/assets/img/f1.png'
import './Index.css'

export default function Index() {
    return (
        <>

            <div className="people-section overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">Supported by real people</h1>
                            <p className="text-center">Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</p>
                            <div className="section-img-wrap">
                                <img src={peopleimg} alt="peopleimg" />
                                <div className="background-img">
                                    <svg width="1544" height="379" viewBox="0 0 1544 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d)">
                                            <path d="M53 222.044C53 208.407 59.9578 195.757 71.913 189.196C139.127 152.312 383.444 35 772 35C1160.56 35 1404.87 152.312 1472.09 189.196C1484.04 195.757 1491 208.407 1491 222.044V268C1491 290.091 1473.09 308 1451 308H93C70.9086 308 53 290.091 53 268V222.044Z" fill="#EEEEEE" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d" x="0.146282" y="0.146282" width="1543.71" height="378.707" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset dy="18" />
                                                <feGaussianBlur stdDeviation="26.4269" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.845 0 0 0 0 0.892895 0 0 0 0 0.975 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="tex-center">WooCommerce - the most customizable eCommerce platform for building your online business.</h1>
                        </div>
                        <div className="col-md-4">
                            <button>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
