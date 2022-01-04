import React from "react";
import react, { useState } from 'react';
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
        let Reviews = { review_id: review_id, review_details: review_details, review_Date: review_Date }

    

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
        <h1 > Register Review </h1>
        <br />
        <label> ReviewId: </label>
        <input type="text" name="ReviewId"
            placeholder="ReviewId"
            onChange={handleReview_id}
        />
        <br />  <br />
        <label> Firstname: </label>
        <input type="text" name="ReviewDetails"
            placeholder="ReviewDetails"
            onChange={handleReview_details}
        />
        <br />  <br />

        <label className="last"> Review Date: </label>
        <input type="text" name="ReviewDate"
            placeholder="ReviewDate"
            onChange={handleReview_Date}
        />
        <br />  <br />
        <button onClick={rgisterHandel}>Submit</button>

    </div>

);

}