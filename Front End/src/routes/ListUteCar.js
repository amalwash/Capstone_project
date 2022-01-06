import axios from "axios";
import { Component } from "react";
import {Link} from 'react-router-dom'

export default class ListUteCar extends Component {
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
        const myCars = this.state.Cars.filter(item => item.car_type == 'Ute' );
        
        return (
          <div  >
          <div className="recipe-card">
              <div className="recipe-card-image">

              {myCars.map((item => (

                      <div key={item.car_Id}>
                          <p className="recipe-card-content"> </p>
                          <img className="recipe-card-image" src={item.img} />
                          <h3 className="recipe-title">Model: {item.car_model}</h3>
                          <h3 className="recipe-title">color:{item.car_color}</h3>
                          <h3 className="recipe-title">TypeCar:{item.car_type}</h3>
                          <h3>Owner Of Car:{item.owner.owner_firstName}{item.owner.owner_lastName}</h3>
                          <button onClick={(e) => this.deleteListCar(item.car_Id, e)}>delete</button>
                          <Link to="/RegisterUser">  <button>Request</button></Link>


                      </div>
  

                  )))
                  
                  }

</div>
   </div>


      </div>

  );

}
}

    //       <div>
    //           <table >
    //             <tbody>
    //               {myCars.map((item => (
                      
    //                             <tr key={item.car_Id}>
    //                             <td>{item.car_model}</td>
    //                             <td>{item.car_color}</td>
    //                             <td>{item.car_type}</td>
    //                             <td><img src={item.img}/></td>
    //                             <td>{item.owner.owner_firstName}</td>
    //                             <td>{item.owner.owner_lasttName}</td>
                                
    //                 </tr>
    //                 )))
    //             }
    //             </tbody>
    //           </table>
    //         </div>
    //     );
    //   }
    // }