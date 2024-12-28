import React from 'react'
import Track from '../Component/Track/Track'
import Top from '../Component/Top/Top'
import Navbar from '../Component/Navbar/Navbar'
import Routing from '../Routing/Routing'
import Footer from '../Component/Footer/Footer'
import { useSelector } from 'react-redux'
const Layout = () => {
  const selector=useSelector(function (data) {
    return data.login
  })
  console.log(selector);
  
  return (
    <>
    <Track/>
    <Top/>
    <Navbar/>
    <Routing/>
    <Footer/>
    </>
  )
}

export default Layout
