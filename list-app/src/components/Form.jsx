import React from "react";
import { useState } from "react";

function Form() {
  const [valuefname,setValuefname] = useState("")
  const [valuelname,setValuelname] = useState("")
  const [valuephone,setValuephone] = useState("")
  const [valueemail,setValueemail] = useState("")

  const SubmitData = (e)=>{
    e.preventDefault()
    const jsonData = {
      fname : valuefname,
      lname : valuelname,
      phone : valuephone,
      email : valueemail
    }

    fetch('http://localhost:3333/insert',{
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(jsonData),}).then((response) => {response.json()})
      .catch((error) => {console.error('Error:', error);});
      setValuefname("")
      setValuelname("")
      setValuephone("")
      setValueemail("")
  }

  return (
    <form className="row g-3 my-5" onSubmit={SubmitData}>
      <div className="text-center"><h1>Create List</h1></div>
      <div className="col-md-4">
        <label className="form-label">First name</label>
        <input
          value={valuefname}
          onChange={(e)=>setValuefname(e.target.value)}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Last name</label>
        <input
          value={valuelname}
          onChange={(e)=>setValuelname(e.target.value)}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Phone</label>
        <div className="input-group has-validation">
          <input
            value={valuephone}
            onChange={(e)=>setValuephone(e.target.value)}
            type="text"
            className="form-control"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="xxx-xxx-xxxx"
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input
          value={valueemail}
          onChange={(e)=>setValueemail(e.target.value)}
          type="email"
          className="form-control"
          required
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <div className="col-12">
          <button className="btn btn-primary" type="submit"> Submit</button>
      </div>
    </form>
  );
}
export default Form;
