import React from 'react'
import "./Cart.css"
const Mycart = (props) => {
    console.log(props);

  return (
    <>
      <div className='cat_con'>
        <div className='cat_cart'>
            <img src={props.image} alt="" />
        </div>
        <p>{props.title}</p>
      </div>
    </>
  )
}

export default Mycart
