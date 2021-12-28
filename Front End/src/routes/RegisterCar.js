import React from "react";
import react, {useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button'



export default function RegisterCar(){

    let [car_Id, setCar_Id] = useState("")
    let [car_model, setCar_model] = useState("")
    let [car_color, setCar_color] = useState("")
    let [car_type, setCar_type] = useState("")
    let [car_description, setCar_description] = useState("")
    let [ img , setImg]  = useState("")
   
    function handleCar_Id(event) {
        setCar_Id((car_Id = event.target.value));
    }

    function handleCar_model(event) {
        setCar_model((car_model = event.target.value));
    }

    function handleCar_color(event) {
        setCar_color((car_color = event.target.value));
    }

    function handleCar_type(event) {
        setCar_type((car_type = event.target.value));
    }

    function handleCar_description(event) {
        setCar_description((car_description = event.target.value));
    }
    function handleImg(event) {
        setImg(img = event.target.value);
    
    }
    function rgisterHandel() {
        let NewCar = { car_Id: car_Id, car_model:car_model, car_color:car_color, car_type:car_type, car_description:car_description,img:img }

        console.log("insid function");
        console.log(NewCar)
        axios({
            method: 'post',
            url: 'api/add',
            data:
                NewCar,
        });
    }

    return (
        <div>
           
   {/* <img className='imgg' src="ajar.jpg" alt="Girl in a jacket" width="1100" height="600"/> 
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
</nav> */}
        
        <h1 > Register NewCar </h1>
        <br />
                

        <label> CarId: </label>
        <input type="text" name="CarId"
            placeholder="CarId"
            onChange={handleCar_Id}
        />
        <br />  <br />
        <label> CarModel: </label>
        <input type="text" name="CarModel"
            placeholder="CarModel"
            onChange={handleCar_model}
        />
        <br />  <br />

        <label> CarColor: </label>
        <input type="text" name="CarColor"
            placeholder="CarColor"
            onChange={handleCar_color}
        />
        <br />  <br />

        <label> CarType: </label>
        <input type="text" name="CarType"
            placeholder="CarType" onChange={handleCar_type}
        />
         <br />  <br />
        <label> img     : </label>
        <input placeholder=" image" onChange={handleImg} />
      
        <br />  <br />
        <label> Description: </label>
        <input type="text" name="Description"
            placeholder="Description" onChange={handleCar_description}
        />
        <br />  <br />
        <button onClick={rgisterHandel}>Submit</button>

    </div>

);
    }
