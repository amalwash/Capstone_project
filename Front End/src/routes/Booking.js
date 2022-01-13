// import React from "react";
import react, { useState, useEffect } from 'react';
import axios from "axios";

// export default function Booking() {

//     let [Booking_id, setBooking_id] = useState("")
//     let [car_Id, setCar_Id] = useState("")
//     let[Cars, setCars]=useState([])

//     function handleBookingId(event) {
//         setBooking_id((Booking_id = event.target.value));
//     }

//     function handleCarId(event) {
//         setCar_Id((car_Id = event.target.value));
//     }

//     function rgisterHandel() {
//         // let NewCar = {  car_model:car_model, car_color:car_color, car_type:car_type, car_description:car_description,img:img  ,owner:{owner_id:owner_id} }
//         let NewCar = { Booking_id:Booking_id  ,car:{car_Id:car_Id} }

//         console.log("insid function");
//         console.log(NewCar)
//         axios({
//             method: 'post',
//             url: 'api/car/add',
//             data:
//                 NewCar,
//         });
//     }
//     let myCarDisplay = sessionStorage.getItem("carId")
//     useEffect(() => {
//        {  axios.get(`api/Cars/${myCarDisplay}`)
//        .then(result => {
//            const Cars = result.data;
//            setCars(result.data);
// console.log(Cars)
//        });
//         }
//     }, [])
//     // sessionStorage.getItem(`api/Cars/${carId}`)
//     // let gitcars = sessionStorage.getItem(`api/Cars/${carId}`)
    
//     return (
//         // <div>
//         // <form action="/reg" method="POST" id="regForm">
//         // <h1 > Register Review </h1>
//         // <br />
//         // <label> BookingId: </label><br />
//         // <input type="text" name="BookingId"
//         //     placeholder="BookingId"class="textbox"
//         //     onChange={handleBookingId}
//         // />
//         // <br />  <br />
        
//         // <label> CarId: </label>
//         // <input type="text" name="CarId"
//         //     placeholder="CarId"class="textbox"
//         //     onChange={handleCarId}
//         // />
//         // <br/>  <br/>
//         //  <button  onClick={rgisterHandel}>Submit</button> 
//         // </form>
//         // </div>
//         <div>
//         <div className="card1">
//          {Cars.map((item => (
//             <div key={item.car_Id} className='row' padding="20px" >
//               <img height="150px" width="150 px" src={item.img} />
//               <div className="container1">
//                 <p>TypeCar:{item.car_type}</p>
//                 <p>Model: {item.car_model}</p>
//                 <p>color:{item.car_color} </p>
//                    <p>Owner Of Car:{item.owner.owner_firstName}{item.owner.owner_lastName}</p>
//               </div>
//             </div>
//           )))
//           }
//         </div>
//       </div>
//     )
// } 


import React, { Component } from 'react'

export class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cars: [],

        };

    }

    componentDidMount(){
        let myCarDisplay = sessionStorage.getItem("carId")
        console.log(myCarDisplay)
    //     axios.get(`api/Cars/${myCarDisplay}`)
    //     .then(result => {
    //         // const Cars = result.data;
    //         this.setState(result.data);
    //    });
           axios.get(`api/Cars/12`)
        .then(result => {
            // const Cars = result.data;
            this.setState({Cars:result.data});
       });

    }
    render() {
        console.log(this.state.Cars)
        let carscars=[]
        carscars.push(this.state.Cars)
        console.log(carscars)
        return (
            <div>
            <div className="card1">
             {carscars.map((item => (
                <div key={item.car_Id} className='row' padding="20px" >
                  <img height="150px" width="150 px" src={item.img} />
                  <div className="container1">
                    <p>TypeCar:{item.car_type}</p>
                    <p>Model: {item.car_model}</p>
                    <p>color:{item.car_color} </p>
                    <button>Submit</button>
                    
                  </div>
                </div>
              )))
              }
            </div>
          </div>
        )
    }
}

export default Booking
