import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Register() {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          component="img"
          sx={{
            height: 100,
            width: 100,
            // maxHeight: { xs: 40, md: 40 },
            // maxWidth: { xs: 90, md: 50 },
          }}
          alt="The house from the offer."
          src="https://cdn.vectorstock.com/i/preview-lt/71/63/wooden-box-with-food-fresh-vegetables-and-grocery-vector-44607163.webp"
        />
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontWeight: "700",
            textTransform: "capitalize",
            padding: "20px",
          }}
        >
          Register
        </Typography>

        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="First Name"
            style={{
              width: "400px",
              padding: "5px",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            style={{
              width: "400px",
              padding: "5px",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            style={{
              width: "400px",
              padding: "5px",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-password-input"
            label="Confirm Password"
            type="Confirm Password"
            autoComplete="current-password"
            style={{
              width: "400px",
              padding: "5px",
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <Button variant="contained" color="success" size="large">
            Register
          </Button>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ padding: "5px", whiteSpace: "nowrap" }}>
              Already have an account?-
              <Link to="/" style={{ textDecoration: "none" }}>
                {"Login"}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      
    </>
  );
}

export default Register;
