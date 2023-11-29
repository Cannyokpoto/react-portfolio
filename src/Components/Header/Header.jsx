import "./Header.css";
import React from "react";
import { useRef, useContext, useState } from "react";
import PHOTOS from "../images/index";
import { NavLink } from 'react-router-dom';
import { ShopContext } from "../Context/ShopContext";
import { FaCartShopping } from "react-icons/fa6";


//Header

function Header(){

    //Mobile Navbar

    const navRef = useRef();

    const {getTotalCartItems} = useContext(ShopContext);

    function Navbar(){
            navRef.current.classList.toggle("mobile-navbar-open");
        };


        return(
            <div>
                <header>
                    <div className="logo">
                        <i className="fas fa-bars" id="menu-btn" onClick={Navbar}></i>
                        <img src={ PHOTOS.LOGO } alt="logo" />

                        <NavLink to="/cart" className="cart">
                            <span>cart</span>
                            <FaCartShopping className="my-cart" />
                            <div className="cart-counter">{getTotalCartItems()}</div>
                        </NavLink>
                    </div>

                    {/* desktopNav navigation */}

                    <nav className="desktopNav" ref={navRef}>
                        <ul className="myNav">
                            <li><NavLink to="/">Shop</NavLink></li>
                            <li><NavLink to="/men">Men</NavLink></li>
                            <li><NavLink to="/women">Women</NavLink></li>
                            <li><NavLink to="/kids">Kids</NavLink></li>
                        </ul>

                        <div className="engage">
                            <NavLink to="/login">Login</NavLink>
                        </div>

                        <NavLink to="/cart" className="cart">
                            <span>cart</span>
                            <FaCartShopping className="my-cart" />
                            <div className="cart-counter">{getTotalCartItems()}</div>
                        </NavLink>
                    </nav>

                    {/* mobile-navigation */}

                    <nav className="mobile-navbar" id="mobile-navbar" ref={navRef}>
                        <div className="mobile-navbar-header">
                            <i className="fas fa-times" id="close" onClick={Navbar}></i>
                        </div>

                        <ul className="mobile-navbar-items">
                            <li><NavLink to="/">Shop</NavLink></li>
                            <li><NavLink to="/men">Men</NavLink></li>
                            <li><NavLink to="/women">Women</NavLink></li>
                            <li><NavLink to="/kids">Kids</NavLink></li>
                        </ul>

                        <div className="engage">
                            <NavLink to="/login">Login</NavLink>
                        </div>
                    </nav>
                </header>
            </div>
        )
};


    

export default Header ;