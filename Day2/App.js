import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function App() {
    
  const [Myowner, setMyowner] = useState({owner_id:"",firstName:"",email:"",address:"",age:""})


 useEffect(()=>{
   axios.get("/api/owner")
    .then(response=>{
      console.log(response.data)
      setMyowner(response.data[1])
   })
   return()=>{}
 },[])

 function handleClick(){
  axios({
    method:'post',
    url:'api/owner/add',
    data:{
      owner_id:3,
      firstName:"Asma",
      email:"Asma@jouf.com",
      address:"skaka"
    }
  });
}
function handleDelete(){
  axios({
    method:'delete',
    url:"/api/owner/delete/0"
  })
  }


  return (
    <div>
            <br></br>
      <br></br>
      <h2>my Owner details are:  {JSON.stringify(Myowner)}</h2>
      <button onClick={handleClick}>Post to Spring</button>
      <button onClick={handleDelete}>delete to Spring</button>
    </div>
  )
  }
