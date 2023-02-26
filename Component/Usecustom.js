import React  from 'react'
import Usecustomcounter from './Component/Usecustomcounter'

function Usecustom() {
    const [count , increment, decrement, reset]=Usecustomcounter();
  return (
    <div>
        {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Usecustom
