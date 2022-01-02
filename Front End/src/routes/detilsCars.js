import axios from "axios";
import { Component } from "react";


export default class detilsCars extends Component {
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
  
    render() {
        const myCars = this.state.Cars.filter(item => item.car_type == 'van' );
        
        return (
          <div>
              <table >
                <tbody>
                  {myCars.map((item => (
                      
                                <tr key={item.car_Id}>
                                <td>{item.car_model}</td>
                                <td>{item.car_color}</td>
                                <td>{item.car_type}</td>
                                <td><img src={item.img}/></td>
                                <td>{item.owner.owner_firstName}</td>
                               
                                
                    </tr>
                    )))
                }
                </tbody>
              </table>
            </div>
        );
      }
    }