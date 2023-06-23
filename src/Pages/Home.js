import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards/Cards";
import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { products } from "../Data/products";

function Home({ filteredproducts }) {
  useEffect(() => {
    console.log("component mounting");
  });
  return (
    <>
      {/* <NavBar setQuery={setQuery}/> */}
      <Grid
        container
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        {filteredproducts.map((product) => (
          <Cards product={product} />
        ))}
      </Grid>
      <Outlet />
    </>
  );
}

export default Home;
