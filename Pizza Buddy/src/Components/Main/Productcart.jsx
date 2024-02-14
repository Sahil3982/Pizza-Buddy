import React from 'react'

const Productcart = (props) => {
    return (
        < >
                <section className='product-cart'>
                    <section className='img-section'>
                        <div className='item-img'> <img src={props.img} /></div>
                        <div> <strong>{props.name} </strong></div>
                        <div> {props.size}</div>
                        <section className='price-btn'>
                            <div> {props.rupee}</div>
                            <div><button className='order-btn'>ADD</button></div>

                        </section>

                    </section>

            </section>


        </>

    )
}

export default Productcart