import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Cards({ product }) {
  //Object destructuring
  // const {product} = props
  const [isLiked, setIsLiked] = useState(false);
  console.log(product);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          width: 250,
          minHeight: 300,
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" color="success">
            VIEW
          </Button>
          <Button variant="outlined" size="small" color="success">
            ADD TO CART
          </Button>
          <div
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              padding: 10,
              backgroundColor: "white",
              borderRadius: "100%",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLiked ? (
              <FavoriteIcon sx={{ color: "red" }} onClick={handleLike} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "red" }} onClick={handleLike} />
            )}
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Cards;
