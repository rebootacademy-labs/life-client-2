import React from "react";
import ShoppingCartCard from "../../components/ShoppingCartCard/ShoppingCartCard";
import { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";
import ProductShoppingCartCard from "../../components/ProductShoppingCartCard/ProductShoppingCartCard";
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { cart } = useContext(CartContext);
  let {totalPriceCart} = useContext(CartContext)

  function shoppingCartProductDisplay() {

    if (cart.length === 0) {
      return <h2 className="empty-cart">Tu cesta está vacía</h2>;

    } else {

      const productCart = cart.map((product) => {
console.log(product)
        return (
          <>
            <ProductShoppingCartCard
              key={product.id}
              title={product.name}
              image={product.image}
              description={product.description}
              accesories={product.accesories}
              urlMoreInfo={product.urlMoreInfo}
              price={product.price}
              quantity={product.quantity}
              totalPrice={product.totalPrice}
            ></ProductShoppingCartCard>
          </>
        );
      });
      return productCart;
    }
  }

  return (
    <Box className="container-cart">
      <Box
        sx={{ display: "Flex", flexDirection: "column", alignItems: "center" }}
      >
        <h1>Cesta de la compra</h1>
        <Box sx={{ display: "Flex"}}>
          <Box sx={{ minWidth:"800px"}}>{shoppingCartProductDisplay()}</Box>
          <Box className="price-box" sx={{ display: "Flex", flexDirection: "column", alignItems: "center", marginLeft:"20px" }}>
            <Typography sx={{fontWeight: "bold"}} >Total a pagar</Typography>
            <Typography>{totalPriceCart(cart)} €</Typography>
            <Button sx={{
              marginTop:"20px",
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "#005000",
            },
          }}
          variant="contained">Pagar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShoppingCart;
