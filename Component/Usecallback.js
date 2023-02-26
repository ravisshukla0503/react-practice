import React ,{useCallback, useState} from 'react'
import CallbackA from './CallbackA';
import CallbackB from './CallbackB';

function UseCallback() {
    const [age,setage]=useState(0);
    const [salary,setsalary]=useState(50000);
    const incrementage=useCallback(()=>{
        setage(age+1);
    },[age])
    const incrementsalary=useCallback(()=>{
        setsalary(salary+1000);
    },[salary])
  return (
    <div>
        
      <CallbackA click={incrementage} age={age}/>
      
      <CallbackB click={incrementsalary} salary={salary}/>
    </div>
  )
}

export default UseCallback
