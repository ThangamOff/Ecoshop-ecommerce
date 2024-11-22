import React from 'react'
import './Viewproduct.css'
import tomato from "../../Assets/Images/tomato.jpg"

const Viewproduct = () => {
  return (
    <>
    <div className='View_con'>
        <div className='view_img'>
            <div>
                <img src={tomato} alt="" />
            </div>
            <div className='view_btn'>
                <button>ADD TO CART</button>
                <button>ADD</button>
            </div>
        </div>
        <div className='view_img_details'>
            <h1>Fruits</h1>
        </div>
    </div>   
    </>
  )
}

export default Viewproduct
