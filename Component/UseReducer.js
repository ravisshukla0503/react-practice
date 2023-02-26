import React, { useReducer } from 'react'
const intialstate=0;
const reducer=(state,action)=>{
    switch(action){
    case 'increment':
        return state+1
    case 'decrement':
            return state-1
    case 'reset':
                return intialstate;
                default :

    }
}

function UseReducer() {
    const [count, setcount]=useReducer(reducer,intialstate)
  return (
    <div>
        {count}
      <button onClick={()=>{setcount('increment')}}>increment</button>
      <button onClick={()=>{setcount('decrement')}}>decrement</button>
      <button onClick={()=>{setcount('reset')}}>reset</button>
    </div>
  )
}

export default UseReducer
