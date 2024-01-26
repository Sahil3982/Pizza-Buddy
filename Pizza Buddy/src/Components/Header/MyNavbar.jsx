import React from 'react'
import { Link } from 'react-router-dom'
const Mynavbar = () => {
  return (
    <div> 
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contactus">Contactus</Link>
    </div>
  )
}

export default Mynavbar