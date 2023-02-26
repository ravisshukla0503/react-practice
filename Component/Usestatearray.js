import React, { useState } from 'react'

function Usestatearray() {
    const [item,setitem]=useState([2,5]);
    const additem=()=>{
         setitem([...item,{
            id: item.length,
            value: Math.floor(Math.random()*10)+1
         }])
    }
  return (
    <div>
        <button onClick={additem}>button={item.value}</button>
      <ul>
        {item.map(
            items=>
                <li key={items.id}>{items.value}</li>
            
        )}
      </ul>
    </div>
  )
}

export default Usestatearray

