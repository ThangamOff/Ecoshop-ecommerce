import React from 'react'
import './Addcart.css'
import addimg from '../../Assets/Images/fruit.jpg'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Addcart = () => {
    const [first, setfirst] = useState(1)
    const [amount, setamount] = useState(10)

function incress(params) {
    setfirst((states)=>{

    let data=states+1
    setamount(data*10)
    return data
    })
}
console.log(amount);
console.log(first);

function decress(params) {
if (first>1) {
    setfirst((states)=>{

    let data=states-1
    setamount(data*10)
    return data
    })
}  
}
  return (
    <>
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
                        <button onClick={incress}>+</button>
                        <p>{first}</p>
                        <button onClick={decress}>-</button>
                    </div>
                </div>
                <div className='add_add'>
                    <p>${amount}.00</p>
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
