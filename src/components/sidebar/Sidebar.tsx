import React from "react";
import { Button } from "reactstrap";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaBox,
  FaCog,
  FaInfoCircle,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { useSidebar } from "../../context/sidebarContext/SidebarContext";
import { MenuItemProps } from "./SidebarProps";
import "./Sidebar.css";
import { ROUTE_LIST_PRODUCT } from "../../utils/enums/routeTypeEnum/RouteTypeEnum";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { isExpanded, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const menuItems: MenuItemProps[] = [
    { label: "Dashboard", icon: <FaHome />, path: "/" },
    { label: "Products", icon: <FaBox />, path: ROUTE_LIST_PRODUCT.value },
    { label: "Cart", icon: <FaShoppingCart />, path: "/" },
    { label: "User", icon: <FaUser />, path: "/" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        <h3>{isExpanded ? "Menu" : "M"}</h3>
        <Button color="primary" onClick={toggleSidebar}>
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </Button>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="sidebar-item"
            onClick={() => handleNavigation(item.path)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {isExpanded && <span className="sidebar-label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
