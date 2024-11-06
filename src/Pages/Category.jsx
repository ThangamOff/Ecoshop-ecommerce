import React from 'react'
import Mycart from '../Reuseable/Mycart'
import cat from "../Assets/Images/cat.jpg"
import vegetable from "../Assets/Images/vegetable.jpg"
import juice from "../Assets/Images/juice.jpg"
import meat from "../Assets/Images/meat.jpg"
import drink from "../Assets/Images/colddrinks.jpg"
import bread from "../Assets/Images/breads.jpg"

const Category = () => {
  return (
    
    <div className='category_img'>
    
      <Mycart
      image={cat}
      title="Fruits"
      />
      <Mycart
      image={vegetable}
      title="Vegetables"
      />
      <Mycart
      image={juice}
      title="Juice"
      />
      <Mycart
      image={meat}
      title="meat"
      />
      <Mycart
      image={drink}
      title="cold drinks"
      />
      <Mycart
      image={bread}
      title="breads"
      />
      
    </div>
  )
}

export default Category
