import React from "react";
import { useContext, useEffect } from "react";
import './CartItems.css'
import { ShopContext } from "../Context/ShopContext";
import PHOTOS from "../images/index";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";


function CartItems() {

    const { getTotalCartAmount, AllProducts, cartItems, removeFromCart, addToCart } = useContext(ShopContext);

    return (
        <div className="CardItems">
            <div className="CardItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Totoal</p>
                <p>Reduce / Increase Qty</p>
            </div>
            <hr />
            {AllProducts.map((e) =>{
                if(cartItems[e.id] > 0){
                    return(
                        <div className="CardItems-format-wrapper">
                            <div className="CardItems-format">
                                <img src={e.image} className="product-photo" alt="" />
                                <p className="product-title">{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="CardItems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <GrFormSubtract className='cart-remove-photo' onClick={() => {removeFromCart(e.id)}} />
                                <IoMdAdd className='cart-remove-photo' onClick={() => {addToCart(e.id)}} />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}

            

            


            <div className="CardItems-down">
                <div className="CardItems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="CardItems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="CardItems-total-item">
                            <p>Shipping free</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="CardItems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className="CardItems-promocode">
                    <p>If you have a promo code, enter it here.</p>
                    <div className="CardItems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button type="submit">submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;