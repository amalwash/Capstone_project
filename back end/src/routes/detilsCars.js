// import { useParams } from "react-router-dom";
//  import { getdetilsCars } from "../data";

// export default function DetilsCars (){
//   let params = useParams();
//   let detilsCars = getdetilsCars(parseInt(params.detilsCarsId, 10));
//   return (
//     <div>
//         <table >
//             <tbody>
//                 {this.state.Cars.map((item => (
//                     <tr key={item.car_Id}>
//                         <td>Model:{item.car_model}</td>
//                         <td>Color:{item.car_color}</td>
//                         <td>Type{item.car_type}</td>
//                         <td><img src={item.img} /></td>
//                         <td>{item.owner.owner_firstName}</td>
//                         <td><button onClick={(e) => this.deleteListCar(item.car_Id, e)}>delete</button></td>
//                     </tr>
//                 )))
//                 }
//             </tbody>
//         </table>
//     </div>

// );
// }
