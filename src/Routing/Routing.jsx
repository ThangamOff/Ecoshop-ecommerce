import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import Pages from "../Pages/Pages"
import About from "../Pages/About"
import Blog from "../Pages/Blog"
import Dashboard from "../Pages/Dashboard"
import Contact from "../Pages/Contact"
import Register from '../Component/Register/Register'
import Login from '../Component/Login/Login'
import Allproduct from '../Component/Allproduct/Allproduct'
import Viewproduct from '../Component/Viewproduct/Viewproduct'
import Addcart from '../Component/Addcart/Addcart'

const Routing = () => {
  return (
    <>
      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/Pages" element={<Pages/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/userDashboard" element={<Dashboard/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/reg" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/allproduct" element={<Allproduct/>} />
            <Route path="/viewproduct" element={<Viewproduct/>} />
            <Route path="/addtocart" element={<Addcart/>} />
        </Routes>
    </>
  )
}

export default Routing
