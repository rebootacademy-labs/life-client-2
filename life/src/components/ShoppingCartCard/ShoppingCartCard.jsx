import React, { useContext } from "react";
import "./ShoppingCartCard.css";
import ProductShoppingCartCard from "../ProductShoppingCartCard/ProductShoppingCartCard";
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { CartContext } from "../../contexts/ShoppingCartContext";

function ShoppingCartCard() {

const [cart, setCart] = useContext(CartContext)

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Box>
        <Card
          sx={{
            width: "1000px",
            height: "500px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            margin: "0 10px 0 10px",
          }}
        >
          <Box>
            <CardHeader title="Cesta de la compra" sx={{ color: "black" }}>
            </CardHeader>
            <ProductShoppingCartCard></ProductShoppingCartCard>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card
          sx={{
            width: "300px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ paddingBottom: "20px" }}>
            <CardHeader title="Resumen" sx={{ color: "black" }} />
            <Box
              sx={{
                width: "250px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Total a pagar</Typography>
              <Typography>999€</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center"}}>

            <Button
              sx={{
                marginTop: "30px",
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "#005000",
                },
              }}
              variant="contained"
            >
              PAGAR
            </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default ShoppingCartCard;
