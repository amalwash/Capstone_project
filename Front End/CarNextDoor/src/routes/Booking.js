import { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import '../card.css';


export class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cars: [],
            carscars: [],
        };

    }

    componentDidMount() {
        let myCarDisplay = sessionStorage.getItem("carId")
        console.log(myCarDisplay)
        axios.get(`car/${myCarDisplay}`)
            .then(result => {
                this.setState({ Cars: result.data });

            });

    }
    post = () => {
        let myCarDisplay = sessionStorage.getItem("carId")
        let foreignCar={id: myCarDisplay}
        let myData = {car: foreignCar }

        axios({
            method: "post",
            url: "booking/add",
            data: myData
        })
        

    }

    render() {
        console.log(this.state.Cars)
        let carscars = []
        carscars.push(this.state.Cars)
        console.log(carscars)


        return (
            <section id="portfolio" class="bg-light-gray">
                <h1 className="card__title">Thank you, your order is done, go get the car</h1>
                <ul class="cards">
                    <li class="cards__item">
                        <div class="cardd">
                            {carscars.map((item => (
                                <div  key={item.id}  >
                                    <img className="card__image" src={item.img} />
                                    <div className="card__content">
                                    <p id="demotext1">TypeCar:{item.car_type}</p>
                                        <p id="demotext1">Model: {item.car_model}</p>
                                        <p id="demotext1">color:{item.car_color} </p>
                                        <p id="demotext1">description:{item.car_description} </p>
                                        {/* <p id="demotext1">Owner Of Car:{item.car.owner.owner_firstName}{item.car.owner.owner_lastName}</p> */}
                                   <Link to="/Review"> <button onClick={this.post}>Review</button></Link> 
                                    </div>
                                </div>

                            )))
                            }
                        </div>
                        
                    </li>
                    </ul>
            </section>
        );
    }
}


export default Booking
