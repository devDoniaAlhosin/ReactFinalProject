import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { FaRegTrashCan } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../axios/axiosConfig";
import { MdRemoveShoppingCart } from "react-icons/md";

export const Cart = () => {
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
    getCart();
  }, []);

  const handleQuantityChange = (index, quantity) => {
    const updatedCart = [...cartItem];
    updatedCart[index].quantity = quantity;
    setCartItem(updatedCart);
  };

  const handleRemoveItem = async (productId) => {
    try {
      await axiosConfig({
        method: "delete",
        url: `/cart/${productId}`,
      });
      // Update the local state after successful deletion
      const updatedCart = cartItem.filter((item) => item.id !== productId);
      setCartItem(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  const calculateSubtotal = () => {
    return cartItem.reduce((total, item) => {
      const price = item.onSale ? item.new_price : item.old_price;
      return total + price * (item.quantity || 1);
    }, 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.05; // Assuming tax is 5%
  };

  const calculateTotal = (subtotal) => {
    return subtotal + calculateTax(subtotal) + 15; // Adding shipping cost of $15
  };

  return (
    <>
      <BreadCrumb text={"Cart"} content={"Cart Page"} />
      <div className="cart--wrapper">
        <h1>Shopping Cart</h1>
        {cartItem.length === 0 ? (
          <div className="cart--empty">
            <MdRemoveShoppingCart size={60} />
            <h4>The Cart is Empty.</h4>
            <div className="empty-wishlist-btn">
              <button>
                {" "}
                <Link to={"/home"}>Back To Home Page</Link>{" "}
              </button>
            </div>
          </div>
        ) : (
          <div className="cart--project">
            <div className="cart--shop">
              {cartItem.map((cart, index) => (
                <div key={index} className="cart--box">
                  <img src={cart.img} alt="" />
                  <div className="cart--content">
                    <h3>{cart.product_name.substring(0, 20)} ..</h3>
                    <h4>
                      Price: ${cart.onSale ? cart.new_price : cart.old_price}
                    </h4>
                    <p className="cart--unit">
                      Quantity:{" "}
                      <input
                        type="number"
                        value={cart.quantity || 1}
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                      />
                    </p>
                    <p className="btn--area">
                      <button onClick={() => handleRemoveItem(cart.id)}>
                        <FaRegTrashCan size={15} />
                        <span className="btn2"> Remove </span>
                      </button>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="right-bar">
              <p>
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </p>
              <hr />
              <p>
                <span>Tax (5%)</span>
                <span>${calculateTax(calculateSubtotal()).toFixed(2)}</span>
              </p>
              <hr />
              <p>
                <span>Shipping</span>
                <span>$15</span>
              </p>
              <hr />
              <p>
                <span>Total</span>
                <span>${calculateTotal(calculateSubtotal()).toFixed(2)}</span>
              </p>
              <Link to={""}>
                <BsCartCheckFill />
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
