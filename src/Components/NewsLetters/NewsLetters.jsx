import React from 'react';
import './NewsLetters.css';


function NewsLetters(){
    return(
        <div className='news-letters'>
            <h1>Get  Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletters and stay updated</p>
            <form method='post'>
                <input type="email" placeholder='your email' />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetters;