import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
