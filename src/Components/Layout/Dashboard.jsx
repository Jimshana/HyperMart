import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
function Dashboard({ children ,setQuery}) {
  return (
    <div>
      <NavBar setQuery={setQuery}/>
      <Outlet/>
    </div>
  );
}

export default Dashboard;
