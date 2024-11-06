import React from 'react'
import "./Cart.css"
import cat from "../Assets/Images/cat.jpg"
const Cart = () => {
  return (
    <>
      <div className='cat_con'>
        <div className='cat_cart'>
            <img src={cat} alt="" />
        </div>
        <p>Fruits</p>
      </div>
    </>
  )
}

export default Cart
