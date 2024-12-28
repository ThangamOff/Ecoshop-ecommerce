import React from 'react'
import Profile from '../Component/Profile/Profile'
import Bottom from '../Component/Bottom/Bottom'
import Category from './Category'
import Product from '../Reuseable/Product'
import tomato from "../Assets/Images/tomato.jpg"
import egg from "../Assets/Images/egg.jpg"
import watermelon from "../Assets/Images/watermelon.jpg"
import beef from "../Assets/Images/beef.png"
import { Link } from 'react-router-dom'
import Shopcategory from './Shopcategory'
import { useSelector } from 'react-redux'
import { IoMdStar } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
const Home = () => {
  let selector = useSelector(function (data) {
    return data.vegetable
  })
  console.log(selector)

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
  ];
  return (
    <>
      <Profile/>
      <Bottom/>
      <Category/>
      <Shopcategory/>
      <div className='zzz'>
        <h2>Fresh Vegetables</h2>
        <Link to="/allproduct"><p>View All</p></Link>
      </div>
      <Product veg={vegetableProducts}/>
    </>
  )
}

export default Home
