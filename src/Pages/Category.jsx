import React from 'react'
import Mycart from '../Reuseable/Mycart'
import cat from "../Assets/Images/cat.jpg"
import vegetable from "../Assets/Images/vegetable.jpg"
import juice from "../Assets/Images/juice.jpg"
import meat from "../Assets/Images/meat.jpg"
import drink from "../Assets/Images/colddrinks.jpg"
import bread from "../Assets/Images/breads.jpg"
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
      
        <div className='zzz'>
          <h1>Market Category</h1>
          <Link to="/allproduct"><p>View All</p></Link>
        </div>
      
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
    </div>
  )
}

export default Category
