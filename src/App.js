import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Vegetables from "./Pages/Vegetables";
import View from "./Pages/View";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Categories from "./Pages/Categories";
import axios from "axios";
import Dashboard from "./Components/Layout/Dashboard";
import { useState } from "react";
import { products } from "./Data/products";

import Index from "./Pages/Index";
import Api from "./Pages/Api";
import Apii from "./Pages/Apii";
function App() {

  const[query,setQuery]=useState("");
  // console.log(products.filter(product=>product.name.includes(query)))
  const filteredproducts= products.filter((product)=>product.name.toLowerCase().includes(query.toLowerCase()))
  console.log(filteredproducts)

  return (
    
      
    // <Routes>
    //   <Route path="/index" element={<Index/>}/>
    // </Routes>
    // <Routes>
    //   <Route path="/api" element={<Api/>}/>
    // </Routes>

    // <Routes>
    //   <Route path="/apii" element={<Apii/>}/>
    // </Routes>
  
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/products" element={<Dashboard setQuery={setQuery} />}>        
        <Route index element={<Home filteredproducts={filteredproducts} />} />  {/*first ethanoo varandyath ain index kodkaa*/}
         <Route path="products" element={<Home filteredproducts={filteredproducts} />} />
         <Route path=":productid" element={<View />} />
         <Route path="category/:productcategory" element={<Categories />} />

        {/* <Route index element={<View/>}/> 

        {/* <Route path='vegetables' element={<Vegetables/>}/> */}
    </Route>
    </Routes>
  );
}

export default App;
