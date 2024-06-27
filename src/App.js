import React from 'react'
import Admin from './Admin'
import { Routes, Route , useNavigate} from "react-router-dom"
import Home from './Home'

const App = () => {
    const navigate = useNavigate()
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="Admin" element={<Admin />} />
    </Routes>
  )
}

export default App
