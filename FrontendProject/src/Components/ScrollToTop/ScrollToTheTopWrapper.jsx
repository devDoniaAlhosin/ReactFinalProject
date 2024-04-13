import React from "react";
import ScrollToTop from "./ScrollToTop";

export const ScrollToTheTopWrapper = ({ children }) => {
  return (
    <div>
      <ScrollToTop />
      {children}
    </div>
  );
};
