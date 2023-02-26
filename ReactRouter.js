import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import NoRouteFound from './NoRouteFound'
function ReactRouter() {
    
  return (
   
    <div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NoRouteFound />}></Route>
      </Routes>
    </div>
  )
}

export default ReactRouter
