import React, { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { products } from "../Data/products";
import Cards from "../Components/Cards/Cards";
import { Grid } from '@mui/material';


function Vegetables() {
  
  // const product=products
  return (
    <>
    <NavBar/>
    <Grid
        container
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        fxjcghjhdj
    {/* {
      products.map((product)=>if(product.category==="vegetables"))
    } */}

    {/* if({product.category==="vegetables"}){
      products.map((product)=>(<Cards product={product} />))
    } */}

    {/* {
      products.map((product)=>{
        if(product.category==="vegetables")
         
          return <Cards product={product} />
          console.log(product)
        
        
      })
      
    } */}
    </Grid>
    </>
    
  )
}

export default Vegetables