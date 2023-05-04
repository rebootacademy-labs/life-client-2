import { useState } from "react";

import { Card, CardHeader, CardMedia } from "@mui/material";

import "./CategoryCard.css";

function CategoryCard({ title, image }) {

  const [hoverClass, setHoverClass] = useState('')

  return (
    <Card
      className="cardCategory"
      sx={{ height: "200px" }}
    >
      <CardMedia
      className="cardImage"
      image={image}
      ></CardMedia>
      <CardHeader className="cardText" sx={{ textAlign: "center", textDecoration:"none" }} title={title}></CardHeader>
      
    </Card>
  );
}

export default CategoryCard;
