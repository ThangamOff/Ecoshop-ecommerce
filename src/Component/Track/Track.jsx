import React from 'react'
import "./Track.css"
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Track = () => {
  return (
    <>
        <div className='track_container'>
            <div className='tra-con'>
                <div className='track_order'>
                    <p>Account</p>
                    <p>Track Order</p>
                    <p>Support</p>
                </div>
                <div className='track_contact'>
                    <div className='contact_details'>
                        <FaPhoneVolume className='Track_icon1' />
                        <p>+14528 58963</p>
                    </div>
                    <div className='contact_details'>
                        <IoIosMail className='Track_icon' />
                        <p>eco@gmail.com</p>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Track
