import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../../assets/img/product_img2.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { IoShuffle } from "react-icons/io5";
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import axios from "axios";
import { axiosConfig } from "../../../axios/axiosConfig";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";
import { cartSlice } from "../../../Store/cartSlice";
import toast, { Toaster } from "react-hot-toast";
export const FeaturedSlide = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  async function getAllProducts() {
    const { data } = await axiosConfig({
      url: "/products",
    });
    console.log(data);
    setProducts(data);
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
  useEffect(() => {
    getAllProducts();
  }, []);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    setActiveIndex(slideIndex);
  }, [slideIndex]);

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setSlideIndex(index);
  };

  // Function to move to the next slide
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Function to move to the previous slide
  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   afterChange: handleSlideChange, // Call handleSlideChange after each slide change
  // };

  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <Slider
        {...settings}
        ref={sliderRef}
        className={activeIndex === slideIndex ? "slide-animate" : ""}
      >
        {products.map((data, index) => (
          <div className="product">
            <img src={data.img} alt="" />

            <div className="productContent">
              <Link to={`/product/${data.id}`}>
                <h3>{data.product_name.substring(0, 20)} ... </h3>
              </Link>

              {data.onSale ? (
                <>
                  <span className="currentPrice">${data.new_price}</span>
                  <span className="oldPrice">${data.old_price}</span>
                  {data.onSale ? (
                    <span className="discount">
                      {Math.trunc(
                        ((data.old_price - data.new_price) / data.old_price) *
                          100
                      )}
                      % Off
                    </span>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <span className="currentPrice">${data.old_price}</span>
              )}

              <p>
                <GoStarFill />
                <span> {data.rate} </span>
              </p>
            </div>
            <div className="productIcons">
              <span className="eachIcon">
                <button onClick={() => handleCart(data.id)}>
                  <HiOutlineShoppingCart />
                </button>
              </span>
              <span className="eachIcon">
                <button>
                  <IoShuffle />
                </button>
              </span>
              <span className="eachIcon">
                <button>
                  <PiMagnifyingGlassPlus />
                </button>
              </span>
              <span className="eachIcon">
                <button onClick={() => handleWishList(data.id)}>
                  <IoMdHeartEmpty />
                </button>
              </span>
            </div>
          </div>
        ))}
      </Slider>
      <IoIosArrowForward className="nextBtn" onClick={nextSlide} />
      <IoIosArrowBack className="prevBtn" onClick={previousSlide} /> 
    </div>
  );
};
