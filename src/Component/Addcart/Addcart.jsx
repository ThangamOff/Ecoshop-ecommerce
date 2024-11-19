import React from 'react'
import './Addcart.css'
import addimg from '../../Assets/Images/fruit.jpg'
import { IoClose } from "react-icons/io5";
import Track from '../Track/Track';
import Top from '../Top/Top';
import Navbar from '../Navbar/Navbar';
const Addcart = () => {
  return (
    <>
    <Track/>
    <Top/>
    <Navbar/>
    <div className='add_con'>
        <div className='detail_img'>
            <div className='detail_title'>
                <p>Home/Contact</p>
                <h2>Cart</h2>
            </div>
        </div>
        <div className='add_cart'>
            <div className='add_title'>
                <p>PRODUCT</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
                <p>ACTION</p>
            </div>
            <div className='add_part'>
                <div className='add_add'>
                    <img src={addimg} alt="" />
                    <p>Fresh Red Tomatoos</p>
                </div>
               <div className='add_add'>
                    <p>$10.00</p>
                </div>
                <div className='add_blus'>
                    <div className='add_btn'>
                        <button>+</button>
                        <p>01</p>
                        <button>-</button>
                    </div>
                </div>
                <div className='add_add'>
                    <p>$10.00</p>
                </div>
                <div className='add_add'>
                    <p><IoClose /></p>
                </div>
            </div>
        </div>
        <div className='add_button'>
            <button>Clear Cart</button>
            <button>Update Cart</button>
            <button>Proceed to Checkout</button>
        </div>
    </div>
    </>
  )
}

export default Addcart
