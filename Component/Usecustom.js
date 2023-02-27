// usecustom hook created when you have component logic which is used by multiple components
//ex fetch data we use in useffect( this is a common logic used in every component)
// So, we don't make useeffect fetching fun in every component we simple make usecustom hook where we write the logic for fer fething data

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
