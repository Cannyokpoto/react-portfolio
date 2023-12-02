import React from "react";
import { useContext, useEffect } from "react";
import './CartItems.css'
import { ShopContext } from "../Context/ShopContext";
import PHOTOS from "../images/index";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";


function CartItems() {

    const { getTotalCartAmount, AllProducts, cartItems, removeFromCart, addToCart, getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="CardItems">
            <p className="CardItems-format-main">Cart({getTotalCartItems()})</p>

            <hr />

            {AllProducts.map((e) =>{
                if(cartItems[e.id] > 0){
                    return(
                        <div className="CardItems-format-wrapper">
                            <div className="CardItems-format">
                                <img src={e.image} className="product-photo" alt="" />
                                <p className="product-title">{e.name}</p>
                                <div className="prices">
                                    <p><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>{e.new_price}</p>
                                    <p><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>{e.new_price * cartItems[e.id]}</p>
                                </div>
                            </div>
                            <div className="add-remove">
                                <p className="reduce">Increase / Reduce Qty</p>

                                <div className="add-remove-btn">
                                    <GrFormSubtract className='cart-remove-photo' onClick={() => {removeFromCart(e.id)}} />
                                    <button className="CardItems-quantity">{cartItems[e.id]}</button>
                                    <IoMdAdd className='cart-remove-photo' onClick={() => {addToCart(e.id)}} />
                                </div>
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
                            <p><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="CardItems-total-item">
                            <p>Shipping free</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="CardItems-total-item">
                            <h3>Total</h3>
                            <h3><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>{getTotalCartAmount()}</h3>
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