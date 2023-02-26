import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutPage() {
    const nevigate=useNavigate()
  return (
    <div>
      AboutPage
      <button onClick={()=>nevigate('home',{replace :true})}>Home</button>
    </div>
  )
}

export default AboutPage
