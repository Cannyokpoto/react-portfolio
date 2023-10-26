import "./EnergyMall.css";
import React from "react";
import { useRef } from "react";
import PHOTOS from "./images/index";
import { Link } from 'react-router-dom';


//Header

function Header(){

    //Mobile Navbar

    const navRef = useRef();

    function Navbar(){
            navRef.current.classList.toggle("mobile-navbar-open");
        };

        return(
            <div>
                <header>
                    <div className="logo">
                        <i className="fas fa-bars" id="menu-btn" onClick={Navbar}></i>
                        <img src={ PHOTOS.PHOTO10 } alt="logo" />
                    </div>

                    {/* desktopNav navigation */}

                    <nav className="desktopNav">
                        <ul className="myNav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>

                        <div className="engage">
                            <Link to="/contact.html">Engage</Link>
                        </div>
                    </nav>

                    {/* mobile-navigation */}

                    <nav className="mobile-navbar" id="mobile-navbar" ref={navRef}>
                        <div className="mobile-navbar-header">
                            <i className="fas fa-times" id="close" onClick={Navbar}></i>
                        </div>

                        <ul className="mobile-navbar-items">
                            <li><Link to="./index.html">Home</Link></li>
                            <li><Link to="./about.html">About Us</Link></li>
                            <li><Link to="./services.html">Services</Link></li>
                            <li><Link to="./contact.html">Contact</Link></li>
                        </ul>

                        <div className="engage">
                            <Link to="./contact.html">Engage</Link>
                        </div>
                    </nav>
                </header>
            </div>
        )
};



//mobile navigation

// function Navbar(){
//     const menu = document.getElementById('mobile-navbar');
   

//     if (menu.classList.contains('mobile-navbar-open')){
//         menu.classList.remove('mobile-navbar-open');
//     }

//     else{
//         menu.classList.add('mobile-navbar-open');
//     }

// };



//Indicate current web page

// function CurrentPage(){
//     const path = window.location.pathname;
//     const navLinks = document.querySelectorAll('nav a');


//     navLinks.forEach(link => {
//     if (link.to.includes(`${path}`)){
//         link.classList.add("current")
//     };
//     });
// }

    

export default Header ;