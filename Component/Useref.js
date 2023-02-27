import React,{useState,useRef, useEffect} from 'react'

function Useref() {
  const [type, setType ] = useState("");
  //const [count, setcount] = useState(0); //if we use usestate count then it will update the value of count and then again rerender the component and useeffect again run and this way it will go to infinite time run

  /*const count = useRef(0); // it store mutaalble value and cannot rerender the component
    useEffect(() => {

      count.current = count.current + 1; // useref returns an obj current
    });**/
// also store previous value

  const inputelement = useRef("");
  const styletype = ()=>{
    inputelement.current.style.backgroundColor= "green"; // directly manipulate the dom manipulation.
  }

  return (

    <div>
      <input type="text" ref={inputelement} value={type} onChange={(e)=>{setType(e.target.value)}} />
       <button onClick={styletype}>Submit</button>
    </div>
  )
}

export default Useref;
