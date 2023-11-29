import React, { useContext } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import MyItem from "../Components/item/Item";
import "./CSS/ShopCategory.css";
import "../Components/item/item.css";


function ShopCategory(props) {

    const {AllProducts} = useContext(ShopContext)

    return(
        <div className="shop-category">
            <img src={props.banner} alt="" className="banner" />
            <div className="shopCategory-indexSort">
                <p><span>showing 1 - 12</span> out of 34 products</p>
                <div className="shopCategory-sort">
                    Sort by <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
            
            <div className="shopCategory-products">
                {AllProducts.map((categoryProduct, i) =>{
                    if(props.category === categoryProduct.category){
                        return(
                            <MyItem 
                            key={i}
                            id={categoryProduct.id}
                            name={categoryProduct.name}
                            image={categoryProduct.image}
                            new_price={categoryProduct.new_price}
                            old_price={categoryProduct.old_price}
                            />
                        )
                    }

                    else{
                        return null;
                    }
                })}
            </div>

            <div className="shopCategory-load-more">Explore More</div>
        </div>
    )
}

export default ShopCategory;