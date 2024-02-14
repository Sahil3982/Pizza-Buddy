import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <>
      <main className='main-home-page'>
        <div>
           
           <i className='are-you-hungry'>Are you hungry?</i>
  
          <h1 className='dont-wait'>Don't Wait !</h1>
          <button className='order-btn'>Order Now</button>

        </div>
        <div>
            <img src='/Images/pizza.png' />
        </div>
      </main>
      <Products />
    </>
  )
}

export default Home