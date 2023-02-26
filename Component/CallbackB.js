import React from 'react'

function CallbackB({click,salary}) {
    console.log("hello callbackB for age")
  return (
    <div>
      {salary}
      <button onClick={click}>age</button>
    </div>
  )
}

export default React.memo(CallbackB)
