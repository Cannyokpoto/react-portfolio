import "./EnergyMall.css";
import React from "react";
import PHOTOS from "./images/index";
// import { Link } from 'react-router-dom';


//Header

function Header(){
        return(
            <div>
                <header>
                    <div className="logo">
                        <i className="fas fa-bars" id="menu-btn"></i>
                        <img src={ PHOTOS.PHOTO10 } alt="logo" />
                    </div>

                    {/* mobile-desktopNav */}

                    <nav className="desktopNav">
                        <ul className="myNav">
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./about.html">About Us</a></li>
                            <li><a href="./services.html">Services</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>

                        <div className="engage">
                            <a href="/contact.html">Engage</a>
                        </div>
                    </nav>

                    {/* mobile-navigation */}

                    <nav className="mobile-navbar" id="mobile-navbar">
                        <div className="mobile-navbar-header">
                            <i className="fas fa-times" id="close"></i>
                        </div>

                        <ul className="mobile-navbar-items">
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./about.html">About Us</a></li>
                            <li><a href="./services.html">Services</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>

                        <div className="engage">
                            <a href="./contact.html">Engage</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
};

//Mobile Navbar



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