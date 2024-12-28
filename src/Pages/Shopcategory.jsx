import React from "react";
import Myshopcartprops from "../Reuseable/Myshopcartprops";
import fr1 from "../Assets/Images/bg-img-1.webp";
import bg1 from "../Assets/Images/bg-img.webp"
import bg2 from "../Assets/Images/bg-2.webp"
const Shopcategory = () => {
  return (
    <>
      <div className="myshopcartprops">
        <Myshopcartprops
          bg ={bg1}
          image={fr1}
          title="FRUITS"
          header=" Healthy & Goods Fruits"
        />
        <Myshopcartprops
        bg ={bg2}
        image={fr1}
          title="Vegetable"
          header="Frash & Goods Vegetable"
        />
        <Myshopcartprops
        bg ={bg1}
        image={fr1}
          title="Juices"
          header=" Best Fruits Juices"
        />
      </div>
    </>
  );
};

export default Shopcategory;
