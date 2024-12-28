import React from 'react'
import Allproduct from '../Component/Allproduct/Allproduct'
import { useSelector } from 'react-redux'

const Shop = () => {

  const carselect = useSelector(function (data) {
    return data.cardata;
});
  console.log(carselect)


  
  return (
    <>
    {/* {carselect.map(function (data) {
      return (<div>
        <h1>{data.brand}</h1>
      </div>)      
    })} */}
      <Allproduct/>
    </>
  )
}

export default Shop
