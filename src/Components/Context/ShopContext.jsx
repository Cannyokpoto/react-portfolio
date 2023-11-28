import React, { createContext, useContext, useState } from "react";
import { AllProducts } from "../Assets/Data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < AllProducts.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

function ShopContextProvider(props){
    const [cartItems, setCartItems] =useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]-1}))
    }

    //Total Cart Amount

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = AllProducts.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            return totalAmount;
        }
    }

    //Cart item count

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }





    const contextValue = {getTotalCartItems, getTotalCartAmount, AllProducts, cartItems, addToCart, removeFromCart}


    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;