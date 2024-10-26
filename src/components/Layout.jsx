import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
