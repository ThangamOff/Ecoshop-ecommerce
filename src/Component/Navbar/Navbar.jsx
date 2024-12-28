import React, { useState } from 'react'
import "./Navbar.css"
import { MdAdd } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import shop4 from '../../Assets/Images/shop4.jpg'


const Navbar = () => {
    const [hide, sethide] = useState(false)
    const [selectProduct,setselectProduct ] = useState('')


    function opendiv(data) {
        console.log(data);
        sethide(data);
    }
    function closediv(params) {
        sethide(false)
    }
    const productOption = (e) => {
        setselectProduct(e.target.value)
        console.log(selectProduct,"aaa")
    }
console.log(selectProduct);

  return (
    <>
        <div className='nav_container'>
            <div className='navbar'>       
                <select name="" id="" onChange={productOption}>
                    <option value=""><p><HiOutlineMenuAlt1 /></p>All Categories</option>
                    <option value="fruit">Fruit</option>
                    <option value="juice">Juice</option>
                    <option value="meat">Meat</option>
                </select>
                <div className='nav_list'>
                        <Link to="/"><p>Home</p></Link>
                    <div className='n1'>
                        <div className='shop_nav' onMouseOver={()=>opendiv("s1")}  onMouseLeave={()=>closediv()}>
                            <Link to="/shop">
                            <p>Shop</p>
                            </Link>
                            <MdAdd className='plus' />
                        </div>
                        <div className={hide=="s1"?"shop":"shop1"}>
                            <div className='shop_hov1'>
                                <h2>Dresses</h2>
                                <p>Shirt</p>
                                <p>Skart</p>
                                <p>T-Shirt</p>
                            </div>
                            <div className='shop_hov2'>
                                <h2>Bags</h2>
                                <p>HandBags</p>
                                <p>Mobile Bags</p>
                                <p>School Bags</p>
                            </div>
                            <div className='shop_hov3'>
                                <h2>Cosmetics</h2>
                                <p>Liptics</p>
                                <p>Foundation</p>
                                <p>Eye Liner</p>
                            </div>
                            <div className='shop_hov4'>
                                <img src={shop4} alt="" />
                            </div>
                            
                        </div>
                    </div>

                    <div className='n1'>
                        <div className='shop_nav' onMouseOver={()=>opendiv("s2")}  onMouseLeave={()=>closediv()}>
                            {/* <Link to="/pages"> */}
                            <p>Pages</p>
                            {/* </Link> */}
                            <MdAdd className='plus' />
                        </div>
                            <div className={hide=="s2"?"page":"page1"}>
                                <p>Product-details</p>
                                <p>Privacy Policy</p>
                                <p>Term & Condition</p>
                                <p>FAQ</p>
                                <p>Shop Category Icon</p>
                                <p>Shop List View</p>
                            </div>
                    </div>

                        {/* <Link to="/about"> */}
                        <p>About</p>
                        {/* </Link> */}
                        <div className='n1'>
                            {/* <Link to="/blog" onMouseOver={()=>opendiv("s3")} onMouseLeave={()=>closediv()}> */}
                            <p>Blog</p>
                            {/* </Link> */}
                            <div className={hide=="s3"?"blog":"blog1"}>
                                <p>Blog Details</p>
                                <p></p>
                            </div>
                        </div>
                        {/* <Link to="/userDashboard"> */}
                        <p>User Dashboard</p>
                        {/* </Link> */}
                        <Link to="/contact">
                        <p>Contact</p>
                        </Link>
                </div>

               <Link to="/reg"> <button className='nav_button'>Seller Login</button></Link>
                
            </div>
        </div>
    </>
  )
}

export default Navbar
