import React from "react";
import react, { useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
export default function RegisterOwner() {

    let [owner_id, setowner_id] = useState("")
    let [firstName, setOwner_firstNamE] = useState("")
    let [lastName, setOwner_lastName] = useState("")
    let [Age, setOwner_age] = useState("")
    let [Email, setOwner_email] = useState("")
    let [Address, setOwner_address] = useState("")
    let [phone, setOwner_phone] = useState("")


    function handleOwner_id(event) {
        setowner_id((owner_id = event.target.value));
    }
    function handleOwner_firstName(event) {
        setOwner_firstNamE((firstName = event.target.value));
    }
    function handleOwner_lastName(event) {
        setOwner_lastName((lastName = event.target.value));
    }
    function handleOwner_age(event) {
        setOwner_age((Age = event.target.value));
    }
    function handleOwner_email(event) {
        setOwner_email((Email = event.target.value));
    }
    function handleOwner_address(event) {
        setOwner_address((Address = event.target.value));
    }
    function handlEOwner_phone(event) {
        setOwner_phone((phone = event.target.value));
    }


    function rgisterHandel() {
        let NewOwner = { owner_id: owner_id, owner_firstName: firstName, owner_lastName: lastName, owner_age: Age, owner_email: Email, owner_address: Address, owner_phone: phone }

        console.log("insid function");
        console.log(NewOwner)
        axios({
            method: 'post',
            url: 'owner/add',
            data: NewOwner,
        });
    }


    return (

       
        <form class="form">
            <h4 > Register NewOwner </h4>
            <br />
            <label> OwnerId: </label><br />
            <input  type="text" name="OwnerId"
                placeholder="OwnerId" class="textbox"
                onChange={handleOwner_id}
            />
            <br />  <br />
            <label> Firstname: </label><br />
            <input type="text" name="firstName"
                placeholder="FirstName"class="textbox"
                onChange={handleOwner_firstName}
            />
            <br />  <br />

            <label className="last"> Lastname: </label><br />
            <input type="text" name="lastName"
                placeholder="LastName"class="textbox"
                onChange={handleOwner_lastName}
            />
            <br />  <br />

            <label> Age: </label><br />
            <input type="text" name="age"class="textbox"
                placeholder="Age" onChange={handleOwner_age}
            />
            <br />  <br />
            <label> Email: </label><br />
            <input type="text" name="email"class="textbox"
                placeholder="email" onChange={handleOwner_email}
            />
            <br />  <br />
            <label> Address: </label><br />
            <input type="text" name="Address"class="textbox"
                placeholder="Address" onChange={handleOwner_address}
            />
            <br />  <br />
            <label> Phone: </label><br />
            <input type="text" name="phone"class="textbox"
                placeholder="phone" onChange={handlEOwner_phone}
            />
            <br />  <br />
            <Link to="/RegisterCar"><button  onClick={rgisterHandel}>Submit</button> </Link>

           </form>

    );
}