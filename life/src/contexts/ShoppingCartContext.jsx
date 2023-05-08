import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({children})=> {

    const [cart, setCart] = useState([])

function addToCart (product){
    setCart((prevState)=> [...prevState, product])
}

    return <CartContext.Provider value={{cart,setCart, addToCart}}>
        {children}
        </CartContext.Provider>
};