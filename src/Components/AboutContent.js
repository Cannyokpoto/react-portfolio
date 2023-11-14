import React, { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PHOTOS from './images/index.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';




const Data = [
    {
        image: PHOTOS.PHOTO10,
        paragraph: "Energy mall is very good",
        image2: PHOTOS.PHOTO13,
        paragraph2: "Energy mall is very good 2"
    },

    {
        image: PHOTOS.PHOTO9,
        paragraph: "Energy mall is better",
        image2: PHOTOS.PHOTO1,
        paragraph2: "Energy mall is better 2",
    },

    {
        image: PHOTOS.PHOTO4,
        paragraph: "Energy mall is the best",
        image2: PHOTOS.PHOTO14,
        paragraph2: "Energy mall is the best 2",
    },

    {
        image: PHOTOS.PHOTO7,
        paragraph: "Energy mall to the world",
        image2: PHOTOS.PHOTO17,
        paragraph2: "Energy mall to the world 2",
    },

    {
        image: PHOTOS.PHOTO5,
        paragraph: "Energy mall is the God of energy",
        image2: PHOTOS.PHOTO15,
        paragraph2: "Energy mall is the God of energy 2",
    },
]

const CustomPrevButton = () => <div className="custom-prev-button"><i class="fa-solid fa-arrow-left"></i></div>;
const CustomNextButton = () => <div className="custom-next-button"><i class="fa-solid fa-arrow-right"></i></div>;

SwiperCore.use([Navigation]);


function AboutContent(){

    const [counterOn, setCounterOn] = useState(false);

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

                        <ScrollTrigger className="numbers"
                        onEnter={() => setCounterOn (true)}
                        onExit={() => setCounterOn (false)}
                        >
                            <span className="clients">
                                {counterOn && <CountUp className="num" start={0} end={100} duration={10} delay={1} />}
                                <p>Clients</p>
                            </span>

                            <span className="empty">

                            </span>

                            <span className="installation">
                                {counterOn && <CountUp className="num" start={0} end={170} duration={10} delay={1} />}
                                <p>installation</p>
                            </span>
                        </ScrollTrigger>
                    </div>

                    <div className="installer">
                        <img src={PHOTOS.PHOTO26} alt="" />
                        <hr/>
                    </div>

                    <div className="mission-vision">
                        <span className="statement">
                            <img src={PHOTOS.PHOTO3} alt="" />
                            <h3>Mission</h3>
                            <p>A leading digital platform that connects B2B, Supply Chain, 
                                Engineering Products, and Services using AI and IoT to streamline
                                buying and selling. A leading digital platform that connects B2B, 
                                Supply Chain, Engineering Products, and Services 
                                using AI and IoT to streamline buying and selling. </p>
                        </span>

                        <span className="statement">
                            <img src={PHOTOS.PHOTO4} alt="" />
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

                    

                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className='testimonial'
                            navigation = {{
                                nextEl: '.custom-next-button',
                                prevEl: '.custom-prev-button',
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{delay: 3000}} //You can just say {true} to have the default 3sec
                            >

                            {
                                Data.map((content) =>{
                                    return(
                                        <SwiperSlide className="mySlides">
                                            <CustomPrevButton />
                                            
                                            <div className="testimony">
                                                <img src={content.image} alt="" />
                                                <p>{content.paragraph}</p>
                                            </div>
                            
                                            <div className="testimony">
                                                <img src={content.image2} alt="" />
                                                <p>{content.paragraph2}</p>
                                            </div>

                                            <CustomNextButton />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    
                </section>

                <section className="satisfied-brands">
                    <h3>Brands we've worked for</h3>
                    <div className="brands">
                        <div className="brand-logos">
                            <img src={PHOTOS.PHOTO27} alt="" />
                            <img src={PHOTOS.PHOTO6} alt="" />
                            <img src={PHOTOS.PHOTO20} alt="" />
                            <img src={PHOTOS.PHOTO12} alt="" />
                            <img src={PHOTOS.PHOTO27} alt="" />
                            <img src={PHOTOS.PHOTO6} alt="" />
                        </div>

                        <div className="brand-logos">
                            <img src={PHOTOS.PHOTO27} alt="" />
                            <img src={PHOTOS.PHOTO6} alt="" />
                            <img src={PHOTOS.PHOTO20} alt="" />
                            <img src={PHOTOS.PHOTO12} alt="" />
                            <img src={PHOTOS.PHOTO27} alt="" />
                            <img src={PHOTOS.PHOTO6} alt="" />
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