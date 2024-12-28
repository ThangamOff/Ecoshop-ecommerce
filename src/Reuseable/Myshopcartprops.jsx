import React from 'react'
import './Myshopcart.css'

const Myshopcartprops = (props) => {
    console.log(props)
  return (
    <>
    <div className="myshopcart_container">
        <div className="shopcarts_contain">
        <img src={props.bg} alt="" className="shopcarts_contain_img" />
            <div className="shopcart_carts">
                <div className="shopcart_top">
                    <h3>{props.title}</h3>
                    <h1> {props.header}</h1>
                    <button className="shopcart_btn">Shop Now
                        <p className="shopcart_btn_p" >{props.ico}</p>
                    </button>
                </div>
                <div className="shopcart_bottom">
                    <img src={props.image} alt="" className="shopcart_bottom_img" />
                </div>
           </div>
        </div>
      </div>
      
    </>
  )
}

export default Myshopcartprops
