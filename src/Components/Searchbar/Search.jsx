import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { products } from "../../Data/products";
import { useState } from "react";
import Cards from "../Cards/Cards";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
function Search({setQuery}) {

  

  
  return (
    <>
    <div
      style={{
        border: "1px solid #808080",
        padding: "5px",
        width: "400px",
        borderRadius: "3px",
        display: "flex",
        height: "30px",
        alignItems: "center",
      }}
     >
      <span>
        <SearchIcon
          sx={{ color: "#000000", fontSize: "20px", display: "flex" }}
        />
      </span>
      <span>
        <input
          style={{ border: 0, outline: "none" }}
          type={"text"}
          placeholder={"Search products"} onChange={e=>setQuery(e.target.value)}
        />
       
      </span>
    </div>
   
   </>
  );
}

export default Search;
