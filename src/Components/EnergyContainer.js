import React from "react";
import PHOTOS from "./images/index.js";

class Container extends React.Component{

    render(){

        return(
            <div>
                <main className="main-container">
                    <section className="hero-section">
                        <div className="left-hand-side">
                            <h3>Innovation that fuels your business's evolution</h3>
                            <h1>Our solutions are tailored to meet your business needs and exceed your expectations.</h1>
                            <a href="./contact.html">Say hello!  <span>{this.props.greater}</span></a>
                        </div>
                
                        <div className="right-hand-side">
                            <span className="empty">
                
                            </span>
                
                            <span className="hero-image">
                                <img src={PHOTOS.PHOTO17} alt=""/>
                            </span>
                        </div>
                    </section>
                
                    <section className="main-wrapper">
                        <div className="what-we-offer reveal">
                            <h3>Elevate your business with our <br/> industry-leading services.</h3>
                            <p>This is the service arm of EnergyMall dedicated to design, procurement and installation of 
                                turnkey solutions for Solar, electricals, lighting and insulation. From Banks and hospitals, 
                                to municipalities and communities, our customized services are crafted to 
                                respond to commercial and regional needs for clean energy and efficiency.</p>
                        </div>
                
                        <div className="core-services">
                            <div className="service from-left">
                                <img src={PHOTOS.PHOTO13} alt=""/>
                                <h3>Global Connected and Collaborative Ecosystem for the Engineering Sector.</h3>
                                <p>A leading digital platform that connects B2B, Supply Chain, Engineering Products, 
                                    and Services using AI and IoT to streamline buying and selling.</p>
                                <a href="">Read more  <span>{this.props.greater}</span></a>
                            </div>
                
                            <div className="service reveal">
                                <img src={PHOTOS.PHOTO14} alt=""/>
                                <h3>For Vendors</h3>
                                <p>At EnergyMall, you have the power to increase your business exponentially by taking part
                                    in the online engineering supply-chain and brand and advertise your company,
                                    products and services to a large number of targeted buyers globally.</p>
                                <a href="">Read more <span>{this.props.greater}</span></a>
                            </div>
                
                            <div className="service from-right">
                                <img src={PHOTOS.PHOTO15} alt=""/>
                                <h3>For Buyers</h3>
                                <p>With EnergyMall, you can find the most trusted suppliers of Solar, Electrical, 
                                    Mechanical, Thermal, Marine, Oil and Gas exploration and production, Piping, Instrumentation, 
                                    Metal, Structural, Safety Equipment Sectors and EPC Service Providers.</p>
                                <a href="">Read more  <span>{this.props.greater}</span></a>
                            </div>
                        </div>
                    </section>
                
                    <section className="previous">
                        <div className="previous-contents reveal">
                            <h5>AN EVOLVING JOURNEY</h5>
                            <h3>EnergyMall Nigeria has launched and recorded significant milestones</h3>
                            <p>Formerly doing business as a subsidiary of SWAVE ENERGEM, EnergyMall 
                                Nigeria is a response to the gnawing demand for accessible, 
                                relatable solutions to Africa’s energy challenges.
                
                            </p>
                            <hr/>
                            <a href="">Learn more  <span>{this.props.greater}</span></a>
                        </div>
                    </section>
                
                    <div className="previous-image from-right">
                        <img src={PHOTOS.PHOTO18} alt=""/>
                    </div>
                
                    <section className="our-blog">
                        <h2>Our Blog</h2>
                        <span className="user-blog reveal">
                            <p>Get up to date news on the latest Engineering and B2B trends in the Solar Energy sector</p>
                            <a href="">Unser Blog  <span>{this.props.greater}</span></a>
                        </span>
                
                        <section className="latest-blog-posts">
                            <h5>Latest BLOG POST</h5>
                
                            <div className="blog-posts">
                                <div className="post from-left">
                                    <h3>Monetization opportunities in the Solar Energy industry and how to expand.</h3>
                                    <p>Our Mission is to solve Africa’s energy problems, faster; via a two-pronged 
                                        approach to better energy in Africa- clean, renewable energy and energy efficiency.
                                    </p>
                                    <a href="">Read more  <span>{this.props.greater}</span></a>
                                </div>
                
                                <div className="post reveal">
                                    <h3>Monetization opportunities in the Solar Energy industry and how to expand.</h3>
                                    <p>Our Mission is to solve Africa’s energy problems, faster; via a two-pronged 
                                        approach to better energy in Africa- clean, renewable energy and energy efficiency.
                                    </p>
                                    <a href="">Read more  <span>{this.props.greater}</span></a>
                                </div>
                
                                <div className="post from-right">
                                    <h3>Monetization opportunities in the Solar Energy industry and how to expand.</h3>
                                    <p>Our Mission is to solve Africa’s energy problems, faster; via a two-pronged 
                                        approach to better energy in Africa- clean, renewable energy and energy efficiency.
                                    </p>
                                    <a href="">Read more  <span>{this.props.greater}</span></a>
                                </div>
                            </div>
                        </section>
                    </section>
                
                    <section className="our-strength">
                        <div className="strength from-left">
                            <h5>get to know ABOUT</h5>
                            <h3>Our Strength</h3>
                            <p>Energymall is Nigeria’s online and offline retailer of energy and building efficiency products,
                            </p>
                            <a href="">Take a tour  <span>{this.props.greater}</span></a>
                        </div>
                
                        <img src={PHOTOS.PHOTO16} alt="" className="from-right"/>
                    </section>
                </main>
            </div>
        )
    }
};

//REVEAL ELEMENTS ON SCROLL

// window.addEventListener('scroll', Reveal);

// function Reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.length; i++){

//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 50;

//     if(revealtop < windowheight - revealpoint){
//         reveals[i].classList.add('active');
//     }
//     else{
//         reveals[i].classList.remove('active');
//     }
//     }
// }

//HORIZONTAL REVEAL

// window.addEventListener("scroll", LeftAndRight);

// function LeftAndRight(e){

//     e.preventDefault();

//     const left = document.querySelectorAll(".from-left");

//     const right = document.querySelectorAll(".from-right");


//     const triggerBottom = window.innerHeight / 5 * 4;

//     left.forEach(paragraph =>{
//         const paraTop = paragraph.getBoundingClientRect().top;
//         if(paraTop < triggerBottom){
//             paragraph.classList.add("active");
//         }
//         else{
//             paragraph.classList.remove("active");
//         }
//     })

//     right.forEach(paragraph2 =>{
//         const paraTop2 = paragraph2.getBoundingClientRect().top;
//         if(paraTop2 < triggerBottom){
//             paragraph2.classList.add("active");
//         }
//         else{
//             paragraph2.classList.remove("active");
//         }
//     })
// };





export default Container;