import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './routes/Home';
import ListCars from './routes/ListCars';
import ListVanCar from './routes/ListVanCar';
import Epenses from './routes/expenses';
import ReviewDetails from './routes/ReviewDetails';
import Request from './routes/Request';
import ListSmallCar from './routes/ListSmallCar';
import RegisterUser from './routes/RegisterUser';
import ListUteCar from './routes/ListUteCar';
import RegisterCar from './routes/RegisterCar';
import LogInPage from './routes/LogInPage';
import RegisterOwner from './routes/RegisterOwner';
import './index.css';




ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path=":registerCar" element={<RegisterCar />} />
        <Route path="registerOwner" element={< RegisterOwner />} />
        <Route path="registerUser" element={<RegisterUser />}/>
        <Route path="/Request" element={<Request />} />

        <Route path="ListCars" element={<ListCars />} />
        <Route path="ListCars" element={<ListCars />} />
        <Route path="ListSmallCar" element={<ListSmallCar />} />
        <Route path="listVanCar" element={<ListVanCar />} />
        <Route path="listUteCar" element={<ListUteCar />} />
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="ReviewDetails" element={<ReviewDetails />} />
        <Route path="Epenses" element={<Epenses />}>
          <Route path="Epenses" element={<Epenses />} />
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));








// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App';
// import RegisterCar from './routes/RegisterCar';
// import RegisterOwner from './routes/RegisterOwner';
// import Home from './routes/Home';



// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="registerCar" element={<RegisterCar />} />
//         <Route path="registerOwner" element={<RegisterOwner />}>
//           <Route path="home" element={<Home />} />
//           <Route
//             index
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>Select an invoice</p>
//               </main>
//             }
//           />
//         </Route>
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p>There's nothing here!</p>
//             </main>
//           }
//         />
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   , document.getElementById('root'));

