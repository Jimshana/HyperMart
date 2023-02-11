import React,{useState} from 'react'
import { AppBar,Typography,Tabs,Tab,Box} from '@mui/material';
import { Toolbar } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Search } from '@mui/icons-material';
import SearchComponent from "react-material-ui-searchbar";
import { width } from '@mui/system';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { borders } from '@mui/system';
import './NavBar.css';

function NavBar() {
// const[valu]
  return (
    <div>
 
        <AppBar sx={{background:"#FFFFFF"}}>
            <Toolbar>
                {/* <Typography>
                    WELCOME
                </Typography> */}
                {/* <ShoppingCartCheckoutIcon/> */}
                <Box component="img"  sx={{
          height: 40,
          width: 90,
          maxHeight: { xs:  40, md: 40 },
          maxWidth: { xs: 90, md: 50 },
        }}
         
       
        alt="The house from the offer."
        src="https://cdn.vectorstock.com/i/preview-lt/71/63/wooden-box-with-food-fresh-vegetables-and-grocery-vector-44607163.webp"/>
                <Tabs>
                    <Tab label="HOME"/>
                    <Tab label="VEGETABLES"/>
                    <Tab label="FRUITS"/>
                    <Tab label="FISH"/>
                    <Tab label="MEAT"/>
                    <Tab label="DRINKS"/>
                </Tabs>
                {/* <div>
                    <ul>
                        <li>MEN</li>
                        <li>WOMAN</li>
                        <li>MEN</li>
                        <li>MEN</li>
                        <li>MEN</li>
                    </ul>
                </div> */}

                <div style={{border:"1px solid #808080" ,padding:"10px" ,width:"500px", borderRadius:"3px" }}>
                    <span>
                    🤩
                    </span>
                    <span>
                        <input style={{border:0,outline: "none"}} type={"text"} placeholder={"Search products"}/>
                    </span>
                </div>
                
                {/* <SearchComponent  sx={{ marginLeft:"50px", width:"400px",backgroundColor:"#F5F5F5",borderRadius:"5px",borderColor:"#F5F5F5",
                
                }}
                placeholder={'Enter the product to be searched'}/> */}
                <PersonOutlineIcon sx={{color:"#000000",marginLeft:"auto",fontSize:"30px" }}/>
                {/* <br>Profile</br> */}
                <FavoriteBorderIcon sx={{color:"#000000",fontSize:"30px",marginLeft:"20px" }}/>
                <ShoppingBagIcon sx={{color:"#000000",fontSize:"30px",marginLeft:"20px" ,marginRight:"50px"}}/>
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default NavBar