import React from "react";

export const Subscribe = () => {
  return (
    <div className="subscribe--container">
      <div className="subscribe--content">
        <div className="subscribe--text">
          <h3>Subscribe Our Newsletter</h3>
        </div>
        <div className="subscribe--searchBar">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email Address"
          />
          <div className="subscribe--btn">
            <button> Subscribe </button>
          </div>
        </div>
      </div>
    </div>
  );
};
