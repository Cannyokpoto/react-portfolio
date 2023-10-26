import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PHOTOS from './images/index.js';

function AboutContent(){

    

    // const greater = ">";

    return(
        <div>
            <main className="about-container">
                <section className="about">
                    <h2>About Energy Mall</h2>
                    <div className="about-energymall">
                        <span className="years">
                            <h5>ABOUT ENERGYMALL</h5>
                            <h2>27 Years in Business 
                                and counting </h2>
                        </span>

                        <span className="empty">

                        </span>

                        <p>A leading digital platform that connects B2B, Supply Chain, Engineering 
                            Products, and Services using AI and IoT to streamline buying and selling. A leading digital platform that connects B2B, 
                            Supply Chain, Engineering Products, and Services using AI and IoT to streamline buying and selling. </p>
                    </div>
                </section>

                <section className="about-content">
                    <div className="counter">
                        <span className="text-photo">
                            <p>A leading digital platform that connects B2B, Supply Chain, 
                                Engineering Products, and Services using AI and IoT
                                to streamline buying and selling. 
                            </p>

                            <span className="white-bg">

                            </span>

                            <span className="red-bg">

                            </span>
                        </span>

                        <span className="numbers">
                            <span className="clients">
                                <h3 className="num" data-val="50">0</h3>
                                <p>Clients</p>
                            </span>

                            <span className="empty">

                            </span>

                            <span className="installation">
                                <h3 className="num" data-val="120">0</h3>
                                <p>installation</p>
                            </span>
                        </span>
                    </div>

                    <div className="installer">
                        <img src="./images/solarman 1.png" alt="" />
                        <hr/>
                    </div>

                    <div className="mission-vision">
                        <span className="statement">
                            <img src="./images/1628441.png" alt="" />
                            <h3>Mission</h3>
                            <p>A leading digital platform that connects B2B, Supply Chain, 
                                Engineering Products, and Services using AI and IoT to streamline
                                buying and selling. A leading digital platform that connects B2B, 
                                Supply Chain, Engineering Products, and Services 
                                using AI and IoT to streamline buying and selling. </p>
                        </span>

                        <span className="statement">
                            <img src="./images/5229301.png" alt="" />
                            <h3>Vision</h3>
                            <p>A leading digital platform that connects B2B, Supply Chain, 
                                Engineering Products, and Services using AI and IoT to streamline buying 
                                and selling. A leading digital platform that connects B2B, 
                                Supply Chain, Engineering Products, and Services 
                                using AI and IoT to streamline buying and selling. </p>
                        </span>
                    </div>

                    <div className="what-we-do">
                        <h3>What We Do</h3>

                        <div className="our-values">
                            <span className="value">
                                <h3>Engineering</h3>
                                <p>A leading digital platform that connects B2B, Supply Chain, 
                                    Engineering Products, and Services using AI and IoT to streamline
                                    buying and selling. A leading digital platform that connects B2B, 
                                    Supply Chain, Engineering Products, and Services 
                                    using AI and IoT to streamline buying and selling. </p>
                            </span>
            
                            <span className="value">
                                <h3>Installation</h3>
                                <p>A leading digital platform that connects B2B, Supply Chain, 
                                    Engineering Products, and Services using AI and IoT to streamline
                                    buying and selling. A leading digital platform that connects B2B, 
                                    Supply Chain, Engineering Products, and Services 
                                    using AI and IoT to streamline buying and selling. </p>
                            </span>
            
                            <span className="value">
                                <h3>B<small>2</small>B</h3>
                                <p>A leading digital platform that connects B2B, Supply Chain, 
                                    Engineering Products, and Services using AI and IoT to streamline
                                    buying and selling. A leading digital platform that connects B2B, 
                                    Supply Chain, Engineering Products, and Services 
                                    using AI and IoT to streamline buying and selling. </p>
                            </span>
            
                        </div>
                    </div>
                </section>

                <section className="our-testimonials">
                    <h3>What our clients say</h3>

                    <div className="testimonial">

                        <div className="mySlides">
                            <div className="testimony">
                                <img src="./images/Ellipse 1.png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
            
                            <div className="testimony">
                                <img src="./images/Ellipse 2.png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
                        </div>

                        <div className="mySlides">
                            <div className="testimony">
                                <img src="./images/author-1.png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
            
                            <div className="testimony">
                                <img src="./images/pic-1.png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
                        </div>
                        
                        <div className="mySlides">
                            <div className="testimony">
                                <img src="./images/pic-2.png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
            
                            <div className="testimony">
                                <img src="./images/pic-3.png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
                        </div>

                        <div className="mySlides">
                            <div className="testimony">
                                <img src="./images/1628441.png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
            
                            <div className="testimony">
                                <img src="./images/74508295-0627-442d-aa93-c32b8c3463a5.jpg" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
                        </div>

                        <div className="mySlides">
                            <div className="testimony">
                                <img src="./images/solarman 1.png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
            
                            <div className="testimony">
                                <img src="./images/Image (3).png" alt="" />
                                <p>Energy mall is my number one choice in Solar Installations and 
                                    equipment purchase anytime anyday, 
                                    they’re simply the best.</p>
                            </div>
                        </div>        
                    </div>

                    <div className="carousel">
                        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a className="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>


                    <div className="swiper-pagination">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </section>

                <section className="satisfied-brands">
                    <h3>Brands we've worked for</h3>
                    <div className="brands">
                        <div className="brand-logos">
                            <img src="./images/Udemy_logo.svg.png" alt="" />
                            <img src="./images/Adidas_logo.png" alt="" />
                            <img src="./images/nike-4-logo-png-transparent.png" alt="" />
                            <img src="./images/google-text-logo-number.png" alt="" />
                            <img src="./images/Udemy_logo.svg.png" alt="" />
                            <img src="./images/Adidas_logo.png" alt="" />
                        </div>

                        <div className="brand-logos">
                            <img src="./images/Udemy_logo.svg.png" alt="" />
                            <img src="./images/Adidas_logo.png" alt="" />
                            <img src="./images/nike-4-logo-png-transparent.png" alt="" />
                            <img src="./images/google-text-logo-number.png" alt="" />
                            <img src="./images/Udemy_logo.svg.png" alt="" />
                            <img src="./images/Adidas_logo.png" alt="" />
                        </div>
                    </div>
                </section>

                <section className="news-letter">
                    <h3>Signup to our Newsletter to get updates on our latest products </h3>
                    <form action="" method="post">
                        <input type="text" placeholder="Email" />
                        <button type="submit">Sign Up</button>
                    </form>
                </section>
            </main>
        </div>
    )
    
};






export default AboutContent;