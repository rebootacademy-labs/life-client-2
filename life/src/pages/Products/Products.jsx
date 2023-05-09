import { useEffect, useState } from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { getProducts, getProductsbyCategory } from "../../services/lifeAPI";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";


import "./Products.css"

function Products() {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
      async function refreshProducts() {
        const productsResponse = await getProductsbyCategory(categoryId);
        setProducts(productsResponse.data);
      }
      refreshProducts();
    }, []);

    function getCardProducts() {
        const cards = products.map((product)=>{

            return(
            <ProductCard
            key={product.id}
            title={product.name}
            image={product.urlImage}
            description={product.description}
            accesories={product.accesories}
            urlMoreInfo={product.urlMoreInfo}
            price={product.price}
            />

            )
        })
        return cards
    }
  return (
<Box>
    <Box className="productPageContent" >{getCardProducts()}</Box>
</Box>
  )
}

export default Products