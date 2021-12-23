import React from "react";
import {Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Car Next Door</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/RegisterOwner">RegisterOwner</Link>|{" "}
        <Link to="/RegisterCar">RegisterCar</Link>|{" "}
        <Link to="/RegisterUser">RegisterUser</Link>
      </nav>
      <Outlet/>
    </div>
  );
}