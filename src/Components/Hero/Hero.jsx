import "./Hero.css";
import React from "react";
import PHOTOS from "../images/index";
import { NavLink } from 'react-router-dom';

function Hero(){

        return(
            <div className="hero-section">
                <div className="left-hand-side">
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div className="left-sub">
                        <div className="hand">
                            <p>new</p>
                            <img src={PHOTOS.PHOTO32} alt=""/>
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <NavLink to="/" className='latest-btn'>
                        <div>Latest Collections</div>
                        <i class="fa-solid fa-arrow-right"></i>
                    </NavLink>
                </div>
        
                <div className="right-hand-side">
                    <img src={PHOTOS.PHOTO17} alt=""/>
                </div>
            </div>
        )
};


    

export default Hero ;