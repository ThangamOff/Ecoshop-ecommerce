import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import Pages from "../Pages/Pages"
import About from "../Pages/About"
import Blog from "../Pages/Blog"
import Dashboard from "../Pages/Dashboard"
import Contact from "../Pages/Contact"

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/Pages" element={<Pages/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/userDashboard" element={<Dashboard/>} />
            <Route path="/contact" element={<Contact/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
