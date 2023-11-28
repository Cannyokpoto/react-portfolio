import "./Footer.css";
import React from "react";
import PHOTOS from "../images/index";
import { NavLink } from 'react-router-dom';


function Footer(){

        return(
            <footer className="my-footer">
                <img src={ PHOTOS.PHOTO10 } alt="logo" />
                <ul className="quick-links">
                    <li><NavLink to="/">Company</NavLink></li>
                    <li><NavLink to="/">Products</NavLink></li>
                    <li><NavLink to="/">Offices</NavLink></li>
                    <li><NavLink to="/">About</NavLink></li>
                    <li><NavLink to="/">Contact</NavLink></li>
                </ul>
                <div className="socials">
                    <NavLink to="/"><i class="fa-brands fa-instagram"></i></NavLink>
                    <NavLink to="/"><i class="fa-brands fa-facebook"></i></NavLink>
                    <NavLink to="/"><i class="fa-brands fa-whatsapp"></i></NavLink>
                </div>
                <hr/>
                <small>Copyright @2023 - All Right Reserved</small>
            </footer>
        )
};


    

export default Footer;