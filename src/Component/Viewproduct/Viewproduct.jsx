import React from 'react'
import './Viewproduct.css'
import Track from '../Track/Track'
import Top from '../Top/Top'
import Navbar from '../Navbar/Navbar'
import tomato from "../../Assets/Images/tomato.jpg"

const Viewproduct = () => {
  return (
    <>
    <Track/>
    <Top/>
    <Navbar/>
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
            <p>aaaaaa</p>
        </div>
    </div>   
    </>
  )
}

export default Viewproduct
