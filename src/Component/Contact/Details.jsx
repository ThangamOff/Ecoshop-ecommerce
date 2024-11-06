import React from 'react'
import "./Details.css"
import { FaPhoneVolume } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
const Details = () => {
  return (
    <>
    <div className='detail_container'>
        <div className='detail_img'>
            <div className='detail_title'>
                <p>Home/Contact</p>
                <h2>Contact</h2>
            </div>
        </div>
        <div className='detail_contact'>
            <div className='detail_information'>
                <div className='detail_information_p'>
                    <h2>Contact Information</h2>
                    <p>Fill the form below or write us .We will help you as soon as possible.</p>
                </div>
                <div className='detail_PE'>
                    <div className='detail_pho'>
                        <div className='pho_ico'>
                            <FaPhoneVolume className='ico_pho' />
                        </div>
                        <h3>Phone</h3>
                        <p>+1347-430-9510</p>
                    </div>
                    <div className='detail_pho'>
                        <div className='pho_ico'>
                            <TbMailFilled className='ico_pho' />
                        </div>
                        <h3>Email</h3>
                        <p>abdur.rohman2003@gmail.com</p>
                    </div>
                    
                </div>
                <div className='detail_loc'>
                    <div className='detail_location'>
                        <div className='detail_loico'>
                            <GrLocation className='detail_loicons' />
                        </div>
                        <div className='details_loc_add'>
                            <h2>Address</h2>
                            <p>2140 W Thunderbird Rd, Phoenix, Arkansas 85023, United States</p>
                        </div>
                    </div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d774382.6761693481!2d-73.979681!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1729863038995!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                </div>
            </div>






























            <div className='detail_form'>
                <p>aaaaaaaaa</p>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Details
