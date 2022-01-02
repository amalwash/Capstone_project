import React from "react";
import react, {useState } from 'react';
import axios from "axios";

export default function RegisterUser() {
 
  let [user_id, setUser_id] = useState("")
  let [firstName, set_firstNamE] = useState("")
  let [lastName, setUser_lastName] = useState("")
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
  function handleUser_lastName(event) {
    setUser_lastName((lastName = event.target.value));
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
      let NewUser = { user_id: user_id, user_firstName: firstName, user_lastName: lastName, user_age: Age, user_email: Email, user_address: Address, user_phone: phone }

      console.log("insid function");
      console.log(NewUser)
      axios({
          method: 'post',
          url: 'user/add',
          data: NewUser,
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
          <h1 > Register NewUser </h1>
          <br />
          <label> UserID: </label>
          <input type="text" name="UserID"
              placeholder="UserID"
              onChange={handleUser_id}
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
          <button onClick={rgisterHandel}>Submit</button>

      </div>

  );
}