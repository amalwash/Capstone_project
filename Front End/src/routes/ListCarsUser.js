import axios from "axios";
import { Component } from "react";
import '../index.css';
import {Link} from 'react-router-dom'


export default class ListCarsUser extends Component {
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
    // deleteListCar(car_Id) {
    //     axios.delete(`api/delete/${car_Id}`)
    //         .then(res => {
    //             const Cars = this.state.Cars.filter
    //                 (item => item.car_Id !== car_Id);
    //             this.setState({ Cars });
    //         })
    // }

    render() {

        return (


            <div  >
                <div className="recipe-card">
                    <div className="recipe-card-image">

                        {this.state.Cars.map((item => (

                            <div key={item.car_Id}>
                                <p className="recipe-card-content"> </p>
                                <Link to="/RegisterUser">  <img className="recipe-card-image" src={item.img} /> </Link>
                                <h3 className="recipe-title">Model: {item.car_model}</h3>
                                <h3 className="recipe-title">color:{item.car_color}</h3>
                                <h3 className="recipe-title">TypeCar:{item.car_type}</h3>
                                <h3>Owner Of Car:{item.owner.owner_firstName}{item.owner.owner_lastName}</h3>
                                <button>Request</button>
                                {/* <Link to={`/DetailsCar/${item.car_Id}`}> */}

                            </div>


                        )))
                        }



                    </div>
                </div>

            </div>

        );

    }
}

