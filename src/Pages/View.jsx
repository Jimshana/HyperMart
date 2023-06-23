import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { products } from "../Data/products";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

function View() {
  let { productid } = useParams();
  const product = products.find(
    (product) => productid === product.id.toString()
  );
  console.log(product);

  return (
    <>
      {/* <NavBar /> */}
      <div style={{display:"flex",justifyContent:"center"}}>
        <Grid
          container
          spacing={2}
          direction="row"
         
          justifyContent="center"
          sx={{
            backgroundColor: "white",
            maxWidth: 1200,
            height: 550,
            margin: "auto",
            marginTop: 12,
          }}
        >
          <Grid item xs={12} md={6} sx={{ backgroundColor: "white" }}>
            <img style={{ width: 400, height: 300 }} src={product.image} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ backgroundColor: "white", height: "15%" }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{ fontWeight: "700", textTransform: "capitalize",color:"grey" }}
            >
              {product.name}
            </Typography>

            <Typography variant="h6" component="h6" sx={{ color: "grey" }}>
              {product.description}
            </Typography>

            <Typography
              variant="h4"
              component="h4"
              sx={{
                fontWeight: "bold",
                fontSize: 28,
                marginTop: 3,
                color: "tomato",
              }}
            >
              {product.price}
            </Typography>

            <Button
              variant="contained"
              sx={{
                marginTop: 4,
                backgroundColor: "green",
                ":hover": {
                  bgcolor: "green",
                },
              }}
              size="large"
            >
              ADD TO CART
            </Button>

            <Button
              sx={{
                marginTop: 4,
                color: "green",
                marginLeft: 5,
              }}
              color="success"
              variant="outlined"
              size="large"
            >
              BUY NOW
            </Button>

            <Grid item xs={1} sx={{ backgroundColor: "yellow" }}></Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default View;
