import React from "react";
import react, {useState } from 'react';
import axios from "axios";

export default function Owner() {
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

        <div>
            <h1 > Register NewOwner </h1>
            <br />
            <label> OwnerId: </label>
            <input type="text" name="OwnerId"
                placeholder="OwnerId"
                onChange={handleOwner_id}
            />
            <br />  <br />
            <label> Firstname: </label>
            <input type="text" name="firstName"
                placeholder="FirstName"
                onChange={handleOwner_firstName}
            />
            <br />  <br />

            <label className="last"> Lastname: </label>
            <input type="text" name="lastName"
                placeholder="LastName"
                onChange={handleOwner_lastName}
            />
            <br />  <br />

            <label> Age: </label>
            <input type="text" name="age"
                placeholder="Age" onChange={handleOwner_age}
            />
            <br />  <br />
            <label> Email: </label>
            <input type="text" name="email"
                placeholder="email" onChange={handleOwner_email}
            />
            <br />  <br />
            <label> Address: </label>
            <input type="text" name="Address"
                placeholder="Address" onChange={handleOwner_address}
            />
            <br />  <br />
            <label> Phone: </label>
            <input type="text" name="phone"
                placeholder="phone" onChange={handlEOwner_phone}
            />
            <br />  <br />
            <button onClick={rgisterHandel}>Submit</button>

        </div>

    );
}