import React,{useState} from 'react'


function ParentComp({children}) {
    const [count,setcount]=useState(0)
    console.log("parent")
  return (
  
    <div>
      <button onClick={()=>setcount(count+1)}>button -{count}</button>
      {children}
    </div>
  )
}

export default ParentComp
