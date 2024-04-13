import React, { useState } from "react";
import product_1 from "../../assets/img/product_img1.jpg";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../Store/cartSlice";
import { axiosConfig } from "../../axios/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
export const Card = ({ data }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const dispatch = useDispatch();
  const handleClick = (color) => {
    setSelectedColor(color);
  };
  async function handleWishList(id) {
    try {
      const { data } = await axiosConfig({
        url: `/products/${id}`,
      });
      addToWishList(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      // Handle the error appropriately
    }
  }

  async function addToWishList(wishProduct) {
    try {
      const { data } = await axiosConfig({
        url: "/wishList",
        method: "POST",
        data: wishProduct,
      });
      // Optionally handle the response
      toast.success("Added To wishList Successfully ");
    } catch (error) {
      toast.error("Already Exists in wishList");
      console.error("Error adding to wishlist:", error);
      // Handle the error appropriately
    }
  }
  async function handleCart(id) {
    try {
      const { data } = await axiosConfig({
        url: `/products/${id}`,
      });

      addToCart(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      // Handle the error appropriately
    }
  }
  async function addToCart(cartProduct) {
    try {
      const { data } = await axiosConfig({
        url: "/cart",
        method: "POST",
        data: cartProduct,
      });
      // Optionally handle the response
      toast.success("Added To Cart Successfully ");
    } catch (error) {
      toast.error("Already Exists in Cart");
      console.error("Error adding to Cart:", error);
      // Handle the error appropriately
    }
  }

  return (
    <div className="Excl--card">
      <div className="Excl-colors">
        <div
          className={`Excl--Color1 ${
            selectedColor === "color1" ? "selected" : ""
          }`}
          onClick={() => handleClick("color1")}
        ></div>
        <div
          className={`Excl--Color2 ${
            selectedColor === "color2" ? "selected" : ""
          }`}
          onClick={() => handleClick("color2")}
        ></div>
        <div
          className={`Excl--Color3 ${
            selectedColor === "color3" ? "selected" : ""
          }`}
          onClick={() => handleClick("color3")}
        ></div>
      </div>

      <div className="Excl--textSale">
        {data.onSale ? (
          <span>SALE</span>
        ) : Math.trunc((data.old_price - data.new_price) / data.old_price) ==
          0.8 ? (
          <span className="hotPrice">HOT</span>
        ) : (
          <span className="newText">NEW</span>
        )}
      </div>
      <div className="Excl--card-img">
        <img src={data.img} alt="" />
        <div className="Excl--icons">
          <div className="Excl--wishlist">
            <button onClick={() => handleWishList(data.id)}>
              <Link to={""}>
                <CiHeart size={20} />{" "}
              </Link>
            </button>
          </div>
          <div className="Excl--wishlist">
            <button onClick={() => handleCart(data.id)}>
              <Link to={""}>
                <CiShoppingCart size={20} />
              </Link>
            </button>
          </div>
          <div className="Excl--wishlist">
            <Link to={""}>
              <CiShare2 size={20} />
            </Link>
          </div>
          <div className="Excl--wishlist">
            <Link to={""}>
              <CiZoomIn size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="Excl--card-Content">
        <h6>
          {" "}
          <Link to={`/product/${data.id}`}>
            {data.product_name.substring(0, 30)}...
          </Link>{" "}
        </h6>
        <div className="Excl--productPrice">
          {data.onSale ? (
            <>
              {" "}
              <span> ${data.new_price} </span>
              <del>${data.old_price} </del>
              {data.onSale ? (
                <div className="Excl--product-onsale">
                  <span>
                    {" "}
                    {Math.trunc(
                      ((data.old_price - data.new_price) / data.old_price) * 100
                    )}
                    % off{" "}
                  </span>
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <span> ${data.old_price} </span>
            </>
          )}
        </div>
        <div className="Excl--rating">
          <div className="ratingstars">
            <GoStarFill /> {data.rate}
          </div>
          <p>({data.count})</p>
        </div>
      </div>
    </div>
  );
};
