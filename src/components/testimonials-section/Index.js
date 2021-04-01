import React from 'react'
import img1 from '../../assets/img/testimonial-bg.png'
import img2 from '../../assets/img/bg-section.png'
import img3 from '../../assets/img/bg-section-2.png'
import img4 from '../../assets/img/img4.jpg'
import img5 from '../../assets/img/img5.jpg'
import './Index.css'

export default function Index() {
    return (
        <>
            <div className="slider overflow-hidden">
                <div className="container">
                    <p className="text-center">Trusted by Agencies & Store Owners</p>
                    <div className="bg-img1">
                        <img src={img2} alt="" />
                    </div>
                    <div className="bg-img2">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="slider-img-box">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}
