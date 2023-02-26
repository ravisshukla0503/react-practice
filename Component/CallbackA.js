import React from 'react'

function CallbackA({click,age}) {
    console.log("hello callbackA for sal")
  return (
    <div>
      {age}
      <button onClick={click}>sal</button>
    </div>
  )
}

export default React.memo(CallbackA)
