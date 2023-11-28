import React from 'react';
import './NewCollections.css';
import { newCollectionsData } from "../Assets/Data";
import MyItem from "../item/Item";




function NewCollections(){
    return(
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='new-collections-items'>
                {newCollectionsData.map((product, i) =>{
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

export default NewCollections;