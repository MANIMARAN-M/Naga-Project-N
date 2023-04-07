/**Imports of React libraries */
import React, { useState } from "react";

// import { useSelector } from "react-redux";

// Import of sidebar component
import ProSidebarMenu from "./sidebar";

// Import Pro sidebar
import "react-pro-sidebar/dist/css/styles.css";
import Header from "./Header";
import { HamburgerIcon } from "../reusableComponents/svgIcons";

import $ from "jquery";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const setIsMenuOpened = () => {
    console.log("first")
    $(".mainApp").toggleClass("menuActive");
  }
  return (
    <>
      <div className="mainApp">
        <button className="hamburger" onClick={setIsMenuOpened}><HamburgerIcon /></button>
        <aside className="sidebarAside">
          <ProSidebarMenu />
        </aside>
        <div className="mainPages">
          <Header />
          <div className="p-3">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
