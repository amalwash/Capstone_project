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
                                <td><img src={item.img}/></td>
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

//     return (
//       <div>
//           {/* <table >
//               <thead>
//                   <tr>
//                       <th >Model</th>
//                       <th >Color</th>
//                       <th >Type</th>
//                       <th>Img</th>
//                   </tr>
//               </thead>
//               <tbody> */}
//           <Container className="Container" >
//               {this.state.Cars.map((item => (
//                   <CardGroup key={item.car_Id}>
//                       <Card className="item"  >
//                           <Card.Img height="100" width="100" src={item.img} />
//                           <Card.Body  >
//                               <Card.Title>{item.car_color}</Card.Title>
//                                 <Card.Title>{item.car_type}</Card.Title>
//                               <Card.Text>{item.car_model}</Card.Text>
//                               {/* <Card.Text><input placeholder="commits" type='text'></input>
//                               <button >send</button></Card.Text> */}
//                               <Button variant="btn btn-secondary btn-lg" onClick={(e) => this.deleteListCar(item.car_Id , e)}>delete</Button>
//                               {/* </tr> */}
//                           </Card.Body>
//                       </Card>
//                   </CardGroup>
//               )))
//               }
//               {/* </tbody>
//           </table> */}
//           </Container>
//       </div>
//   );
// }
// }
  