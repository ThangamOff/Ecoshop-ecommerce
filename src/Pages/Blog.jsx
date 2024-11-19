import React from 'react'
import Top from '../Component/Top/Top'
import Track from '../Component/Track/Track'
import Navbar from '../Component/Navbar/Navbar'

const Blog = () => {
  return (
    <>
      <Track/>
      <Top/>
      <Navbar/>
      <div className='detail_img'>
            <div className='detail_title'>
                <p>Home/Contact</p>
                <h2>Blog</h2>
            </div>
        </div>
    </>
  )
}

export default Blog
