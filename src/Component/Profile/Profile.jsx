import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './Profile.css';
import { Pagination, Autoplay } from 'swiper/modules';
import fruit from "../../Assets/Images/fruit.jpg"
import fruit1 from "../../Assets/Images/fruit1.jpg"
import fruit2 from "../../Assets/Images/fruit2.jpg"
import { IoIosArrowForward } from "react-icons/io";

const Profile = () => {
  return (
    <div className='myswipe'>
       <Swiper
        spaceBetween={30}
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
          <div className='sw_box'>
            <div className='one_box'>
              <div className='content'>
                <h2><span>FRESH GROCERY</span></h2>
                <div className='content_word'>
                  <h1>There's you can Buy your all of Grocery Products.</h1>
                </div>
                <button>Shop Now <IoIosArrowForward /></button>
              </div>
              <div className='img'>
                <img src={fruit} alt="Grocery Products" />
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='sw_box'>
            <div className='one_box'>
              <div className='content'>
                <h2><span>FRESH GROCERY</span></h2>
                <div className='content_word'>
                  <h1>There's you can Buy your all of Grocery Products.</h1>
                </div>
                <button>Shop Now <IoIosArrowForward /></button>
              </div>
              <div className='img'>
                <img src={fruit1} alt="Grocery Products" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className='sw_box'>
            <div className='one_box'>
              <div className='content'>
                <h2><span>FRESH GROCERY</span></h2>
                <div className='content_word'>
                  <h1>There's you can Buy your all of Grocery Products.</h1>
                </div>
                <button>Shop Now <IoIosArrowForward /></button>
              </div>
              <div className='img'>
                <img src={fruit2} alt="Grocery Products" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default Profile;
