// import {NavLink, Outlet, useSearchParams } from "react-router-dom";
// //   import { getdetilsSCars } from "../data";
 
//   export default function  DetilsSCars() {
//     let detilsSCars = getdetilsSCars();
//     let [searchParams, setSearchParams] = useSearchParams();
  
//     return (
//       <div style={{ display: "flex" }}>
//         <nav
//           style={{
//             borderRight: "solid 1px",
//             padding: "1rem"
//           }}
//         >
//           <input
//             value={searchParams.get("filter") || ""}
//             onChange={event => {
//               let filter = event.target.value;
//               if (filter) {
//                 setSearchParams({ filter });
//               } else {
//                 setSearchParams({});
//               }
//             }}
//           />
//           {detilsSCars
//             .filter(detilsCars => {
//               let filter = searchParams.get("filter");
//               if (!filter) return true;
//               let name = detilsCars.name.toLowerCase();
//               return name.startsWith(filter.toLowerCase());
//             })
//             .map(detilsCars => (
//               <NavLink
//                 style={({ isActive }) => ({
//                   display: "block",
//                   margin: "1rem 0",
//                   color: isActive ? "red" : ""
//                 })}
//                 to={`/detilsSCars/${detilsCars.number}`}
//                 key={detilsCars.number}
//               >
//                 {detilsCars.name}
//               </NavLink>
//             ))}
//         </nav>
//               </div>
//     );
//   }