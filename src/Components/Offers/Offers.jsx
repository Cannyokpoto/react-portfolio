import React from 'react';
import './Offers.css';
import { NavLink } from 'react-router-dom';
import PHOTOS from "../images/index";


function Offers(props){
    return(
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <NavLink to="/">Check Now</NavLink>
            </div>
           
           <div className='offers-right'>
                <img src={ PHOTOS.EXCLUS } alt="offers" />
            </div>
        </div>
    )
}

export default Offers;