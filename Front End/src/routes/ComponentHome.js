// import React, { useEffect, useState } from 'react'
// import axios from "axios"



// export default function ComponentHome
// () {

//     const [data, setData] = useState([{ car_Id: "", car_model: "", img:"" , car_color: "" , car_type: "" , car_description: "" }]);




//     useEffect(() => {
        
//         axios.get("api/Cars")
//             .then(result => setData(result.data));
//         console.log(data);
       
//     }, []);

    

//     function deleteCar(car_Id , e){
//         console.log("insid deletfunction")
//         axios.delete(`api/delete/${car_Id}`)
//         // console.log("insid deletfunction")
//     }



    
//     return (
//         <div>
//             <h1> List Of Cars : </h1>
            
//             <hr />
//             {data.map(item => {
//                 return <div key={item.car_Id}>
//                     <img height="150 px" width="150 px" src={item.img}/>
//                     <h2>{item.car_model}</h2>
//                     <p>{item.car_color}</p>
//                     <h2>{item.car_type}</h2>
//                     <h2>{item.car_description}</h2>
//                     <button onClick={(e)=> deleteCar(item.car_Id , e)}>delete</button>
                  
//                     <hr/>
//                 </div>
//             })}
//         </div>
//     )

// }