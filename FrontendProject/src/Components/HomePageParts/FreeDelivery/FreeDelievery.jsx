import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

export const FreeDelievery = () => {
  return (
    <div className="freeDelivery--container">
      <div className="freeDelivery--content">
        <div className="freeDelivery--item">
          <div className="freeDelivery-icon">
            <TbTruckReturn />
          </div>
          <h5>Free Delivery</h5>
          <p>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
        <div className="freeDelivery--item">
          <div className="freeDelivery-icon">
            <CiDeliveryTruck />
          </div>
          <h5>30 Day Return</h5>
          <p>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
        <div className="freeDelivery--item">
          <div className="freeDelivery-icon">
            <MdOutlineSupportAgent />
          </div>
          <h5> 24 /7 Support </h5>
          <p>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
      </div>
    </div>
  );
};
