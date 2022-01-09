import React from "react";
import react, { useState } from 'react';
import axios from "axios";

export default function ReviewDetails() {

//  alert("Thank you, your order has been placed, pick up the car")

    
    let [review_details, setReview_details] = useState("")
    let [review_Date, setReview_Date] = useState("")
    let [booking_id, setBooking_id] = useState("")


   
    function handleReview_details(event) {
        setReview_details((review_details = event.target.value));
    }
    function handleReview_Date(event) {
        setReview_Date((review_Date = event.target.value));
    }
    function handleBookingId(event) {
        setBooking_id((booking_id = event.target.value));
    }


    function rgisterHandel() {
        let Reviews = { review_details: review_details, review_Date: review_Date, }
    console.log("insid function");
    console.log(Reviews)
    axios({
        method: 'post',
        url: 'review/add',
        data: Reviews,
    });

}

return (

    <div>
        <h3 > Register Review </h3>
        <br />
        {/* <label> ReviewId: </label><br />
        <input type="text" name="ReviewId"
            placeholder="ReviewId"
            onChange={handleReview_id}
        /> */}
        <br />  <br />
        
        <label className="last"> Review Date: </label><br />
        <input type="textarea" name="ReviewDate"
            placeholder="ReviewDate"
            onChange={handleReview_Date}
        />
        <br />  <br />
        <label> Review Details: </label><br />
        <textarea maxlength="290" name=" Review Details" id="info"
        placeholder="ReviewDetails" 
            onChange={handleReview_details}
            />
        <br />  <br />
        <label> BookingId: </label><br />
        <input type="text" name="BookingId"
            placeholder="BookingId"c
            onChange={handleBookingId}
        />
        <button onClick={rgisterHandel}>Submit</button>
  
 </div>
    
        

);

}