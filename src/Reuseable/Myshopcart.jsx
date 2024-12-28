import React from "react";
import "./Myshopcart.css";
import { FaAngleRight } from "react-icons/fa";
import healthy from '../Assets/Images/bg-img-1.webp'
import bg from '../Assets/Images/bg-img.webp'

const Myshopcart = () => {
  return (
    <>
      <div className="myshopcart_container">
        <div className="shopcarts_contain">
        <img src={bg} alt="" className="shopcarts_contain_img" />
            <div className="shopcart_carts">
                <div className="shopcart_top">
                    <h3>FRUITS</h3>
                    <h1> Healthy & Goods Fruits</h1>
                    <button className="shopcart_btn">Shop Now
                        <p className="shopcart_btn_p" ><FaAngleRight /></p>
                    </button>
                </div>
                <div className="shopcart_bottom">
                    <img src={healthy} alt="" className="shopcart_bottom_img" />
                </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Myshopcart;
