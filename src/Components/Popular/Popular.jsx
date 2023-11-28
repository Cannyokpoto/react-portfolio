import React from 'react';
import './Popular.css';
import { popularData } from '../Assets/Data';
import MyItem from '../item/Item';


function Popular(props){
    return(
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className='popular-items'>
                {popularData.map((product, i) =>{
                    return(
                        <MyItem 
                            key={i}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            new_price={product.new_price}
                            old_price={product.old_price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Popular;