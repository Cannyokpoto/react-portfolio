import React from 'react';
import './RelatedProducts.css';
import { RelatedData } from "../Assets/Data";
import MyItem from "../item/Item";




function RelatedProducts(){
    return(
        <div className='related-products'>
            <h1>RELATED PRODUCTS</h1>
            <hr />
            <div className='related-products-items'>
                {RelatedData.map((product, i) =>{
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

export default RelatedProducts;