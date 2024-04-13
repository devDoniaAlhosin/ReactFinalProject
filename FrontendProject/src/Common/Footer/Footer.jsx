import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterLogo from "../../assets/img/logo_light.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import vsa from "../../assets/img/visa.png";
import usa from "../../assets/img/amarican_express.png";
import master from "../../assets/img/master_card.png";
import paypal from "../../assets/img/paypal.png";
import { Subscribe } from "../../Components/HomePageParts/Subscribe/Subscribe";
import ScrollToTop from "react-scroll-to-top";
export const Footer = () => {
  return (
    <>
      <Subscribe />
      <section className="footer">
        <ScrollToTop smooth top={100} width={20} height={28} color="#ff324d" />
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="footer-items">
                <img src={FooterLogo} alt="" />
                <p>
                  If you are going to use of Lorem Ipsum need to be sure there
                  isn't hidden of text
                </p>
                <div className="footer-icon">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaGooglePlusG />
                  </a>
                  <a href="#">
                    <RiYoutubeLine />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div className="footer-items">
                <h6>Quick Links</h6>
                <ul className="footer-list">
                  <li>
                    <a href="#">Useful Links</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Location</a>
                  </li>
                  <li>
                    <a href="#">Get Coupon</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-items">
                <h6>Category</h6>
                <ul className="footer-list">
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Women </a>
                  </li>
                  <li>
                    <a href="#">Kids</a>
                  </li>
                  <li>
                    <a href="#"> Best Sellers</a>
                  </li>
                  <li>
                    <a href="#"> Best Sellers</a>
                  </li>
                </ul>
              </div>
              <div className="footer-items">
                <h6>My Account</h6>
                <ul className="footer-list">
                  <li>
                    <a href="#">Frequently Asked Questions</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Report a Payment Issue</a>
                  </li>
                  <li>
                    <a href="#">Report a Payment Issue</a>
                  </li>
                </ul>
              </div>
              <div className="footer-items">
                <h6>Contact Info</h6>
                <ul className="footer-list">
                  <li>
                    <a href="#">
                      <FiMapPin />
                      123 Street, Old Trafford, New South London , UK
                    </a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#">
                      <CiMail />
                      info@sitename.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IoIosPhonePortrait />+ 457 789 789 65
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row-vsa">
              <p>© 2020 All Rights Reserved by Bestwebcreator</p>
              <div className="footer-vsa">
                <img src={vsa} alt="" />
                <img src={usa} alt="" />
                <img src={master} alt="" />
                <img src={paypal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
