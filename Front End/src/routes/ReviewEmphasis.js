import axios from "axios";
import { Component } from "react";
import '../index.css';
import {Link} from 'react-router-dom'


export default class ReviewEmphasis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ReviewEmphasis: [],

        };

    }
    componentDidMount() {
        axios.get("review")
            .then(result => {
                const ReviewEmphasis = result.data;
                this.setState({ ReviewEmphasis });

            });
    }
    deleteListCar(id) {
        axios.delete(`api/delete/${id}`)
            .then(res => {
                const ReviewEmphasis = this.state.ReviewEmphasis.filter
                    (item => item.id !== id);
                this.setState({ ReviewEmphasis });
            })
    }

    render() {

        return (


            <div  >
                <div className="recipe-card">
                    <div className="recipe-card-image">

                        {this.state.ReviewEmphasis.map((item => (

                            <div key={item.id}>
                                <p className="recipe-card-content"> </p>
                                <h3 className="recipe-title">details: {item.review_details}</h3>
                                <h3 className="recipe-title">Date:{item.review_Date}</h3>
                                <h3>Car Owner Name: {item.booking.car.owner.owner_firstName} {item.booking.car.owner.owner_lastName}</h3>
                                <img src={item.booking.car.img}></img>
                                {/* <h3>booking:{item.booking.id}</h3> */}
                                <button onClick={(e) => this.deleteListCar(item.id, e)}>confirm Return</button>
                                <button>Request</button>
                              

                            </div>


                        )))
                        }



                    </div>
                </div>

            </div>

        );

    }
}