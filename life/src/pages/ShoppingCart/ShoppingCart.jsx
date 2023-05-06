import React from "react";
import ShoppingCartCard from "../../components/ShoppingCartCard/ShoppingCartCard";

function ShoppingCart({ cartItems }) {
    console.log(cartItems)
  return (
    <ShoppingCartCard></ShoppingCartCard>
    // <>
    //   {cartItems.length === 0 || cartItems.length === undefined ? (
    //     <p>No hay productos en el carrito</p>
    //   ) : (
    //     <>
    //       {cartItems.map((item, index) => (
    //         <ShoppingCartCard
    //           key={index}
    //           title={item.title}
    //           image={item.image}
    //           description={item.description}
    //           price={item.price}
    //           quantity={item.quantity}
    //           totalPrice={item.totalPrice}
    //         />
    //       ))}
    //     </>
    //   )}
    // </>
  );
}


export default ShoppingCart;
