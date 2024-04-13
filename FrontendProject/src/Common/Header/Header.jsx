import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Head } from "../Head/Head";

export const Header = () => {
  // const [scrollPos, setScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setVisible(scrollPos > currentScrollPos || currentScrollPos < 10);
  //     setScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPos]);

  return (
    <>
      <Head />
      <Navbar />
    </>
  );
};
