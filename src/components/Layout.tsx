import React, { ReactElement } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = (): ReactElement => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <footer>Copyright etc..</footer>
    </div>
  );
};

export default Layout;
