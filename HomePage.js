import React from 'react'
import {useNavigate} from 'react-router-dom'

function HomePage() {
    const nevigate=useNavigate();
  return (
    <div>
      HomePage
      <button onClick={()=>nevigate('about')}>About</button>
    </div>
  )
}

export default HomePage
