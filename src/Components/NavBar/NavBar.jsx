import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./NavBar.css";
import Search from "../Searchbar/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbar from "./MobileNavbar";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <AppBar sx={{ background: "#FFFFFF" }}>
      <Toolbar sx={{ maxWidth: 1400, margin: "auto" }}>
        <MenuIcon
          sx={{
            color: "#000000",
            fontSize: "30px",
            display: { xs: "block", md: "none" },
          }}
          onClick={handleNavbar}
        />
        <Box
          component="img"
          sx={{
            height: 40,
            width: 90,
            maxHeight: { xs: 40, md: 40 },
            maxWidth: { xs: 90, md: 50 },
          }}
          alt="The house from the offer."
          src="https://cdn.vectorstock.com/i/preview-lt/71/63/wooden-box-with-food-fresh-vegetables-and-grocery-vector-44607163.webp"
        />
        <Tabs sx={{ display: { xs: "none", md: "block" } }}>
          <Tab label="HOME" />
          <Tab label="VEGETABLES" />
          <Tab label="FRUITS" />
          <Tab label="FISH" />
          <Tab label="MEAT" />
          <Tab label="DRINKS" />
        </Tabs>
        <Search />
        <PersonOutlineIcon
          sx={{
            color: "#000000",
            marginLeft: "auto",
            fontSize: "30px",
            display: { xs: "none", md: "block" },
          }}
        />
        <FavoriteBorderIcon
          sx={{
            color: "#000000",
            fontSize: "30px",
            marginLeft: "20px",
            display: { xs: "none", md: "block" },
          }}
        />
        <ShoppingBagIcon
          sx={{
            color: "#000000",
            fontSize: "30px",
            marginLeft: "20px",
            marginRight: "50px",
            display: { xs: "none", md: "block" },
          }}
        />
      </Toolbar>
      {navbarOpen && <MobileNavbar />}
    </AppBar>
  );
}

export default NavBar;
