import React from 'react'
import Context from './Context';
import {useContext } from "react";
import { useState} from 'react';


function Formupdate() {
  // useContext
  const {dataId,setDataID} = useContext(Context)

  // state DataForm
  const [valuefname,setValuefname] = useState(dataId.fname)
  const [valuelname,setValuelname] = useState(dataId.lname)
  const [valuephone,setValuephone] = useState(dataId.phone)
  const [valueemail,setValueemail] = useState(dataId.email)

  const UpdateForm = (e)=>{
    e.preventDefault()
    const jsonDataupdate = {
    fname : valuefname,
    lname : valuelname,
    phone : valuephone,
    email : valueemail,
    id:dataId.id}

    fetch('http://localhost:3333/update', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(jsonDataupdate),}).then((response) => response.json()).then((data) => {console.log('Success:', data);})
      .catch((error) => {console.error('Error:', error);});
      setDataID({id:"",isedit:false})
      } 

  return (
    <form className="row g-3 my-5" onSubmit={UpdateForm}>
      <div className="text-center"><h1>Edit List</h1></div>
      <div className="col-md-4">
        <label className="form-label">
          First name
        </label>
        <input
          value={valuefname}
          onChange={(e)=>setValuefname(e.target.value)}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">
          Last name
        </label>
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
            type="tel"
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
        <button className="btn btn-success" type="submit">
          Edit
        </button>
      </div>
    </form>
  )
}
export default Formupdate
