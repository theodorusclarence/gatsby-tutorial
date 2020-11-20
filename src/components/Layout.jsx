import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/index.scss";
import layoutStyles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
