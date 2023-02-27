//it is similar to lifecylcle methods like component did mount did update and unmount
// we can do all this thing by using useffect

import React,{useState,useEffect} from 'react'

function Useeffect() {
    const [count,setCount]=useState(0);
    const tick=()=>{
      setCount(count+1)
    }
    useEffect(()=>{
      const interval=setInterval(tick,1000)
      return ()=>{
        clearInterval(interval);
      }
    },[]);

  return (
    <div>
      <button>{count}</button>
     
    </div>
  )
}

export default Useeffect
