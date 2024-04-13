import React from "react";
import { Link, useLocation } from "react-router-dom";

export const BreadCrumb = ({ link, text }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const pathNames = pathname.split("/").filter((x) => x);
  console.log(pathNames);
  let breadCrumbPath = "";

  return (
    <>
      <div className="breadcrumb--container">
        <div className="breadcrumb--content">
          <div className="page-title">
            <h3>
              {link} {text}
            </h3>
          </div>
          <p>
            <Link to="/home">Home</Link>
            {pathNames.map((namePath, index) => {
              // Update breadcrumb path, not used in JSX directly but can be logged or used otherwise
              breadCrumbPath += ` > ${namePath}`;
              const isLast = index === pathNames.length - 1;
              // Return the span with key
              return isLast ? (
                <span key={breadCrumbPath}> / {namePath}</span>
              ) : (
                <span key={breadCrumbPath}>
                  {" "}
                  / <Link to={breadCrumbPath}> {namePath}</Link>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
};
