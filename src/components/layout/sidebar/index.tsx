// Import Pro sidebar
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";

// Import navigation link
import { useLocation, Link } from "react-router-dom";

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
  ]
  return (
    <div className="sidebar">
      <ProSidebar>
        <SidebarContent>
          {SidebarConfig.map((data, index) => (
            <Menu>
              <MenuItem
                key={index}
                active={location.pathname === data.path}>
                {data.name}
                <Link to={data.path} />
              </MenuItem>
            </Menu>
          ))}
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default ProSidebarMenu;
