import { Button, Link } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="error-content">
        <h1> 404 </h1>
        <h4> Opps! Page Not Found </h4>
        <p>
          Sorry , The Page you're Looking For doesn't exist . if you think
          something is broken , report a Problem{" "}
        </p>

        {/* <div className="form--btn">
          <button type="submit">
            <NavLink to={"/"}> Return To Home Page </NavLink>
          </button>
        </div> */}
        <div className="form--btn">
          <button variant="contained" onClick={() => navigate("/home")}>
            Return To Home Page
          </button>
        </div>
      </div>
    </div>
  );
};
