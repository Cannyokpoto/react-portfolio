import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';


function MyItem(props){
    return(
        <div className='item'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='' /></Link>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-prices-new'>
                    <div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>{props.new_price}
                </div>
                <div className='item-prices-old'>
                    <div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>{props.old_price}
                </div>
            </div>
        </div>
    )
}

export default MyItem;