import React from "react";
import { useContext } from "react";
import './ProductDisplay.css'
import { IoIosStar } from "react-icons/io";
import { ShopContext } from "../Context/ShopContext";



function ProductDisplay(props) {

    const {product} = props;

    const {addToCart} = useContext(ShopContext);

    return (
        <div className="product-display">
            <div className="left">
                <div className="image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-main-image">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{product.name}</h1>
                <div className="product-stars">
                    <IoIosStar className="star" />
                    <IoIosStar className="star" />
                    <IoIosStar className="star" />
                    <IoIosStar className="star" />
                    <IoIosStar className="dull-star" />
                    <p>(150)</p>
                </div>
                <div className="product-prices">
                    <div className="old-price"><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>{product.old_price}</div>
                    <div className="new-price"><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>{product.new_price}</div>
                </div>
                <div className="product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                     voluptates.
                </div>
                <div className="product-size">
                    <h3>Select size</h3>
                    <div className="sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() =>{addToCart(product.id)}}>ADD TO CART</button>
                <div className="product-category">
                    <p><span>Category:</span>  Women, T-Shirt, Crop top</p>
                    <p><span>Tags:</span>  Modern, Latest</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay;