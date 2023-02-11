import { Grid } from "@mui/material";
import React from "react";
import Cards from "../Components/Cards/Cards";
import NavBar from "../Components/NavBar/NavBar";

const products = [
  {
    name: "onion",
    description: "onion is a vegetable also called sawala",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q08WhpczEznhtGN8yMjO4H4QJtfm351g9w&usqp=CAU",
  },
  {
    name: "tomato",
    description: "tomato is a vegetable also called thakkali",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_Ajo4QBvw05DJ3PkY7nWU60s2rKJLierOQ&usqp=CAU",
  },
  {
    name: "carrot",
    description: "carrot is a vegetable also called carrot",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpHUx6UbisDYZ1TJH3_zrH3y3IdmLTqo02w&usqp=CAU",
  },
  {
    name: "Apple",
    description: "Apple is a fruit also called aaple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpbEqivK9Y28zvXwyYG3Yr9JoWYoUwfOuxA&usqp=CAU",
  },
  {
    name: "Apple",
    description: "Apple is a fruit also called aaple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpbEqivK9Y28zvXwyYG3Yr9JoWYoUwfOuxA&usqp=CAU",
  },
  {
    name: "Apple",
    description: "Apple is a fruit also called aaple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpbEqivK9Y28zvXwyYG3Yr9JoWYoUwfOuxA&usqp=CAU",
  }
];

function Home() {
  return (
    <>
      <NavBar />
      <Grid
        container
        sx={{
          maxWidth:"1200px",
          margin:"auto",
          marginTop:"100px"
        }}
      >
        {products.map((product) => (
          <Cards product={product} />
        ))}
      </Grid>
    </>
  );
}

export default Home;
