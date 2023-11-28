import React from "react";
import "./CSS/Cart.css";
import CartItems from "../Components/CartItems/CartItems";


function Cart() {
    return(
        <div className="cart-page">
            <CartItems />
        </div>
    )
}

export default Cart;