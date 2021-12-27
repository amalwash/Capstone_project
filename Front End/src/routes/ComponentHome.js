import React, { useEffect, useState } from 'react'
import axios from "axios"



export default function ComponentHome
() {

    const [data, setData] = useState([{ car_Id: "", car_model: "", img:"" , car_color: "" , car_type: "" , car_description: "" }]);




    useEffect(() => {
        
        axios.get("api/Cars")
            .then(result => setData(result.data));
        console.log(data);
       
    }, []);

    const deleteProposal = (data) => {
        console.log('delete Car');
        return axios.delete(`delete/${data.carId}`);
      };



    
    return (
        <div>
            <h1> List Of Cars : </h1>
            
            <hr />
            {data.map(item => {
                return <div key={item.car_Id}>
                    <img height="150 px" width="150 px" src={item.img}/>
                    <h2>{item.car_model}</h2>
                    <p>{item.car_color}</p>
                    <h2>{item.car_type}</h2>
                    <h2>{item.car_description}</h2>
                    <button onClick={deleteProposal}>delete</button>
                  
                    <hr/>
                </div>
            })}
        </div>
    )

}