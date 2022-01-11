import React from "react";
import react, {useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'



export default function RegisterCar(){

    
    // let [car_Id, setCar_Id] = useState("")
    let [car_model, setCar_model] = useState("")
    let [car_color, setCar_color] = useState("")
    let [car_type, setCar_type] = useState("")
    let [car_description, setCar_description] = useState("")
    let [ img , setImg]  = useState("")
  let[ owner_id , setOwner_id]= useState("")


    // function handleCar_Id(event) {
    //     setCar_Id((car_Id = event.target.value));
    // }

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
    function handleOwner_id(event){
        setOwner_id((owner_id=event.target.value))
       }
    function rgisterHandel() {
        let NewCar = {  car_model:car_model, car_color:car_color, car_type:car_type, car_description:car_description,img:img  ,owner:{owner_id:owner_id} }

        console.log("insid function");
        console.log(NewCar)
        axios({
            method: 'post',
            url: 'api/car/add',
            data:
                NewCar,
        });
    }

    return (
        <form class="form">
       
        
        <h4  > Register NewCar </h4>
        <br />
        <label> CarModel: </label>
        <input type="text" name="CarModel"
            placeholder="CarModel"class="textbox"
            onChange={handleCar_model}
        />
        <br />  <br />

        <label> CarColor: </label>
        <input type="text" name="CarColor"
            placeholder="CarColor"class="textbox"
            onChange={handleCar_color}
        />
        <br />  <br />
        <label  for="CarType">CarType :</label>
    <select  name="CarType"onChange={handleCar_type}>
      <option  class="textbox" value="van">van</option>
      <option class="textbox" value="Ute">Ute</option>
      <option class="textbox" value="SmallCar">SmallCar</option>
    </select>
         <br />  <br />
        <label> img     : </label>
        <input class="textbox" placeholder=" image" onChange={handleImg} />
      
        <br />  <br />
        <label> Description: </label>
        <input  type="text" name="Description" class="textbox"
            placeholder="Description" onChange={handleCar_description}
        />
 <br />  <br />
           <label> OwnerID: </label>
        <input  type="text" name="OwnerID"class="textbox"
            placeholder="OwnerID" onChange={handleOwner_id}
           
        />
        <br />  <br />
         <button onClick={rgisterHandel}>Submit</button> 

   </form>
    

);
    }
