import React from 'react';
import './EnergyMall.css';
import './Services.css';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import PHOTOS from './images/index.js';
import Data from './ServicesData';

function ServicesContent(){


    return(
        <div className="services-container" id="main-container">
            <h1 className="">What <span>We Do</span></h1>

            <div className="sub-container">
            {
                    Data.map((service) =>{
                        return(
                            <div key={service.id} className="service-wrapper">
                        
                            <img src={service.image} alt=""/>

                            <div className="s-front">
                                <h3>{service.heading}</h3>

                                <p>{service.paragraph}</p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
    
};






export default ServicesContent;