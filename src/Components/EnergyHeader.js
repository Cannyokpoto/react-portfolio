import "./EnergyMall.css";
import React from "react";
import { useRef } from "react";
import PHOTOS from "./images/index";
import { NavLink } from 'react-router-dom';


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

                    <nav className="desktopNav" ref={navRef}>
                        <ul className="myNav">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>

                        <div className="engage">
                            <NavLink to="/contact">Engage</NavLink>
                        </div>
                    </nav>

                    {/* mobile-navigation */}

                    <nav className="mobile-navbar" id="mobile-navbar" ref={navRef}>
                        <div className="mobile-navbar-header">
                            <i className="fas fa-times" id="close" onClick={Navbar}></i>
                        </div>

                        <ul className="mobile-navbar-items">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>

                        <div className="engage">
                            <NavLink to="/contact">Engage</NavLink>
                        </div>
                    </nav>
                </header>
            </div>
        )
};


    

export default Header ;