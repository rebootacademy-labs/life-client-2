import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({children})=> {

const [cart, setCart] = useState([])

function addToCart (product){
    setCart((prevState)=> [...prevState, product])
}

    return <CartContext.Provider value={{cart,setCart, addToCart, totalPriceCart, removeFromCart}}>
        {children}
        </CartContext.Provider>
};

function totalPriceCart(cart) {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    return total;
  }

  function removeFromCart(product) {
    const newCart = cart.filter(item => item !== product)
    setCart(newCart)
  }
