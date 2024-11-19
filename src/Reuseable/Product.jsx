import React from 'react'
import "./Product.css"
import { IoMdStar } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay} from 'swiper/modules';
import { useNavigate } from 'react-router-dom';



const Product = (props) => {
  const navigate = useNavigate();

  console.log(props);
  let product=props.veg

  function addcart() {
  
    navigate('/addtocart')
  }
  
  return (
    <>

 

    <div className='mySwiper'>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='aaa'>
        
        {product.map(function (data) {
          return(
          <div className='product_container'>
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
                <button onClick={addcart}><BiPlus />Add To Cart</button>
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
        </SwiperSlide>

        <SwiperSlide>
        <div className='aaa'>
        
        {product.map(function (data) {
          return(
          <div className='product_container'>
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
        </SwiperSlide>

        <SwiperSlide>
        <div className='aaa'>
        
        {product.map(function (data) {
          return(
          <div className='product_container'>
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

        </SwiperSlide>
        
      </Swiper>
    </div>

      

    </>
  )
}

export default Product
