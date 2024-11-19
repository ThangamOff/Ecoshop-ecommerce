import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Track from '../Component/Track/Track'
import Top from '../Component/Top/Top'

const About = () => {
  return (
    <>
    <Track/>
    <Top/>
    <Navbar/>
    <div className='detail_img'>
            <div className='detail_title'>
                <p>Home/Contact</p>
                <h2>About</h2>
            </div>
        </div>
    </>
  )
}

export default About
