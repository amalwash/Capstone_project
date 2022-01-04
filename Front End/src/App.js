import React from "react";
import {Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="main3">
       <br />
      <h1>Car Next Door</h1>
      <br />
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
 

      <Outlet/>
 {/* <div className="main">
 <h3>With your free car sharing membership, you can choose cars around carthe country</h3>
 <h3>We have cars close to home, airports and train stations to help you get around</h3> 
 </div>
 <br /> <br />
    <div className="ciy">
  <a href="/ListCars" > <img  src="mon.jpg" class="rounded-pill" alt="kn" /></a><img src="Qa.jpg" class="rounded-pill" alt="kn"/>
    <img src="riadh.jpg" class="rounded-pill" alt="kn"/>   <img src="jadd.jpg" class="rounded-pill" alt="kn"/>
      <img src="maka.jpg" class="rounded-pill" alt="kn"/> <br /> <br />   <img src="hai.jpg" class="rounded-pill" alt="kn"/>
      <img src="alj.jpg" class="rounded-pill" alt="kn"/>   <img src="arar.jpg" class="rounded-pill" alt="kn"/><img src="tap.jpg" class="rounded-pill" alt="kn"/>
      <img src="kab.jpg" class="rounded-pill" alt="kn"/><br /> <br /> 
      <img src="aser.jpg" class="rounded-pill" alt="kn"/> <img src="naj.jpg" class="rounded-pill" alt="kn"/>
      <img src="jas.jpg" class="rounded-pill" alt="kn"/><img src="damam.jpg" class="rounded-pill" alt="kn"/>
      <br /> <br /> <br /> <br /> <br /> <br />
    </div> */}
     </div>
  );
}