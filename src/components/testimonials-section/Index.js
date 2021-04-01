import React from 'react'
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import img5 from '../../assets/img/img5.jpg'
import './Index.css'

export default function Index() {
    return (
        <>
            <div className="slider">
                <div className="container">
                    <p className="text-center">Trusted by Agencies & Store Owners</p>
                    <section id="slider">
                        <input type="radio" name="slider" id="s1" />
                        <input type="radio" name="slider" id="s2" />
                        <input type="radio" name="slider" id="s3" checked />
                        <input type="radio" name="slider" id="s4" />
                        <input type="radio" name="slider" id="s5" />
                        <label for="s1" id="slide1">
                            <img src={img1} height="100%" width="100%" />
                        </label>
                        <label for="s2" id="slide2">
                            <img src={img2} height="100%" width="100%" />
                        </label>
                        <label for="s3" id="slide3">
                            <img src={img3} height="100%" width="100%" />
                        </label>
                        <label for="s4" id="slide4">
                            <img src={img4} height="100%" width="100%" />
                        </label>
                        <label for="s5" id="slide5">
                            <img src={img5} height="100%" width="100%" />
                        </label>
                    </section>

                </div>
            </div>
        </>
    )
}
