import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../../axios/axiosConfig";
import { Card } from "../../Card/Card";
export const ExclProduct = () => {
  const [products, setProducts] = useState([]);
  async function getAllProducts() {
    const { data } = await axiosConfig({
      url: "/products",
    });
    console.log(data);
    setProducts(data);
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className="ExclProducts">
        <h1>Exclusive Products</h1>
        <div className="Excl--options">
          <ul>
            <li>
              {" "}
              <Link to={""}> New Arrival </Link>
            </li>
            <li>
              {" "}
              <Link to={""}> Best Seller </Link>
            </li>
            <li>
              {" "}
              <Link to={""}> Featured </Link>
            </li>
            <li>
              {" "}
              <Link to={""}> Special Offers </Link>
            </li>
          </ul>
        </div>
        <div className="Excl--Container">
          {products?.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};
