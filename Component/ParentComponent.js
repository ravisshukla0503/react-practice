import React,{useState,useCallback} from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [count,setcount] =useState(0);
    const [name,setname] =useState('')
    
   const a= useCallback((e)=>{
        setname(e.target.value)
    },[name])
    console.log("Parent")
  return (
    <div>
        <input type='text' value={a}></input>
        <button onClick={()=>setcount(count+1)}>count-{count}</button>
      <ChildComponent value={name} />
    </div>
  )
}

export default ParentComponent
