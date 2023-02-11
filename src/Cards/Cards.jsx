import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { display } from "@mui/system";
function Cards(props) {

  const product = props.product
  console.log(product)

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q08WhpczEznhtGN8yMjO4H4QJtfm351g9w&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Onion
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" color="success">
            VIEW
          </Button>
          <Button variant="outlined" size="small" color="success">
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Cards;
