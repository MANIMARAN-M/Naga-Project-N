// Import Pro sidebar
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";

// Import navigation link
import { useLocation, Link } from "react-router-dom";
import $ from "jquery";

function ProSidebarMenu() {
  const location = useLocation();
  const SidebarConfig = [
    {
      name: "Tab One",
      path: "/"
    },
    {
      name: "Tab Two",
      path: "/tab-two"
    },
    {
      name: "Tab Three",
      path: "/tab-three"
    },
    {
      name: "Tab Four",
      path: "/tab-four"
    },
    {
      name: "Tab Five",
      path: "/tab-five"
    },
    {
      name: "Tab Six",
      path: "/tab-six"
    },
    {
      name: "Dropdowns",
      path: "/dropdown-api"
    }
  ]

  $(".pro-item-content a").on('click', () => {
    $(".mainApp").removeClass("menuActive");
  })
  return (
    <div className="sidebar">
      <ProSidebar>
        <SidebarContent>
          {SidebarConfig.map((data, index) => (
            <Menu key={index}>
              <MenuItem
                active={location.pathname === data.path}>
                {data.name}
                <Link to={data.path} />
              </MenuItem>
            </Menu>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <div className="sidebarFooterFlex justify-content-center">
            <div className="sidebarFooterHelp">
                <div className="sidebarFooterTitle">Company</div>
            </div>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default ProSidebarMenu;
