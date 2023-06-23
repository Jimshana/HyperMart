import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleUserNameChange = (e) => {
    setErrors({...errors,username:""})
    setUsername(e.target.value)
  }
  const handleUserPasswordChange=(e)=>{
    setErrors({...errors,password:""})
    setPassword(e.target.value)

  }

  const handleSubmit = () => {
    setErrors({ username: "", password: "" })
    if (username === "") {
      setErrors({ ...errors, username: "Username is required" });
      // console.log(username);
      // console.log(password);
      // navigate("/products");
      return;
    }
   
    if (password === "") {
      setErrors({ ...errors, password: "Password is required" });

      return;
    }

    console.log(username);
    console.log(password);
    navigate("/products");
  };

  return (
    <>
      <Link to="/"></Link>

      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: "700",
            textTransform: "capitalize",
            padding: "5px",
          }}
        >
          Login
        </Typography>
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            // maxHeight: { xs: 40, md: 40 },
            // maxWidth: { xs: 90, md: 50 },
          }}
          alt="The house from the offer."
          src="https://cdn.vectorstock.com/i/preview-lt/71/63/wooden-box-with-food-fresh-vegetables-and-grocery-vector-44607163.webp"
        />
        <Grid item xs={4}>
          <TextField
            required
            error={errors.username !== "" ? true : false}
            id="outlined-required"
            label="Username"
            helperText={errors.username}
            style={{ width: "400px", padding: "5px" }}
            onChange={(e) => handleUserNameChange(e)}
          />
          {/* <Typography>
            Username is required
          </Typography> */}
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            error={errors.password !== "" ? true : false}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            helperText={errors.password}
            style={{ width: "400px", padding: "5px" }}
            onChange={(e) => handleUserPasswordChange(e)}
          />
          {/* <Typography>
            Username is required
          </Typography> */}
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ padding: "5px", whiteSpace: "nowrap" }}>
            Don't have an account?-
            <Link to="/register" style={{ textDecoration: "none" }}>
              {"Register"}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
