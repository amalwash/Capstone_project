import axios from "axios";
import { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card'
// import 'bootstrap/dist/css/bootstrap.css';
// import Button from 'react-bootstrap/Button';


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
    deleteListCar(car_Id) {
        axios.delete(`api/delete/${car_Id}`)
            .then(res => {
                const Cars = this.state.Cars.filter
                    (item => item.car_Id !== car_Id);
                this.setState({ Cars });
            })
    }

    render() {

        return (


            <div >
                <table >
                    <tbody>
                        {this.state.Cars.map((item => (
                            <tr key={item.car_Id}>
                                <td class="list-group-item">Model: {item.car_model}</td>
                                <td class="list-group-item">color:{item.car_color}</td>
                                <td class="list-group-item">TypeCar:{item.car_type}</td>
                                <td>{item.owner.owner_firstName}</td>
                                <td><button onClick={(e) => this.deleteListCar(item.car_Id, e)}>delete</button></td>
                                <td ><img src={item.img} /></td>
                                
                            </tr>
                        )))
                        }
                    </tbody>
                </table>


            </div>    );
    }
}

                {/* 


//             <div >
//                 <table >
//                     <tbody>
//                         {this.state.Cars.map((item => (
//                             <tr key={item.car_Id}>

//                                 <div class="card" style="width: 18rem;">

//                                     <td><img src={item.img} /></td>
//                                     <th class="list-group list-group-flush">
//                                         <td class="list-group-item">{item.car_model}</td>
//                                         <td class="list-group-item">{item.car_color}</td>
//                                         <td class="list-group-item">{item.car_type}</td>
//                                     </th>
//                                 </div>
//                                 </tr>
//                         )))
//     }
//     </tbody>
//     </table>
//     </div>
//         );
// }
// }

                      

                                 <div >
                <table >
                    <tbody>
                        {this.state.Cars.map((item => (
                            <tr key={item.car_Id}>
                                <td class="list-group-item">{item.car_model}</td>
                                <td class="list-group-item">{item.car_color}</td>
                                <td class="list-group-item">{item.car_type}</td>
                                <td><img src={item.img} /></td>
                                <td>{item.owner.owner_firstName}</td>
                                <td><button onClick={(e) => this.deleteListCar(item.car_Id, e)}>delete</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
            

                                );
    }
}

                                <Card style={{ width: '18rem' }}>
{this.state.Cars.map((item => (
  <Card.Img variant="top"src={item.img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{item.car_type}</ListGroupItem>
    <ListGroupItem>{item.car_model}</ListGroupItem>
    <ListGroupItem>{item.car_color}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card> 

 */}




