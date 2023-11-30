import "./Header.css";
import React from "react";
import { useRef, useContext, useState } from "react";
import PHOTOS from "../images/index";
import { NavLink } from 'react-router-dom';
import { ShopContext } from "../Context/ShopContext";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


//Header

function Header(){

    //Mobile Navbar

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const {getTotalCartItems} = useContext(ShopContext);


        return(
            <div>
                <header>
                    <div className="logo">
                        <img src={ PHOTOS.LOGO } alt="logo" />

                        <NavLink to="/cart" className="cart">
                            <span>cart</span>
                            <FaCartShopping className="my-cart" />
                            <div className="cart-counter">{getTotalCartItems()}</div>
                        </NavLink>

                        <div className="nav-icons" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                    </div>

                    {/* desktopNav navigation */}

                    <nav className="desktopNav">
                        <ul className="myNav">
                            <li><NavLink to="/" onClick={handleClick}>Shop</NavLink></li>
                            <li><NavLink to="/men" onClick={handleClick}>Men</NavLink></li>
                            <li><NavLink to="/women" onClick={handleClick}>Women</NavLink></li>
                            <li><NavLink to="/kids" onClick={handleClick}>Kids</NavLink></li>
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

                    <nav className={click ? "mobile-navbar mobile-navbar-open" : "mobile-navbar"}>

                        <ul className="mobile-navbar-items">
                            <li><NavLink to="/" onClick={handleClick}>Shop</NavLink></li>
                            <li><NavLink to="/men" onClick={handleClick}>Men</NavLink></li>
                            <li><NavLink to="/women" onClick={handleClick}>Women</NavLink></li>
                            <li><NavLink to="/kids" onClick={handleClick}>Kids</NavLink></li>
                        </ul>

                        <div className="engage">
                            <NavLink to="/login" onClick={handleClick}>Login</NavLink>
                        </div>
                    </nav>
                </header>
            </div>
        )
};


    

export default Header ;