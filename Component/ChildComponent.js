import React from 'react'

function ChildComponent(prop) {
    console.log("child")
  return (
    <div>
      
    </div>
  )
}

export default React.memo(ChildComponent)
