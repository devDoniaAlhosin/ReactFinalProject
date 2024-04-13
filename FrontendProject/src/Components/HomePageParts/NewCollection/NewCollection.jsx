import React from "react";
import shop_banner_img1 from "../../../assets/img/shop_banner_img1.jpg";
import shop_banner_img2 from "../../../../public/assets/img/shop_banner_img2.jpg";
import { Link } from "react-router-dom";
export const NewCollection = () => {
  return (
    <div className="newColl--container">
      <div className="newColl--inner">
        <div className="newColl--inner-content">
          <div className="newColl--inner-img">
            <img src={shop_banner_img1} alt="" />
            <div className="newColl--inner-text">
              <h5>Super Sale</h5>
              <h3>New Collection</h3>
              <Link to={""}> Shop Now </Link>
            </div>
          </div>
        </div>
        <div className="newColl--inner-content">
          <div className="newColl--inner-img">
            <img src={shop_banner_img2} alt="" />
            <div className="newColl--inner-text">
              <h5>New Season</h5>
              <h3>Sale 40% Off</h3>
              <Link to={""}> Shop Now </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
