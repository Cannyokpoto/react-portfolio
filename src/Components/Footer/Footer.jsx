import "./Footer.css";
import React from "react";
import PHOTOS from "../images/index";
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer(){

        return(
            <footer className="my-footer">
                <img src={ PHOTOS.LOGO } alt="logo" />
                <ul className="quick-links">
                    <li><NavLink to="/">Company</NavLink></li>
                    <li><NavLink to="/">Products</NavLink></li>
                    <li><NavLink to="/">Offices</NavLink></li>
                    <li><NavLink to="/">About</NavLink></li>
                    <li><NavLink to="/">Contact</NavLink></li>
                </ul>
                <div className="socials">
                    <NavLink to="/"><FaInstagram className="my-soc" /></NavLink>
                    <NavLink to="/"><FaFacebook className="my-soc" /></NavLink>
                    <NavLink to="/"><FaWhatsapp className="my-soc" /></NavLink>
                </div>
                <hr/>
                <small>Developed by <span>Promise Okpoto</span></small>
            </footer>
        )
};


    

export default Footer;