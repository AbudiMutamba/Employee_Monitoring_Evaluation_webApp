import React from 'react'
import Login from '../views/login'
import Nav from '../views/nav'

import { 
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

export default function myRouter() {
  return (
   <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/nav" element={<Nav/>} />
        </Routes>
   </Router>
    
  )
}
