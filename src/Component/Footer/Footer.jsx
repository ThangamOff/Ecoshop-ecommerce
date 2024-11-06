import React from 'react'
import "./Footer.css"
import foottop from "../../Assets/Images/footop.jpg"
import { IoMailOutline } from "react-icons/io5";
import footerlogo from "../../Assets/Images/footlogo.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CgFacebook } from "react-icons/cg";
import { AiFillYoutube } from "react-icons/ai";
import visa from "../../Assets/Images/visa.jpg"
import mastercart from "../../Assets/Images/mastercart.jpg"
import paypal from "../../Assets/Images/paypal.jpg"
import skrill from "../../Assets/Images/skirrl.jpg"
import maestro from "../../Assets/Images/maestro.jpg"
import visaelectron from "../../Assets/Images/visaelectron.jpg"
const Footer = () => {
  return (
    <>
    <div className='foot'>
    <div className='footertop'>
        <div className='fottercont'>
            <h1>Get <span>20%</span>Off Discount Coupon</h1>
            <p>by Subscribe our Newsletter</p>
            <div className='inputs'>
                <IoMailOutline className='inputmail'/>
                <input type="text" placeholder='EMAIL ADDRESS'/>
                <button>Get the Coupon</button>
            </div>
        </div>
      </div>
    </div>
      <div className='footerbottom'>
        <div className='ch'>
          <div className='ch_img_container'>
            <div className='ch_img'>
              <img src={footerlogo} alt="" />
            </div>
            <div className='ch_detail'>
              <p>Track Order</p>
              <p>Delivery & Returns</p>
              <p>Warranty</p>
            </div>
          </div>
          <div className='ft_about_con'>
            <h2>About Us</h2>
            <p>Rave’s Story</p>
            <p>Work With Us</p>
            <p>Coporate News</p>
            <p>Investors</p>
          </div>
          <div className='ft_about_con'>
            <h2>Useful Links</h2>
            <p>Secure Payment</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Archived Products</p>
          </div>
          <div className='ft_contactinfo'>
            <div className='ft_icons_con'>
              <div className='ft_icons'>
                <IoLocationOutline className='ft_location' />
              </div>
              <div>
                <h2>Address:</h2>
                <p>4517 Washington Ave. Manchester,</p>
                <p>Kentucky 39495</p>
              </div>
            </div>
            <div className='ft_icons_con'>
              <div className='ft_icons'>
                <BiPhone className='ft_location' />
              </div>
              <div>
                <h2>Phone:</h2>
                <p>+880171889547</p>
              </div>
            </div>
            <div className='ft_icons_con'>
              <div className='ft_icons'>
                <TfiEmail className='ft_location' />
              </div>
              <div>
                <h2>Email:</h2>
                <p>Demo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='ft_bottom'>
          <div className='ftbot_icon'>
            <PiInstagramLogoLight />
            <CgFacebook />
            <AiFillYoutube />
            <p>©2024 <span> Quomodosoft </span> All rights reserved</p>
          </div>
          <div className='ftbot_icon'>
            <a href=""><img src={visa} alt="" /></a>
            <a href=""><img src={mastercart} alt="" /></a>
            <a href=""><img src={paypal} alt="" /></a>
            <a href=""><img src={skrill} alt="" /></a>
            <a href=""><img src={maestro} alt="" /></a>
            <a href=""><img src={visaelectron} alt="" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
