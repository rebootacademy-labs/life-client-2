import React from "react";
import ShoppingCartCard from "../../components/ShoppingCartCard/ShoppingCartCard";
import { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";

function ShoppingCart() {
const {cart} = useContext(CartContext)

  return (
    // <ShoppingCartCard></ShoppingCartCard>
    <p>{JSON.stringify(cart)}</p>
  );
}


export default ShoppingCart;
