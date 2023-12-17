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
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const history = useNavigate();
  const location = useLocation();
  const userDetails = useSelector(
    (state: RootState) => state.loginData
  );

  React.useEffect(() => {
    if(userDetails){
      !userDetails.isLoggedIN ? history("/login") : location.pathname === "/login" && history("/")
    }
  }, [userDetails]);

  return (
    <>
      <div className="mainApp">
        {/* <button className="hamburger" onClick={setIsMenuOpened}><HamburgerIcon /></button> */}
        {/* <aside className="sidebarAside">
          <ProSidebarMenu />
        </aside> */}
          <div className="mainPages">
          {userDetails.isLoggedIN && <Header />}
          <div className="p-3">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
