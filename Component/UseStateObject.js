import React, { useState } from 'react'

function UseStateObject() {
    const [name,setName]=useState({firstname: 'ravi', lastname: 'shukla'});

  return (
    <div>
        <input type='text' value={name.firstname} onChange={(e)=>{
            setName({...name,firstname : e.target.value})
        }}/>
         <input type='text' value={name.lastname} onChange={(e)=>{
            setName({...name,lastname : e.target.value})
        }}/>
        <h1>firstname : {name.firstname}</h1>
        <h1>lastname : {name.lastname}</h1>
    </div>
  )
}

export default UseStateObject
