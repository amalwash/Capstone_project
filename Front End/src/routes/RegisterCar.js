import React from "react";
import react, {useState } from 'react';
import axios from "axios";



export default function RegisterCar(){

    let [car_Id, setCar_Id] = useState("")
    let [car_model, setCar_model] = useState("")
    let [car_color, setCar_color] = useState("")
    let [car_type, setCar_type] = useState("")
    let [car_description, setCar_description] = useState("")
   
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

    function rgisterHandel() {
        let NewCar = { car_Id: car_Id, car_model:car_model, car_color:car_color, car_type:car_type, car_description:car_description }

        console.log("insid function");
        console.log(NewCar)
        axios({
            method: 'post',
            url: 'car/add',
            data: NewCar,
        });
    }

    return (
        <div>
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
        <label> Description: </label>
        <input type="text" name="Description"
            placeholder="Description" onChange={handleCar_description}
        />
        <br />  <br />
        <button onClick={rgisterHandel}>Submit</button>

    </div>

);
}
