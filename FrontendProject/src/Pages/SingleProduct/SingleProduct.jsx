import React, { useEffect, useState } from "react";
import singleProduct1 from "../../assets/img/product_img1.jpg";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiLoopLeftLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../Store/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaSackDollar,
  FaTwitter,
} from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { ReviewSection } from "./ReviewSection";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { axiosConfig } from "../../axios/axiosConfig";
import { FeaturedSlide } from "../../Components/HomePageParts/FeaturedSlider/FeaturedSlide";

export const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState("");
  const [activeColorIndex, setActiveColorIndex] = useState(null);
  const { id } = useParams();
  const [singleProductDetails, setSingleProductDetails] = useState({});
  const dispatch = useDispatch();
  async function getSingleProduct() {
    const { data } = await axiosConfig({
      url: `/products/${id}`,
    });
    setSingleProductDetails(data);
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
    getSingleProduct();
  }, [id]);

  // Function to handle color selection
  const handleColorClick = (index) => {
    setActiveColorIndex(index);
  };
  // Function to handle size selection
  const handleSizeClick = (size) => {
    setActiveSize(size);
  };
  // Increment count function
  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  // Decrement count function
  const decrement = () => {
    if (count > 1) {
      let newCount = count - 1;
      setCount(newCount);
    }
  };

  // Format count to always show at least two digits
  const formatCount = () => {
    return count < 10 ? `0${count}` : count;
  };

  const [mainImgSrc, setMainImgSrc] = useState(singleProduct1);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0); // To track which image is selected

  // Assuming all small images are the same for demonstration. Replace them as necessary.
  const smallImages = [
    singleProductDetails.img,
    singleProductDetails.img,
    singleProductDetails.img,
  ];

  const handleSmallImgClick = (index) => {
    setMainImgSrc(smallImages[index]);
    setSelectedImgIndex(index);
  };
  return (
    <>
      <BreadCrumb
        text={singleProductDetails.product_name}
        link={`ProductItem#${singleProductDetails.id}`}
      />
      <section className="productDetails--container">
        <div className="single-pro-image">
          <img src={singleProductDetails.img} alt="" />
          <div className="small-img-group">
            {smallImages.map((img, index) => (
              <div
                key={index}
                className={`small-img-col ${
                  selectedImgIndex === index ? "selected" : ""
                }`}
                onClick={() => handleSmallImgClick(index)}
              >
                <img src={img} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="single-pro-details">
          <h4>
            {" "}
            <Link to={""}>{singleProductDetails.product_name}</Link>
          </h4>
          <div className="single-pro-price-rate">
            <div className="single-pro-price">
              {/* <span>$45.00</span>
              <del>$55.25</del>
              <span>35% Off</span> */}
              {singleProductDetails.onSale ? (
                <>
                  {" "}
                  <span> ${singleProductDetails.new_price} </span>
                  <del>${singleProductDetails.old_price} </del>
                  {singleProductDetails.onSale ? (
                    <span>
                      {" "}
                      {Math.trunc(
                        ((singleProductDetails.old_price -
                          singleProductDetails.new_price) /
                          singleProductDetails.old_price) *
                          100
                      )}
                      % off{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  <span> ${singleProductDetails.old_price} </span>
                </>
              )}
            </div>
            <div className="single-pro-rate">
              <FaStar />
              <span>({singleProductDetails.rate})</span>
            </div>
          </div>
          <div className="single-pro-desc">
            <p>{singleProductDetails.discription}</p>
          </div>
          <div className="single-pro-list">
            <ul>
              <li>
                {" "}
                <AiOutlineSafetyCertificate />1 Year AL Jazeera Brand Warranty
              </li>
              <li>
                {" "}
                <RiLoopLeftLine />
                30 Day Return Policy
              </li>
              <li>
                <FaSackDollar />
                Cash on Delivery available
              </li>
            </ul>
          </div>
          <div className="single-pro-colors">
            <span>Colors </span>
            <div className="single-pro-switch">
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className={activeColorIndex === index ? "active-color" : ""}
                  onClick={() => handleColorClick(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="single-pro-size">
            <span>Size </span>
            <div className="single-pro-switchSize">
              {["S", "XS", "M", "L", "XL"].map((size) => (
                <span
                  key={size}
                  className={activeSize === size ? "active" : ""}
                  onClick={() => handleSizeClick(size)}
                >
                  <p> {size} </p>
                </span>
              ))}
            </div>
          </div>
          <div className="single-pro-cart">
            <div className="single-pro-count">
              <span className="single-pro-count-minus" onClick={decrement}>
                {" "}
                -{" "}
              </span>
              <span className="single-pro-count-num"> {formatCount()} </span>
              <span className="single-pro-count-plus" onClick={increment}>
                {" "}
                +{" "}
              </span>
            </div>
            <div className="single-pro-btn">
              <button onClick={() => handleCart(singleProductDetails.id)}>
                {" "}
                <IoCartOutline />
                <Link to={""}>Add To Cart </Link>
              </button>
            </div>
            <div className="single-pro-wishlist">
              <button>
                <CiShare2 />
              </button>
              <button onClick={() => handleWishList(singleProductDetails.id)}>
                <CiHeart />
              </button>
            </div>
          </div>
          <div className="single-pro-meta">
            <ul>
              <li>
                SKU: <Link to={""}>BE45VGRT</Link>
              </li>
              <li>
                Category: <Link to={""}>{singleProductDetails.category}</Link>
              </li>
              <li>
                Tags: <Link to={""}>Cloth, printed</Link>
              </li>
            </ul>
          </div>
          <div className="single-pro-share">
            <span> Share :</span>

            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </section>
      <section className="single-pro-reviews-section">
        <ReviewSection />
      </section>
      <section className="single-pro-related-pro">
        <FeaturedSlide />
      </section>
    </>
  );
};
