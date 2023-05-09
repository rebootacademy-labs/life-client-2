import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevState) => [...prevState, product]);
  }

  function removeFromCart(product) {
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
  }

  function totalPriceCart(cart) {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    return total;
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, totalPriceCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};