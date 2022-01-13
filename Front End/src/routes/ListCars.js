import axios from "axios";
import { Component } from "react";
import '../index.css';
import { Link } from 'react-router-dom'


export default class ListCars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cars: [],

        };

    }
    componentDidMount() {
        axios.get("api/Cars")
            .then(result => {
                const Cars = result.data;
                this.setState({ Cars });

            });
    }
    deleteListCar(id) {
        console.log("in")
        let checkLogIn = localStorage.getItem("Check")
        if (checkLogIn == "authenticatedADMIN") {

            axios.delete(`api/delete/${id}`)
                .then(res => {
                    const Cars = this.state.Cars.filter
                        (item => item.id !== id);
                    this.setState({ Cars });
                    console.log(Cars)
                })
        }
    }

    render() {

        return (
                    <div>
          <div className="card1">
           {this.state.Cars.map((item => (
              <div key={item.car_Id} className='row' padding="20px" >
                <img height="150px" width="150 px" src={item.img} />
                <div className="container1">
                  <p>TypeCar:{item.car_type}</p>
                  <p>Model: {item.car_model}</p>
                  <p>color:{item.car_color} </p>
                     <p>Owner Of Car:{item.owner.owner_firstName}{item.owner.owner_lastName}</p>
                  <button onClick={(e) => this.deleteListCar(item.id, e)}>delete</button>
                  <button>Submit</button>
                  
                </div>
              </div>
            )))
            }
          </div>
        </div>
      );
    } 
} 




//             <div className="card">
//                 <div className="recipe-card">
//                     <div className="recipe-card-image">

//                         {this.state.Cars.map((item => (

//                             <div key={item.car_Id}>
//                                 <p className="container"> </p>
//                                 <Link to="/RegisterUser">  <img className="recipe-card-image" src={item.img} /> </Link>
//                                 <h3 className="recipe-title">Model: {item.car_model}</h3>
//                                 <h3 className="recipe-title">color:{item.car_color}</h3>
//                                 <h3 className="recipe-title">TypeCar:{item.car_type}</h3>
//                                 <h3>Owner Of Car:{item.owner.owner_firstName}{item.owner.owner_lastName}</h3>
//                                 <button onClick={(e) => this.deleteListCar(item.id, e)}>delete</button>
//                                 <button>Request</button>


//                             </div>


//                         )))
//                         }


//                     </div>
//                 </div>

//             </div>

//         );

//     }
// }










