import Grid from "@mui/material/Grid";
import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../Components/Cards/Cards";
import NavBar from "../Components/NavBar/NavBar";
import { products } from "../Data/products";

function Categories() {
  // const params = useParams()
  // console.log(params);

  let { productcategory } = useParams();
  const filteredProducts = products.filter(
    (product) => productcategory === product.category
  );
 
  return (
    <>
      <Grid
        container
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        {filteredProducts.map((product) => {
          return <Cards product={product} />;
        })}
      </Grid>
    </>
  );
}

export default Categories;
