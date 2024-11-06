import React, { useState } from 'react'
import "./Navbar.css"
import { MdAdd } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [hide, sethide] = useState(false)

    function opendiv(params) {
        
    }

  return (
    <>
        <div className='nav_container'>
            <div className='navbar'>       
                <select name="" id="">
                    <option value=""><p><HiOutlineMenuAlt1 /></p>All Categories</option>
                    <option value="">Fruit</option>
                    <option value="">Juice</option>
                    <option value="">Meat</option>
                </select>
                <div className='nav_list'>
                        <Link to="/"><p>Home</p></Link>
                    <div className='shop_nav' onMouseOver={()=>opendiv("s1")}>
                        <Link to="/shop"><p>Shop</p></Link>
                        <MdAdd className='plus' />
                    </div>
                        {/* <div className='shop_drop_down'>
                            <div className='drop_down_p'>
                                <p>1111</p>
                            </div>
                            <div className='drop_down_p'>
                                <p>222</p>
                            </div>
                            <div className='drop_down_p'>
                                <p>3</p>
                            </div>
                            <div className='drop_down_p'>
                                <p>4</p>
                            </div>
                        </div> */}

                    <div className='shop_nav'>
                        <Link to="/pages"><p>Pages</p></Link>
                        <MdAdd className='plus' />
                    </div>
                        <Link to="/about"><p>About</p></Link>
                        <Link to="/blog"><p>Blog</p></Link>
                        <Link to="/userDashboard"><p>User Dashboard</p></Link>
                        <Link to="/contact"><p>Contact</p></Link>
                </div>

                <button className='nav_button'>Seller Login</button>
                
            </div>
        </div>
    </>
  )
}

export default Navbar
