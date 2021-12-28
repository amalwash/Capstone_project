import React from "react";
import {Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
       <br /><br />
      <h1>Car Next Door</h1>
      <br /><br />
         {/* <img className='imgg' src="ajar.jpg" alt="Girl in a jacket" width="1100" height="600"/>  */}
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="Home">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       
        <a class="nav-link" href="RegisterOwner">RegisterOwner</a>
        <a class="nav-link" href="RegisterCar">RegisterCar</a>
        <a class="nav-link" href="ListCars">ListCars</a>
        <a class="nav-link" href="RegisterUser">RegisterUser</a>
       
        
     </div>
    </div>
  </div>
</nav>
     
      <nav
        // style={{
        //   borderBottom: "solid 1px",
        //   paddingBottom: "1rem"
        // }}
      >
        {/* <Link to="/home">Home</Link> |{" "}
        <Link to="/RegisterOwner">RegisterOwner</Link>|{" "}
        <Link to="/RegisterCar">RegisterCar</Link>|{" "}
        <Link to="/RegisterUser">RegisterUser</Link>|{" "}
        <Link to="/ListCars">ListCars </Link> */}
      </nav>
      <Outlet/>
    </div>
  );
}