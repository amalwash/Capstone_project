import React from "react";
import { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Request from "./Request";

export default function RegisterUser() {

  let [user_id, setUser_id] = useState("")
  let [userName, setuserName] = useState("")
  let [password, setPassword] = useState("")
  let [firstName, set_firstNamE] = useState("")
  let [Age, setUser_age] = useState("")
  let [Email, setUser_email] = useState("")
  let [Address, setUser_address] = useState("")
  let [phone, setUser_phone] = useState("")



  function handleUser_id(event) {
    setUser_id((user_id = event.target.value));
  }
  function handleUser_firstName(event) {
    set_firstNamE((firstName = event.target.value));
  }
  function handlePassword(event) {
    setPassword((password = event.target.value));
  }
  function handleUserName(event) {
    setuserName((userName = event.target.value));
  }
  function handleUser_age(event) {
    setUser_age((Age = event.target.value));
  }
  function handleUser_email(event) {
    setUser_email((Email = event.target.value));
  }
  function handleUser_address(event) {
    setUser_address((Address = event.target.value));
  }
  function handleUser_phone(event) {
    setUser_phone((phone = event.target.value));
  }


  function rgisterHandel() {
    let NewUser = { user_id: user_id, user_firstName: firstName, user_age: Age, user_email: Email, user_address: Address, user_phone: phone, userName: userName, password: password }

    console.log("insid function");
    console.log(NewUser)
    axios({
      method: 'post',
      url: 'api/user/add',
      data: NewUser,
    });
  }


  return (

    <div>
      <h1 > Register NewUser </h1>
      <br />
      <label> UserID: </label>
      <input type="text" name="UserID"
        placeholder="UserID"
        onChange={handleUser_id}
      />
      <br /> <br />
      <label className="last"> userName: </label>
      <input type="text" name="userName"
        placeholder="userName"
        onChange={handleUserName}
      />
      <br />  <br />

      <label className="last"> password: </label>
      <input type="text" name="password"
        placeholder="password"
        onChange={handlePassword}
      />
      <br />  <br />
      <label> Firstname: </label>
      <input type="text" name="firstName"
        placeholder="FirstName"
        onChange={handleUser_firstName}
      />

      <br />  <br />
      <label> Age: </label>
      <input type="text" name="age"
        placeholder="Age" onChange={handleUser_age}
      />
      <br />  <br />
      <label> Email: </label>
      <input type="text" name="email"
        placeholder="email" onChange={handleUser_email}
      />
      <br />  <br />
      <label> Address: </label>
      <input type="text" name="Address"
        placeholder="Address" onChange={handleUser_address}
      />
      <br />  <br />
      <label> Phone: </label>
      <input type="text" name="phone"
        placeholder="phone" onChange={handleUser_phone}
      />
      <br />  <br />
      <Link to="/Request"><button onClick={rgisterHandel}>Submit</button></Link>{""}
    

    </div>

  );
}