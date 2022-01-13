import React, { useState } from "react";
import { useParams } from "react-router";
import { getPatients } from "../data";




function Triage() {
  let params = useParams();
  let patient = JSON.parse(localStorage.getItem("Patients"))
  let Thepatients = getPatient(Number(params.NationalId));



  let [note, setNote] = useState("");
  let [displayBorder, setDisplayBorder] = useState(false)
  let [haartRate, setHaartRate] = useState("");
  let [Wedith, setWedith] = useState("");
  let [Category, setCategory] = useState("");
  let [BloodPresure, setBloodPresure] = useState("");





  
  function handleHaartRate(event) {setHaartRate(haartRate = event.target.value);}
  function handleWedith(event) {setWedith(Wedith = event.target.value);}
  function handleBloodPresure(event){setBloodPresure(BloodPresure = event.target.value);}
  function handleNote(event) {setNote(note = event.target.value);}



 



  function handleSubmit(event) {
    event.preventDefault();
    Thepatients.BloodPresure = BloodPresure;
    Thepatients.Wedith = Wedith;
    Thepatients.Category = Category;
    let NewArray = JSON.parse(localStorage.getItem("Arrays"))
    NewArray.push(Thepatients)
    localStorage.setItem("Arrays", JSON.stringify(NewArray))



  }

  function getPatient(NationalId) {
    return patient.find(
      Pat => Pat.NationalId === NationalId
    );
  }
  return (
     <main style={{ }}>
     


     <div>
        <center>  <h1><i> ► REGISTRATION </i> </h1> </center>
        <hr />
        <label> FIRST NAME </label>
        <input type ="text" name="firstName" value={Thepatients.firstName} size="10" /><br/> <hr />


        <label> LAST NAME: </label>
        <input type ="text" name="lastName" value={Thepatients.lastName} size="10" /><br/> <hr />

        
        <label> AGE:  </label>
        <input type ="text" name="age" value={Thepatients.age} /><hr />


        <label for="NationalId"> ID :</label>
        <input type ="text" value={Thepatients.NationalId} name="NationalId" /><br/> <hr />

        <button type ="submit" onClick={()=>setDisplayBorder(!displayBorder)} >Confirm { displayBorder ?"Hide":"Show"} </button>
        




        <hr/>  
        {displayBorder &&
        <div >
        <label> WEDITH </label>
        <input type ="text" onChange={handleWedith} name="wedith" placeholder="Wedith" size="10" /> <br/> <hr />

        <label>  HEART </label>
        <input type ="text" onChange={handleHaartRate} name="haartRate" placeholder=" HEART " size="10" /> <br/> <hr />

        <label> BLOOD ORESURE: </label>
        <input type ="text" onChange={handleBloodPresure} name="BloodPresure" placeholder="Blood-Presure" size="10" /> <br/> <hr />




        <label>
        <b><u> CATEGORY:</u></b> 
        </label><br /> <hr /> 
        <input type ="radio" onChange={ ()=> setCategory ('Critical')} name="Critical" /> Critical <br /> <hr />
        <input type ="radio" onChange={ ()=> setCategory ('Emergency')} name="Emergency" /> Emergency <br /> <hr />
        <input type ="radio" onChange={ ()=> setCategory ('Urgent')}name="Urgent" /> Urgent <br /> <hr />
        <input type ="radio" onChange={ ()=> setCategory ('SemiUrgent')} name="SemiUrgent" /> Semi-Urgent  <br/> <hr />
        <textarea name="note"  placeholder="Note ✎" onChange={handleNote}   ></textarea> <br/> <hr />
        <button type ="submit" onClick={handleSubmit} >Submit ✓</button> <br/> 
       
      </div>}
      </div>
    
    </main>

   
  );
}
export default Triage
            /* <div>
          <div className="card">
           {this.state.Cars.map((item => (
              <div key={item.car_Id} className='row' padding="20px" >
                <img height="150px" width="150 px" src={item.img} />
                <div className="container">
                  <h2>TypeCar:{item.car_type}</h2>
                  <p>Model: {item.car_model}</p>
                  <p>color:{item.car_color} </p>
                     <h3>Owner Of Car:{item.owner.owner_firstName}{item.owner.owner_lastName}</h3>
                  <button onClick={(e) => this.deleteListCar(item.id, e)}>delete</button>
                  
                </div>
              </div>
            )))
            }
          </div>
        </div>
      );
    } 
} */