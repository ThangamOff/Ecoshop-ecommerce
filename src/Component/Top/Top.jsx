import React from 'react'
import "./Top.css"
import logo from "../../Assets/Images/logo.jpg"
import { LuRefreshCw } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { GoLock } from "react-icons/go";
const Top = () => {
  return (
    <>
      <div className='top_container'> 
         <div className='top_box'>
            <img src={logo} alt="" />
            <div className='type_box'>
                <input type="text" placeholder='search product...' />
                <select name="" id="">
                  <option value="">All Categories</option>
                  <option value="">fruits</option>
                  <option value="">juice</option>
                  <option value="">meat</option>
                </select>
                <button>Search</button>
            </div>
            <div className='top_icons'>
                <div className='refresh'>
                  <LuRefreshCw />
                  <p className='num'>0</p>
                </div>
                <div className='refresh'>
                  <IoMdHeartEmpty />
                  <p className='one'>0</p>
                </div>
                <div className='refresh'>
                  <GoLock />
                  <p className='two'>0</p>
                </div>
                <div className='refresh'>
                  <AiOutlineUser />
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Top
