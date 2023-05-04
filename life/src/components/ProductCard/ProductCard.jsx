import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";

import "./ProductCard.css";

function ProductCard({
  title,
  image,
  description,
  accesories,
  urlMoreInfo,
  price,
}) {
  return (
    <Card className="cardProduct" sx={{ display: "flex" }}>
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
        <Typography>{description}</Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            marginTop:"4px",
            fontSize:"15px",
          }}
        >
          Incluye
        </Typography>

        <Typography>{accesories}</Typography>
        <Typography>{urlMoreInfo}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "250",
          margin: "20px",
        }}
      >
        <Typography>{price}</Typography>
        <Typography>Cantidad</Typography>
        <Button variant="contained">Comprar</Button>
      </Box>
    </Card>
  );
}

export default ProductCard;
