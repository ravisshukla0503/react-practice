import React,{useContext} from 'react'
import { Countcontext } from '../App'



function ComponentA() {
    const counter = useContext(Countcontext);
  return (
    <div>
        
      <button onClick={()=>counter.valuecount('increment')}>increment</button>
      <button onClick={()=>counter.valuecount('decrement')}>decrement</button>
      <button onClick={()=>counter.valuecount('reset')}>reset</button>

    </div>
  )
}

export default ComponentA
