import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Home from "./Home";
import About from "./About";

function Layout() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Home />
          <About />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
