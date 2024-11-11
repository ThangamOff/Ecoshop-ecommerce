import React from 'react'
import Track from '../Component/Track/Track'
import Top from '../Component/Top/Top'
import Navbar from '../Component/Navbar/Navbar'
import Profile from '../Component/Profile/Profile'
import Bottom from '../Component/Bottom/Bottom'
import Category from './Category'
import Product from '../Reuseable/Product'
import tomato from "../Assets/Images/tomato.jpg"
import egg from "../Assets/Images/egg.jpg"
import watermelon from "../Assets/Images/watermelon.jpg"
import beef from "../Assets/Images/beef.png"
import Footer from '../Component/Footer/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
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
    // {
    //   title: "Fresh Red Tomatos",
    //   price:"$6.99",
    //   offerPrice:"$12.99",
    //   images:tomato
    // },
    // {
    //   title: "Chicken Eggs",
    //   price:"$5.99",
    //   offerPrice:"$10.99",
    //   images:egg
    // },
    // {
    //   title: "Fresh Watemelon",
    //   price:"$8.99",
    //   offerPrice:"$15.99",
    //   images:watermelon
    // },
    // {
    //   title: "Beef Steak",
    //   price:"$12.99",
    //   offerPrice:"$20.99",
    //   images:beef
    // },
    // {
    //   title: "Fresh Red Tomatos",
    //   price:"$6.99",
    //   offerPrice:"$12.99",
    //   images:tomato
    // },
    // {
    //   title: "Chicken Eggs",
    //   price:"$5.99",
    //   offerPrice:"$10.99",
    //   images:egg
    // },
    // {
    //   title: "Fresh Watemelon",
    //   price:"$8.99",
    //   offerPrice:"$15.99",
    //   images:watermelon
    // },
    // {
    //   title: "Beef Steak",
    //   price:"$12.99",
    //   offerPrice:"$20.99",
    //   images:beef
    // },
   
   
  ];
  return (
    <>
    {/* <h1>djgndsjbgdsbhbhj</h1> */}
      <Track/>
      <Top/>
      <Navbar/>
      <Profile/>
      <Bottom/>
      <Category/>
      <div className='zzz'>
        <h2>Fresh Vegetables</h2>
        <Link to="/allproduct"><p>View All</p></Link>
      </div>
      <Product veg={vegetableProducts}/>
      <Footer/>
    </>
  )
}

export default Home
