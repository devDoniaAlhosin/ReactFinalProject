import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../axios/axiosConfig";

export const Head = () => {
  const [isLanguageListVisible, setLanguageListVisible] = useState(false);
  const [isCurrencyListVisible, setCurrencyListVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  const toggleLanguageListVisibility = () => {
    setLanguageListVisible(!isLanguageListVisible);
    setCurrencyListVisible(false); // Close currency list
  };

  const toggleCurrencyListVisibility = () => {
    setCurrencyListVisible(!isCurrencyListVisible);
    setLanguageListVisible(false); // Close language list
  };

  const handleLanguageItemClick = (text) => {
    setSelectedLanguage(text);
    setLanguageListVisible(false); // Hide the language list
  };

  const handleCurrencyItemClick = (text) => {
    setSelectedCurrency(text);
    setCurrencyListVisible(false); // Hide the currency list
  };
  const [wishListItem, setWishListItem] = useState([]);

  async function getWishList() {
    try {
      const { data } = await axiosConfig({
        url: "/wishList",
      });
      setWishListItem(data);
    } catch (error) {
      console.error("Error fetching wishlist", error);
    }
  }

  useEffect(() => {
    getWishList();
  }, [wishListItem]);

  return (
    <section className="topHeader--container">
      <div className="top--header">
        <div className="left--header">
          <div className="dropdown" onClick={toggleLanguageListVisibility}>
            <div className="wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 32 32"
              >
                <path fill="#fff" d="M10 4H22V28H10z"></path>
                <path
                  d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  fill="#092050"
                ></path>
                <path
                  d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  transform="rotate(180 26 16)"
                  fill="#be2a2c"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              <div className="selected">{selectedLanguage}</div>
            </div>
            <RiArrowDropDownLine className="arrow" />
            <div className={`list ${isLanguageListVisible ? "show" : ""}`}>
              <div
                className="item"
                onClick={() => handleLanguageItemClick("English")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                >
                  <rect
                    x="1"
                    y="4"
                    width="30"
                    height="24"
                    rx="4"
                    ry="4"
                    fill="#071b65"
                  ></rect>
                  <path
                    d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                    fill="#b92932"
                  ></path>
                  <path
                    d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                    fill="#b92932"
                  ></path>
                  <path
                    d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                    fill="#fff"
                  ></path>
                  <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                  <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                  <rect
                    x="14"
                    y="4"
                    width="4"
                    height="24"
                    fill="#b92932"
                  ></rect>
                  <rect
                    x="14"
                    y="1"
                    width="4"
                    height="30"
                    transform="translate(32) rotate(90)"
                    fill="#b92932"
                  ></rect>
                  <path
                    d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                    fill="#b92932"
                  ></path>
                  <path
                    d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                    fill="#b92932"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <div className="text">English</div>
              </div>
              <div
                className="item"
                onClick={() => handleLanguageItemClick("United State")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                >
                  <rect
                    x="1"
                    y="4"
                    width="30"
                    height="24"
                    rx="4"
                    ry="4"
                    fill="#fff"
                  ></rect>
                  <path
                    d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
                    fill="#a62842"
                  ></path>
                  <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
                  <path
                    fill="#a62842"
                    d="M2 15.077H31V16.923000000000002H2z"
                  ></path>
                  <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
                  <path
                    d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z"
                    fill="#102d5e"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"
                  ></path>
                </svg>
                <div className="text">United State</div>
              </div>
              <div
                className="item"
                onClick={() => handleLanguageItemClick("France")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                >
                  <path fill="#fff" d="M10 4H22V28H10z"></path>
                  <path
                    d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                    fill="#092050"
                  ></path>
                  <path
                    d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                    transform="rotate(180 26 16)"
                    fill="#be2a2c"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <div className="text">France</div>
              </div>
            </div>
          </div>
          <div className="dropdown" onClick={toggleCurrencyListVisibility}>
            <div className="wrapper">
              <div className="selected">{selectedCurrency}</div>
            </div>
            <RiArrowDropDownLine className="arrow" />
            <div className={`list ${isCurrencyListVisible ? "show" : ""}`}>
              <div
                className="item"
                onClick={() => handleCurrencyItemClick("EUR")}
              >
                <div className="text">EUR</div>
              </div>
              <div
                className="item"
                onClick={() => handleCurrencyItemClick("AR")}
              >
                <div className="text">USD</div>
              </div>
              <div
                className="item"
                onClick={() => handleCurrencyItemClick("GBR")}
              >
                <div className="text">GBR</div>
              </div>
            </div>
          </div>
          <div className="phone">
            <FaPhone />
            <label htmlFor="#"> +123-456-7890 </label>
          </div>
        </div>
        <div className="right--header">
          <Link to={""}>
            <IoIosGitCompare /> Compare{" "}
          </Link>
          <Link to={"/wishList"}>
            {" "}
            <CiHeart /> <span>{wishListItem.length}</span>WishList
          </Link>
          <Link to={"/"}>
            <CiUser /> Login
          </Link>
        </div>
      </div>
    </section>
  );
};
