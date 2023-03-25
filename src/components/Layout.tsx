import React, { ReactElement } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = (): ReactElement => {
  return (
    <div className="app">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
