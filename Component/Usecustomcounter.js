

import {useState} from 'react'

function Usecustomcounter() {
  const [count,setcount]=useState(0);
  const increment=()=>{
    setcount(prevcount=>prevcount+1)
  }
  const decrement=()=>{
    setcount(prevcount=>prevcount-1)
  }
  const reset=()=>{
    setcount(0)
  }
  return [count,increment,decrement, reset];
}

export default Usecustomcounter
