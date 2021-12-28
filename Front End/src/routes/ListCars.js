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
               {/* <img className='imgg' src="ajar.jpg" alt="Girl in a jacket" width="1100" height="600"/> 
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="Home">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       
        <a class="nav-link" href="RegisterOwner">RegisterOwner</a>
        <a class="nav-link" href="RegisterCar">RegisterCar</a>
        <a class="nav-link" href="ListCars">ListCars</a>
        <a class="nav-link" href="RegisterUser">RegisterUser</a>
       
        
     </div>
    </div>
  </div>
</nav> */}
            
              <table >
                <tbody>
                  {this.state.Cars.map((item => (
                                <tr key={item.car_Id}>
                                <td>{item.car_model}</td>
                                <td>{item.car_color}</td>
                                <td>{item.car_type}</td>
                                <td><img height="150 px" width="150 px" src={item.img}/></td>
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
