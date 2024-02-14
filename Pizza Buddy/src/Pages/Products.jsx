import React from 'react'
import Productcart from '../Components/Main/Productcart'

const Products = () => {
  return (
    <>
          <h1>Product List</h1>
          <div className='product-list' style={{display: 'flex'}}>
          <Productcart  img="/Images/peproni.png" name="Havana Special" size="small" rupee="3$"/>
          <Productcart  img="/Images/peproni.png" name="Paneer Special" size="small" rupee="3$"/>
          <Productcart  img="/Images/peproni.png" name="Cheeken Special" size="small" rupee="3$"/>
          <Productcart  img="/Images/peproni.png" name="Capsium Special" size="small" rupee="3$"/>
          <Productcart  img="/Images/peproni.png" name="Corn Special" size="small" rupee="3$"/>
          <Productcart  img="/Images/peproni.png" name="Chess Special" size="small" rupee="3$"/>
          <Productcart  img="/Images/peproni.png" name="Our Special" size="large" rupee="5$"/>
          <Productcart  img="/Images/peproni.png" name="Egg Special" size="large" rupee="5$"/>
          <Productcart  img="/Images/peproni.png" name="Noddle Special" size="large" rupee="5$"/>
          </div>
         

    </>


  )
}

export default Products
