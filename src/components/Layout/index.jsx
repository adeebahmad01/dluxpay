import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  }
  ,
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact Us",
    link: "/contact",
  }
];

const Layout = ({ children }) => {
  return (
    <>
      <Header links={links} />
      {children}
      <Footer links={links} />
    </>
  );
};

export default Layout;
