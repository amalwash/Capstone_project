import axios from "axios";
import { Component } from "react";


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
    deleteListCar(car_Id){
        axios.delete(`api/delete/${car_Id}`)
        .then(res =>{
            const Cars = this.state.Cars.filter
            (item => item.car_Id !== car_Id );
            this.setState({Cars});
        })
    }
    render() {
        return (
          <div>
              <table >
                <tbody>
                  {this.state.Cars.map((item => (
                                <tr key={item.car_Id}>
                                <td>{item.car_model}</td>
                                <td>{item.car_color}</td>
                                <td>{item.car_type}</td>
                                <td><img height="150 px" width="150 px" src={item.img}/></td>
                                <td>{item.owner.owner_firstName}</td>
                                <td>{item.owner.owner_lasttName}</td>
                                <td><button onClick={(e) => this.deleteListCar(item.car_Id , e)}>delete</button></td>
                    </tr>
                  )))
                }
                </tbody>
              </table>
            </div>
        );
      }
    }
