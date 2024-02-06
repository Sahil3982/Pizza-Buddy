import React from 'react'
import { Link } from 'react-router-dom'


const Mynavbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='logo'>
        <img src='/Images/pizza-buddy-logo.avif' style={{ width: 60 }} />
        <h2>Pizza Buddy</h2>
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