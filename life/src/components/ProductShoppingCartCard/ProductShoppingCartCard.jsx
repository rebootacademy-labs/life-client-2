import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

import "./ProductShoppingCartCard.css";
import ProductQuantity from "../ProductQuantity/ProductQuantity";

function ProductShoppingCartCard({
  title,
  image,
  description,
  accesories,
  urlMoreInfo,
  price,
}) {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  function quantityUpdate(newQuantity) {
    setQuantity(newQuantity);
  }

  function handleBuyClick() {
    const item = {
      title,
      image,
      description,
      accesories,
      price,
      quantity,
      totalPrice: quantity * price,
    };
    setCartItems([...cartItems, item]);
  }

  return (
    <Card className="cardProduct">
      <Box className="imageContainer">
        <CardMedia className="cardImage" image={image}></CardMedia>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "250",
          margin: "20px",
        }}
      >
        <CardHeader sx={{ padding: "0px"}} title={title}></CardHeader>
        <Typography sx={{ width: "250px", fontSize: "13px" }}>
          {description}
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            marginTop: "4px",
            fontSize: "15px",
          }}
        >
          Incluye
        </Typography>

        <Typography sx={{ fontSize: "12px" }}>{accesories}</Typography>
        
        <Link className="noUnderline" to={urlMoreInfo}>
          <Typography sx={{ paddingTop: "8px", fontSize: "12px", color:"orange", fontWeight:"bold" }}>
            Más información
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "250",
          margin: "20px",
        }}
      >
        <Typography
          sx={{ fontSize: "25px", fontWeight: "bold", textAlign: "center", color:"#6a5acd" }}
        >
          {price} €
        </Typography>
        <ProductQuantity valor={quantity} setQuantity={quantityUpdate} />
      </Box>
    </Card>
  );
}

export default ProductShoppingCartCard;
