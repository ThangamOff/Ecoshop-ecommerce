import React from 'react'
import './Allproduct.css'
import Track from '../Track/Track'
import Top from '../Top/Top'
import Navbar from '../Navbar/Navbar'
import Mycart from '../../Reuseable/Mycart'
import tomato from "../../Assets/Images/tomato.jpg"
import egg from "../../Assets/Images/egg.jpg"
import watermelon from "../../Assets/Images/watermelon.jpg"
import beef from "../../Assets/Images/beef.png"
import Product from '../../Reuseable/Product'

import { BiPlus } from "react-icons/bi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from 'react-router-dom'


const Allproduct = () => {
    const vegetableProducts = [
        {
          title: "Fresh Red Tomatos",
          price:"$6.99",
          offerPrice:"$12.99",
          images:tomato
        },
        {
          title: "Chicken Eggs",
          price:"$5.99",
          offerPrice:"$10.99",
          images:egg
        },
        {
          title: "Fresh Watemelon",
          price:"$8.99",
          offerPrice:"$15.99",
          images:watermelon
        },
        {
          title: "Beef Steak",
          price:"$12.99",
          offerPrice:"$20.99",
          images:beef
        },
    ]

    const navigate = useNavigate();
    function viewproduct(){
        navigate("/viewproduct")
        
    }

  return (
    <>
    
        <Track/>
        <Top/>
        <Navbar/>
        <div className='all_product_con'>
            <div className='all_product_lef'>
                <p>aaaaaaa</p>
            </div>
            <div className='all_product_rig'>
                <div className='rig_top'>
                    <p>Showing 1–16 of 66 results</p>
                    <p>Sort by:</p>
                </div>
                <div className='rig_product'>
                     {vegetableProducts.map(function (data) {
                    return(<div onClick={()=>viewproduct()} className='product_container'>
                        <div className='product_box'>
                        <img src={data.images} alt="" />
                        <div className='product_icons'>
                            <p><IoMdStar /></p>
                            <p><IoMdStar /></p>
                            <p><IoMdStar /></p>
                            <p><IoMdStar /></p>
                            <p><IoMdStar /></p>
                        </div>
                            <h3>{data.title}</h3>
                        <div className='product_price'>
                            <p>{data.offerPrice}</p>
                            <p>{data.price}</p>
                        </div>
                            <button><BiPlus />Add To Cart</button>
                            <div className='hove_contain'>
                        <div className='hove_icons'>
                            <div className='side_icons'>
                            <MdOutlineZoomOutMap className='zoom' />
                            </div>
                        </div>
                        <div className='hove_icons'>
                            <div className='side_icons'>
                            <IoIosHeartEmpty className='zoom' />
                            </div>
                        </div>
                        <div className='hove_icons'>
                            <div className='side_icons'>
                            <GrRefresh className='zoom' />
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>)
                })}
                </div>
               

            </div>
        </div>
    </>
  )
}

export default Allproduct
