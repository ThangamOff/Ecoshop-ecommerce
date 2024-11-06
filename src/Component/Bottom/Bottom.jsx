import React from 'react'
import "./Bottom.css"
import { LiaLuggageCartSolid } from "react-icons/lia";
import { GrRefresh } from "react-icons/gr";
import { GrShieldSecurity } from "react-icons/gr";
import { BsTrophy } from "react-icons/bs";
const Bottom = () => {
  return (
    <>
      <div className='bottom_con'>
        <div className='bot'>
            <div className='bot_box'>
                <LiaLuggageCartSolid className='bot_icons' />
                <div  className='bot_content'>
                    <h4>Free Shipping</h4>
                    <p>When ordering over $100</p>
                </div>
            </div>
            <div className='bot_box'>
                <GrRefresh className='bot_icons' />
                <div  className='bot_content'>
                    <h4>Free Return</h4>
                    <p>Get Return within 30 days</p>
                </div>
            </div>
            <div className='bot_box'>
                <GrShieldSecurity className='bot_icons' />
                <div  className='bot_content'>
                    <h4>Secure Payment</h4>
                    <p>100% Secure Online Payment</p>
                </div>
            </div>
            <div className='bot_box'>
                <BsTrophy  className='bot_icons' />
                <div  className='bot_content'>
                    <h4>Best Quality</h4>
                    <p>Original Product Guarenteed</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Bottom
