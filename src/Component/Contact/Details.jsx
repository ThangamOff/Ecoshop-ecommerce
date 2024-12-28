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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9831306.91025768!2d-119.72618785028722!3d56.94452978792602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e1!3m2!1sen!2sin!4v1735363232099!5m2!1sen!2sin"></iframe>

                </div>
            </div>

            <div className="detail_form">
                <h2>Get in Touch</h2>
                <div>
                    <form action="#" method="POST">
                    <div className="form-group">
                        <p htmlFor="name">Name</p>
                        <input type="text"id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <p htmlFor="email">Email</p>
                        <input type="email"id="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <p htmlFor="subject">Subject</p>
                        <input type="text" id="subject" name="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <p htmlFor="message">Message</p>
                        <textarea id="message" name="message" placeholder="Your Message" ></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                    </form>
                </div>
                </div>

        </div>
    </div> 
    </>
  )
}

export default Details
