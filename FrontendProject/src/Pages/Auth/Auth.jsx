import React, { useState } from "react";
import { Collapse } from "../../Components/Collapse/Collapse";
import { Login } from "../../Components/Login/Login";
import { Register } from "../../Components/Register/Register";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";

export const Auth = () => {
  const [collapseIndex, setCollapseIndex] = useState(1); // Default to Login
  const collapse = [
    {
      id: 1,
      text: "Dont Have and Account? Sign Up Now ",
      component: <Login />,
    },
    {
      id: 2,
      text: " Already have an account? Log in ",
      component: <Register setCollapseIndex={setCollapseIndex} />,
    },
  ];

  const toggleCollapse = () => {
    setCollapseIndex(collapseIndex === 1 ? 2 : 1); // Toggle between Login and Register
  };

  return (
    <div className="Auth--body">
      <div className="Auth--breadcrumb">
        <BreadCrumb text={"Authenticateion Page"} content={"Authentication"} />
      </div>{" "}
      <div className="Auth--container">
        <div className="Auth--box">
          <div className="Auth--AuthPages">
            {collapse.map((component) =>
              collapseIndex === component.id ? component.component : null
            )}
          </div>
          <div className="Auth--header" onClick={toggleCollapse}>
            {collapse[collapseIndex - 1].text} {/* Display current text */}
          </div>
        </div>
      </div>
    </div>
  );
};
