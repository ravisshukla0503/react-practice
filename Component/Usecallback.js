//usecallback is used return a memoized function and prevent from unnecessary recration of function
//which means if you have function which you pass as a prop to the child component
//so every time when the component rerender the child component also rerender because react thinks that function before and
// and after the rerender it recreated and so it will also rerender the child component and that's is also called as refrential equality.


// usememo same as usecallback but in this it will return a memoized value and improve performance by stop unnnecessary function recreation stop delay time
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
