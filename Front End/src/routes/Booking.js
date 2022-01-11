import React from "react";
import react, { useState } from 'react';
import axios from "axios";

export default function Booking() {

    let [Booking_id, setBooking_id] = useState("")
    let [car_Id, setCar_Id] = useState("")
  

    function handleBookingId(event) {
        setBooking_id((Booking_id = event.target.value));
    }

    function handleCarId(event) {
        setCar_Id((car_Id = event.target.value));
    }

    function rgisterHandel() {
        let NewCar = { Booking_id:Booking_id  ,car:{car_Id:car_Id} }

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
        <form action="/reg" method="POST" id="regForm">
        <h1 > Register Review </h1>
        <br />
        <label> BookingId: </label><br />
        <input type="text" name="BookingId"
            placeholder="BookingId"class="textbox"
            onChange={handleBookingId}
        />
        <br />  <br />
        
        <label> CarId: </label>
        <input type="text" name="CarId"
            placeholder="CarId"class="textbox"
            onChange={handleCarId}
        />
         <button class="btn btn-outline-secondary" onClick={rgisterHandel}>Submit</button> 
        </form>
    )
} 
