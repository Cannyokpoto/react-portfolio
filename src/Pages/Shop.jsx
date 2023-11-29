import React from 'react';
import './CSS/Shop.css';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetters from '../Components/NewsLetters/NewsLetters';


class Shop extends React.Component {
    render(){ return(
        <div className='shop'>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetters />
        </div>
    )
}
}

export default Shop;