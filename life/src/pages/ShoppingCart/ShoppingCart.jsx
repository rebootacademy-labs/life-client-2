import React from "react";
import ShoppingCartCard from "../../components/ShoppingCartCard/ShoppingCartCard";
import { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";
import ProductShoppingCartCard from "../../components/ProductShoppingCartCard/ProductShoppingCartCard";

function ShoppingCart() {

const {cart} = useContext(CartContext)

console.log(cart)
const productCart = cart.map((product)=>{
  return (
  
    <ProductShoppingCartCard
    key={product.id}
    title={product.name}
    image={product.urlImage}
    description={product.description}
    accesories={product.accesories}
    urlMoreInfo={product.urlMoreInfo}
    price={product.price}
    quantity={product.quantity}
    totalPrice={product.totalPrice}
    ></ProductShoppingCartCard>
    // <p>{JSON.stringify(cart)}</p>
  );
}
)
return productCart
}


export default ShoppingCart;
