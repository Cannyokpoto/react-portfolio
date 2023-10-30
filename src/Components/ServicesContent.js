import React from 'react';
import './EnergyMall.css';
import './Services.css';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import PHOTOS from './images/index.js';

function ServicesContent(){


    return(
        <div className="services-container" id="main-container">
            <h1 className="">What <span>We Do</span></h1>

            <div className="sub-container">
                <div className="service-wrapper">
                    
                    <img src={PHOTOS.PHOTO26} alt=""/>

                    <div className="s-front">
                        <h3>continuous egg production</h3>

                        <p>Our eggs are laid by happy, healthy hens that roam freely on our spacious, sunlit pastures. 
                            We collect them daily, ensuring you receive eggs at the peak of freshness. 
                            From the moment you crack open one of our eggs, you'll be 
                            captivated by the vibrant yolks and the rich aroma that only comes from truly fresh eggs.
                        </p>
                    </div>
                </div>
        
                <div className="service-wrapper">
                    <img src={PHOTOS.PHOTO17} alt=""/>

                    <div className="s-front">
                        <h3>chicken hatchery</h3>

                        <p>Are you looking to start or expand your poultry farm with the healthiest, 
                        highest-quality chicks? Look no further. 
                        We are dedicated to providing you with top-notch poultry solutions that will set your farm 
                        apart from the competition. 
                        With our unmatched expertise and commitment to excellence, we guarantee the success 
                        and prosperity of your poultry venture.
                        </p>
                    </div>
                </div>
        
                <div className="service-wrapper">
                    <img src={PHOTOS.PHOTO16} alt=""/>

                    <div className="s-front">
                        <h3>continuous fish hatchery</h3>

                        <p>Are you ready to make a splash in the world of aquaculture? Look no further than our cutting-edge fish hatchery, 
                            where we turn your aquatic dreams into a thriving reality. With our unwavering commitment to excellence and a passion for 
                            sustainable fish farming, we are your trusted partner in achieving remarkable success in the aquaculture industry.
                        </p>
                    </div>
                </div>
        
                <div className="service-wrapper">

                    <img src={PHOTOS.PHOTO15} alt=""/>

                    <div className="s-front">
                        <h3>fish production</h3>
                        <p>With decades of experience in the aquaculture industry, our team of experts brings an 
                            unrivaled level of knowledge to the table. 
                            We understand the complexities of fish production, from selecting the right species 
                            to optimizing growth and maximizing yields. Our seasoned professionals will 
                            guide you every step of the way, ensuring that you have the 
                            knowledge and support needed to succeed.
                        </p>
                    </div>
                </div>

                <div className="service-wrapper">
                    <img src={PHOTOS.PHOTO14} alt=""/>
                    
                    <div className="s-front">
                        <h3>training</h3>

                        <p>Introducing niceoma's Agricultural Training Program — a 
                            comprehensive and dynamic curriculum designed to 
                            empower farmers, agricultural enthusiasts, and industry professionals. 
                            Whether you're a seasoned farmer looking 
                            to expand your knowledge or a novice eager to embark on a 
                            rewarding agricultural journey, our program has something for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
    
};






export default ServicesContent;