import React from 'react'
import {useContext } from 'react';
import Context from './Context';
import { FaUserEdit,FaTrashAlt } from "react-icons/fa";

function row({fname,lname,phone,email,index,id}) {
  const {dataId,setDataID} = useContext(Context)
  
  const DeleteData = ()=>{
    const jsonID = {
      id:id
    }
    console.log(jsonID);
    fetch('http://localhost:3333/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonID),
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const editItem = ()=>{
    setDataID({
      id,
      fname,
      lname,
      phone,
      email,
      isedit:true
    })
    }

  return (
    <tbody>
      <tr>
        <td>{index+1}</td>
        <td>{fname}</td>
        <td>{lname}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td className='d-flex justify-content-center align-items-center'>
          <button onClick={editItem} className="btn btn-outline-success me-3 d-flex justify-content-center align-items-center"><FaUserEdit/>Edit</button>
          <button onClick={DeleteData} className="btn btn-outline-danger d-flex justify-content-center align-items-center"><FaTrashAlt/>Delete</button>
        </td>
      </tr>
    </tbody>
  )
}

export default row
