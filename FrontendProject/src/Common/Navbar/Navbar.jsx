import React, { useEffect, useState } from "react";
import logoDark from "../../assets/img/logo_dark.png";
import menu_banner11 from "../../assets/img/menu_banner11.jpg";
import menu_banner22 from "../../assets/img/menu_banner22.jpg";
import menu_banner33 from "../../assets/img/menu_banner33.jpg";
import shop_banner1 from "../../assets/img/shop_banner1.jpg";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { axiosConfig } from "../../axios/axiosConfig";
export const Navbar = ({ visible }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  async function getCart() {
    try {
      const { data } = await axiosConfig({
        url: "/cart",
      });
      setCartItem(data);
    } catch (error) {
      console.error("Error fetching Cart", error);
    }
  }

  useEffect(() => {
    getCart(); // Fetch cart data initially
  }, [cartItem]);
  const showSubMenu = (subMenu) => {
    setCurrentSubMenu(subMenu);
    document.querySelector(".mobile-menu-head").classList.add("active");
  };

  const hideSubMenu = () => {
    setCurrentSubMenu(null);
    document.querySelector(".mobile-menu-head").classList.remove("active");
  };

  const menuMainClickHandler = (e) => {
    if (!isMenuActive) return;
    if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
    }
  };

  const goBackClickHandler = () => {
    hideSubMenu();
  };

  const menuTriggerClickHandler = () => {
    toggleMenu();
  };

  const closeMenuClickHandler = () => {
    toggleMenu();
  };

  const overlayClickHandler = () => {
    toggleMenu();
  };

  window.onresize = () => {
    if (window.innerWidth > 991) {
      if (isMenuActive) {
        toggleMenu();
      }
    }
  };
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const numberOfItems = useSelector((state) => state.cart.cart).length;
  return (
    <>
      {/* // <!-- header start --> */}
      <section className="NavBar--main">
        <header class="header">
          <div class="container">
            <div class="row v-center">
              <div class="header-item item-left">
                <div class="logo">
                  <Link to={"/home"}>
                    <img src={logoDark} alt="" />
                  </Link>
                </div>
              </div>
              {/* <!-- menu start here --> */}
              <div
                class="header-item item-center"
                className={`menu-overlay ${isMenuActive ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <div class="menu-overlay" onClick={overlayClickHandler}></div>
                <nav
                  class="menu"
                  className={`menu ${isMenuActive ? "active" : ""}`}
                >
                  <div class="mobile-menu-head">
                    <div
                      class="go-back"
                      // onClick={toggleMenu}
                      onClick={goBackClickHandler}
                    >
                      <i class="fa fa-angle-left"></i>
                    </div>
                    <div class="current-menu-title"></div>
                    <div
                      class="mobile-menu-close"
                      onClick={closeMenuClickHandler}
                    >
                      &times;
                    </div>
                  </div>

                  <ul class="menu-main" onClick={menuMainClickHandler}>
                    {/* <!-- Home --> */}
                    <li class="menu-item-has-children">
                      <Link to="/home">
                        Home <i class="fas fa-angle-down"></i>
                      </Link>
                      <div class="sub-menu single-column-menu">
                        <ul>
                          <li>
                            <a href="#">Fashion 1</a>
                          </li>
                          <li>
                            <a href="#">Fashion 2</a>
                          </li>
                          <li>
                            <a href="#">Furniture 1</a>
                          </li>
                          <li>
                            <a href="#">Furniture 2</a>
                          </li>
                          <li>
                            <a href="#">Electronics 1</a>
                          </li>
                          <li>
                            <a href="#">Electronics 2</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">
                        Pages <i class="fas fa-angle-down"></i>
                      </a>
                      <div class="sub-menu single-column-menu">
                        <ul>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                          <li>
                            <a href="#">Faq</a>
                          </li>
                          <li>
                            <a href="#">404 Error Page</a>
                          </li>
                          <li>
                            <a href="#">Login Page </a>
                          </li>
                          <li>
                            <a href="#">Terms & Conditions </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* <!-- Products --> */}
                    <li class="menu-item-has-children">
                      <a href="#">
                        Products <i class="fa fa-angle-down"></i>
                      </a>
                      <div class="sub-menu mega-menu mega-menu-column-4">
                        <div class="list-item">
                          <h4 class="title">Women's</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <h4 class="title">Men's</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <h4 class="title">Kids's</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <h4 class="title">Accessories</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <img src={menu_banner11} alt="shop" />
                          <div className="list-item-banner">
                            <h6>15% Off</h6>
                            <h4>Men's Fashion</h4>
                            <Link> Shop Now </Link>
                          </div>
                        </div>
                        <div class="list-item">
                          <img src={menu_banner22} alt="shop" />
                          <div className="list-item-banner">
                            <h6>15% Off</h6>
                            <h4>Men's Fashion</h4>
                            <Link> Shop Now </Link>
                          </div>
                        </div>
                        <div class="list-item">
                          <img src={menu_banner33} alt="shop" />
                          <div className="list-item-banner">
                            <h6>15% Off</h6>
                            <h4>Men's Fashion</h4>
                            <Link> Shop Now </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!-- Blogs --> */}
                    <li class="menu-item-has-children">
                      <a href="#">
                        Blog <i class="fas fa-angle-down"></i>
                      </a>
                      <div class="sub-menu single-column-menu">
                        <ul>
                          <li>
                            <a href="#">Standard Layout</a>
                          </li>
                          <li>
                            <a href="#">Grid Layout</a>
                          </li>
                          <li>
                            <a href="#">single Post Layout</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* <!-- Shop --> */}
                    <li class="menu-item-has-children">
                      <a href="#">
                        Shop <i class="fa fa-angle-down"></i>
                      </a>
                      <div class="sub-menu mega-menu mega-menu-column-4">
                        <div class="list-item">
                          <h4 class="title">SHOP PAGE LAYOUT</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <h4 class="title">OTHER PAGES</h4>
                          <ul>
                            <li>
                              <a href="#">Cart</a>
                            </li>
                            <li>
                              <a href="#">Checkout</a>
                            </li>
                            <li>
                              <a href="#">My Account</a>
                            </li>
                            <li>
                              <a href="#">Compare</a>
                            </li>
                            <li>
                              <a href="#">Order Completed</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <h4 class="title">PRODUCT PAGES</h4>
                          <ul>
                            <li>
                              <a href="#">Default</a>
                            </li>
                            <li>
                              <a href="#">Left sidebar</a>
                            </li>
                            <li>
                              <a href="#">Right sidebar</a>
                            </li>
                            <li>
                              <a href="#">Thumbnails Left</a>
                            </li>
                            <li>
                              <a href="#">Order Completed</a>
                            </li>
                          </ul>
                        </div>

                        <div class="list-item">
                          <div className="wrapper--navbar">
                            <div className="image">
                              <img src={shop_banner1} alt="shop" />
                              <div className="content-hover">
                                <p>NEW COLLECTION SALE 30% OFF </p>
                                <div className="Navbar--btn">
                                  <button>Shop Now</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a href="#">Contac Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <!-- menu end here --> */}
              <div class="header-item item-right">
                <Link to={""}>
                  <CiSearch />
                </Link>
                <Link to={"/cart"}>
                  <HiOutlineShoppingCart />
                  <span>{cartItem.length}</span>
                </Link>
                {/* <!-- mobile menu trigger --> */}
                <div
                  class="mobile-menu-trigger"
                  onClick={menuTriggerClickHandler}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* // <!-- header end --> */}
    </>
  );
};
