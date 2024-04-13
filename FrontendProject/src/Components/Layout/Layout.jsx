import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Common/Header/Header";
import { Footer } from "../../Common/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
