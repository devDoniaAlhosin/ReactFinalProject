import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { axiosConfig } from "../../axios/axiosConfig";
import { LuHeartOff } from "react-icons/lu";
import { MdRemoveShoppingCart } from "react-icons/md";

export const WishList = () => {
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
  }, []);

  const deleteItemFromWishList = async (itemId) => {
    try {
      // Assuming you have an API endpoint to delete an item from the wishlist
      await axiosConfig({
        method: "DELETE",
        url: `/wishList/${itemId}`,
      });
      // After deletion, fetch the updated wishlist or remove the item from the state
      const updatedWishList = wishListItem.filter((item) => item.id !== itemId);
      setWishListItem(updatedWishList);
    } catch (error) {
      console.error("Error deleting wishlist item", error);
    }
  };

  return (
    <>
      <BreadCrumb text={"WishList"} />
      <div className="wishList--container">
        {wishListItem.length > 0 ? (
          <div className="wishList--items">
            {wishListItem.map((data, index) => (
              <div key={index} className="wishList--card">
                <div className="wishlist-img">
                  <button onClick={() => deleteItemFromWishList(data.id)}>
                    <IoMdClose />
                  </button>
                  <img src={data.img} alt="" />
                </div>
                <div className="wishlist--content">
                  <h4>
                    <Link to={`/product/${data.id}`}>
                      {data.product_name.substring(0, 30)}...
                    </Link>
                  </h4>
                  <div className="wishlist-price">
                    {data.onSale ? (
                      <>
                        <span> ${data.new_price} </span>
                        <del>${data.old_price}</del>
                      </>
                    ) : (
                      <span> ${data.old_price} </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="cart--empty">
            <MdRemoveShoppingCart size={60} />
            <h4>The WishList is Empty.</h4>
            <div className="empty-wishlist-btn">
              <button>
                {" "}
                <Link to={"/home"}>Back To Home Page</Link>{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
