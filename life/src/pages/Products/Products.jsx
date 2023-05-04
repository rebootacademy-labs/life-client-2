import { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import { getProducts, getProductsbyCategory } from "../../services/lifeAPI";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import prueba from "../../assets/Categories/batiente.jpg"
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
    console.log(products)

    function getCardProducts() {
        const cards = products.map((product)=>{

            return(
                <ProductCard
                key={product.id}
                title={product.name}
                image={prueba}
                description={product.description}
                accesories={product.accesories}
                urlMoreInfo={product.urlMoreInfo}
                />
            )
        })
        return cards
    }
  return (
<Box>
    <Box>{getCardProducts()}</Box>
</Box>
  )
}

export default Products