import React from "react";

import { Card, CardHeader, CardMedia } from "@mui/material";

import "./CategoryCard.css";

function CategoryCard({ title, image }) {
  return (
    <Card
      className="cardCategory"
      sx={{ height: "200px", boxShadow: "0 5px 12px black" }}
    >
      <CardMedia
      className="cardImage"
        image={image}
      ></CardMedia>
      <CardHeader sx={{ textAlign: "center" }} title={title}></CardHeader>
    </Card>
  );
}

export default CategoryCard;
