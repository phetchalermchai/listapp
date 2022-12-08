import { useState } from 'react'
import Row from './row'

function table({list}) {
  return (
    <div className='table-responsive mb-5'>
      <table className='table table-bordered text-center'>
        <thead>
            <tr>
                <th>No</th>
                <th>Fist name</th>
                <th>Last name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Edit&Delete</th>
            </tr>
        </thead>
        {list && list.map((data,index)=>{
          return <Row key={index} {...data} index={index}/>
        })}
      </table>
    </div>
  )
}

export default table
