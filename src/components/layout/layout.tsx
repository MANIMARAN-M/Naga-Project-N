/**Imports of React libraries */
import React, { useState } from "react";

// import { useSelector } from "react-redux";

// Import of sidebar component
import ProSidebarMenu from "./sidebar";

// Import Pro sidebar
import "react-pro-sidebar/dist/css/styles.css";
import Header from "./Header";
import { HamburgerIcon } from "../reusableComponents/svgIcons";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      <div className={`mainApp ${isMenuOpened ? "menuActive" : ""}`}>
        <button className="hamburger" onClick={() => setIsMenuOpened(!isMenuOpened)}><HamburgerIcon /></button>
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
