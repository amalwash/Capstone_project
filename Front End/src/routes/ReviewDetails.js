import React from "react";
import react, {useState } from 'react';
import axios from "axios";

export default function ReviewDetails() {

    let [review_id, setReview_id] = useState("")
    let [review_details, setReview_details] = useState("")
    let [review_Date, setReview_Date] = useState("")


    function handleReview_id(event) {
        setReview_id((review_id = event.target.value));
      }
      function handleReview_details(event) {
        setReview_details((review_details = event.target.value));
      }
      function handleReview_Date(event) {
        setReview_Date((review_Date = event.target.value));
      }
      function rgisterHandel() {
        let Reviews = { review_id: review_id, review_details: review_details, review_Date: review_Date}

}

console.log("insid function");
console.log(NewUser)
axios({
    method: 'post',
    url: 'review/add',
    data: Reviews,
});

}

return (

    <div>
        <h1 > Register NewUser </h1>
        <br />
        <label> OwnerId: </label>
        <input type="text" name="OwnerId"
            placeholder="OwnerId"
            onChange={handleReview_id}
        />
        <br />  <br />
        <label> Firstname: </label>
        <input type="text" name="firstName"
            placeholder="FirstName"
            onChange={handleUser_firstName}
        />
        <br />  <br />

        <label className="last"> Lastname: </label>
        <input type="text" name="lastName"
            placeholder="LastName"
            onChange={handleUser_lastName}
        />
        <br />  <br />

        <label> Age: </label>
        <input type="text" name="age"
            placeholder="Age" onChange={handleUser_age}
        />
        
        <br />  <br />
          <button onClick={rgisterHandel}>Submit</button>

      </div>

  );

