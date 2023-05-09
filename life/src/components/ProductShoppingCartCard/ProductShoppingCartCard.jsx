import { useState } from "react";
import { Card, CardHeader, CardMedia, Typography, Box } from "@mui/material";

import "./ProductShoppingCartCard.css";

function ProductShoppingCartCard({
  title,
  image,
  description,
  accesories,
  urlMoreInfo,
  price,
  totalPrice,
  quantity,
}) {
  const [cartItems, setCartItems] = useState([]);

  function quantityUpdate(newQuantity) {
    setQuantity(newQuantity);
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
        <CardHeader sx={{ padding: "0px" }} title={title}></CardHeader>
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
        <Box
          sx={{
            display: "flex",

          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              textAlign: "center",
              color: "black",
              marginRight: "30px",
            }}
          >
            {quantity} ud.
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              textAlign: "center",
              color: "black",
              marginRight: "30px",
            }}
          >
            x
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              textAlign: "center",
              color: "black",
            }}
          >
            {price} €
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
          justifyContent: "flex-end",
        }}
      >
       
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              color: "black",
            }}
          >
            {totalPrice} €
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default ProductShoppingCartCard;
