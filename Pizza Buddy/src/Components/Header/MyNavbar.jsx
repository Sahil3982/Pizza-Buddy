import React from 'react'
import { Link } from 'react-router-dom'


const Mynavbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='logo'>
        <img src='/Images/logo.png' style={{ width: 60 }} />
      </Link>
      <Link to="/pizzabuddy">
        Pizza-Buddy
      </Link>


      <div className='rightnav'>

        <Link to="/">Home</Link>
        <Link to="/products" > Products</Link>
        <Link to="/cart" className='cart'>  
            <span>10</span>
            <img src='/Images/cart.png' className='cartimg' style={{ width: 20 }} />
        
        </Link>
      </div>

    </div>
  )
}

export default Mynavbar