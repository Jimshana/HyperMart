import React, { useState, Component } from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./NavBar.css";
import Search from "../Searchbar/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbar from "./MobileNavbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { products } from "../../Data/products";

function NavBar({setQuery}) {
  
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  //   const styles = {
  //     className:'text-gray-600 block px-2 py-1 hover:underline hover:text-gray-900',
  //     activeClassName: 'underline text-gray-900'

  // }
  const links = [
    {
      label: "HOME",
      to: "/products",
    },
    {
      label: "VEGETABLES",
      to: "/products/category/vegetables",
    },
    {
      label: "FRUITS",
      to: "/products/category/fruits",
    },
    {
      label: "FISH",
      to: "/products/category/fish",
    },
    {
      label: "MEAT",
      to: "/products/category/meat",
    },
    {
      label: "DRINKS",
      to: "/products/category/drinks",
    },

  ];

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
        <Link to="/products">
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
        </Link>

        <Tabs sx={{ display: { xs: "none", md: "flex",justifyContent:"space-between"} }}>
          {links.map((link) => (
            <NavLink
              style={{ textDecoration: "none", color: "black" ,margin:15 }}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
          {/* {links.map(link => (<NavLink to={link.to}>{link.label}</NavLink> ))} */}

          {/* <NavLink style={{ textDecoration: "none" ,color:"black"}}> */}

          {/* </NavLink> */}

          {/* <NavLink style={{ textDecoration: "none",color:"black" }} to={`/products/category/vegetables`}>
            <Tab label="VEGETABLES" />
          </NavLink>
          <NavLink style={{ textDecoration: "none",color:"black"  }} to={`/products/category/fruits`}>
            <Tab label="FRUITS" />
          </NavLink>
          <NavLink style={{ textDecoration: "none",color:"black" }} to="/fish">
            <Tab label="FISH" />
          </NavLink>
          <NavLink style={{ textDecoration: "none",color:"black" }} to="/meat">
            <Tab label="MEAT" />
          </NavLink>
          <NavLink style={{ textDecoration: "none",color:"black" }} to="/drinks">
            <Tab label="DRINKS" />
          </NavLink> */}
        </Tabs>
        <Search setQuery={setQuery}/>
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
