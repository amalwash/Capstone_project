import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogInPage from "./routes/LogInPage";
import Home from "./routes/Home";


export default function App() {


  // let [authenticate, setAuthenticate] = useState(false);
  // let check = "";
  // function handleLogin(msg) {
  //   if (msg == "authenticatedADMIN") {
  //     setAuthenticate("authenticatedADMIN");
  //   }
  //   else if (msg == "authenticatedUSER") {
  //     setAuthenticate("authenticatedUSER");
  //   }
  // }
  // if (!authenticate) {

  //   return <div>
  //     <LogInPage handleLogin={handleLogin} /></div>
  // }
  // else if (authenticate == "authenticatedADMIN") {
  //   console.log("inside admin")

    return (



      <div className="main3">

        <br />  <br />
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="Home">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-link" to="RegisterOwner">RegisterOwner</Link>
                <Link class="nav-link" to="RegisterCar">RegisterCar</Link>
                <Link class="nav-link" to="ListCars">ListCars</Link>
                <Link class="nav-link" to="ReviewEmphasis">ReviewEmphasis</Link>
                <Link class="nav-link" to="ReviewDetails">ReviewDetails</Link>
                {/* <Link class="nav-link" to="ReviewDetails">ReviewDetails</Link> */}
              </div>
            </div>
          </div>
        </nav>


        <Outlet />

      </div>

    );
  }
// }
//   else if (authenticate == "authenticatedUSER") {
//     console.log("inside user")

//     return (
//       <div>


//         <div className="main3">
//           <br />
//           <h1>Car Next Door</h1>
//           <br />
//           <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <div class="container-fluid">
//               <a class="navbar-brand" href="Home">Home</a>
//               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div class="navbar-nav">
//                   {/* <Link class="nav-link" to="RegisterOwner">RegisterOwner</Link>
//                   <Link class="nav-link" to="RegisterCar">RegisterCar</Link> */}
//                   <Link class="nav-link" to="ListCarsUser">ListCars</Link>
//                   <Link class="nav-link" to="ReviewDetails">ReviewDetails</Link>
//                 </div>
//               </div>
//             </div>
//           </nav>


//           <Outlet />
//         </div>
//       </div>

//     );
//   }
// }
