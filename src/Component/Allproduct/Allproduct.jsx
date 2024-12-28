import React, { useEffect } from "react";
import "./Allproduct.css";
import tomato from "../../Assets/Images/tomato.jpg";
import egg from "../../Assets/Images/egg.jpg";
import watermelon from "../../Assets/Images/watermelon.jpg";
import beef from "../../Assets/Images/beef.png";

import { BiPlus } from "react-icons/bi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
const Allproduct = () => {
  const [min, setmin] = useState(0);
  const [range, setrange] = useState([]);
  const vegetableProducts = [
    {
      title: "Fresh Red Tomatos",
      price: 60.99,
      offerPrice: "$12.99",
      images: tomato,
      catagory:"fruit",
    },
    {
      title: "Chicken Eggs",
      price: 5.99,
      offerPrice: "$10.99",
      images: egg,
    },
    {
      title: "Fresh Watemelon",
      price: 8.99,
      offerPrice: "$15.99",
      images: watermelon,
    },
    {
      title: "Fresh Watemelon",
      price: 8.99,
      offerPrice: "$15.99",
      images: watermelon,
    },
    {
      title: "Fresh Watemelon",
      price: 8.99,
      offerPrice: "$15.99",
      images: watermelon,
      catagory:"juice",
    },
    {
      title: "Beef Steak",
      price: 12.99,
      offerPrice: "$20.99",
      images: beef,
      catagory:"meat",
    },
    {
      title: "Fresh Watemelon",
      price: 8.99,
      offerPrice: "$15.99",
      images: watermelon,
    },
    {
      title: "Fresh Watemelon",
      price: 8.99,
      offerPrice: "$15.99",
      images: watermelon,
      catagory:"juice",
    },
    {
      title: "Beef Steak",
      price: 12.99,
      offerPrice: "$20.99",
      images: beef,
      catagory:"meat",
    },
  ];
  const [veg, setveg] = useState(vegetableProducts)
 

  useEffect(() => {
    let incrange = vegetableProducts.map(function name(data) {
      return data.price;
    });
    console.log(incrange);
    setrange(incrange);
  }, []);

  const minimum = Math.min(...range);
  console.log(minimum);
  const maximum = Math.max(...range);
  console.log(maximum);
  const navigate = useNavigate();
  function viewproduct() {
    navigate("/viewproduct");
  }
  function changerange(e) {
    let values = e.target.value;
    console.log(values);

    setmin(values);
    let datas = vegetableProducts.filter(function (data) {
      return data.price>=minimum && data.price<=values;
    });
    console.log(datas);
    setveg(datas)
  }
  console.log(min);

  return (
    <>
      <div className="all_product_con">
        <div className="all_product_lef">
          <div className="all_product_category">
            <h3>Product Categories</h3>
            <p>
              <input type="checkbox" name="" id="" /> Vegetable
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Fruits
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Juice
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Meat
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Smoothie
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Bread
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Sea Foods
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Pet Foods
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Milk & Drinks
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Drinks
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Protein
            </p>
          </div>
          <div className="all_product_category">
            <h3>Price Range</h3>
            <input
              type="range"
              min={minimum}
              max={maximum}
              value={min}
              name=""
              id=""
              onChange={changerange}
            />
            <p>{min}</p>
            <p>Price:{min}</p>
          </div>
          <div className="all_product_category">
            <h3>Brands</h3>
            <p>
              <input type="checkbox" name="" id="" /> Refined Threads
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Ethereal Chic
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Yellow
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Esctasy
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Urban Hive
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Velvet Vista
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Boldly Blue
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Minted Mode
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Eclectic Ensemble
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              BraveAlchemy Attire
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              Cascade Couture
            </p>
          </div>
          <div className="all_product_category">
            <h3>Weight</h3>
            <p>
              <input type="checkbox" name="" id="" /> 500gm
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              1kg
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              2kg
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              5kg
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              10kg
            </p>
          </div>
        </div>

        <div className="all_product_rig">
          <div className="rig_top">
            <p>Showing 1–16 of 66 results</p>
            <p>Sort by:</p>
          </div>
          <div className="rig_product">
            {veg.map(function (data) {
              return (
                <div
                  onClick={() => viewproduct()}
                  className="product_container"
                >
                  <div className="product_box">
                    <img src={data.images} alt="" />
                    <div className="product_icons">
                      <p>
                        <IoMdStar />
                      </p>
                      <p>
                        <IoMdStar />
                      </p>
                      <p>
                        <IoMdStar />
                      </p>
                      <p>
                        <IoMdStar />
                      </p>
                      <p>
                        <IoMdStar />
                      </p>
                    </div>
                    <h3>{data.title}</h3>
                    <div className="product_price">
                      <p>{data.offerPrice}</p>
                      <p>{data.price}</p>
                    </div>
                    <button>
                      <BiPlus />
                      Add To Cart
                    </button>
                    <div className="hove_contain">
                      <div className="hove_icons">
                        <div className="side_icons">
                          <MdOutlineZoomOutMap className="zoom" />
                        </div>
                      </div>
                      <div className="hove_icons">
                        <div className="side_icons">
                          <IoIosHeartEmpty className="zoom" />
                        </div>
                      </div>
                      <div className="hove_icons">
                        <div className="side_icons">
                          <GrRefresh className="zoom" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproduct;
