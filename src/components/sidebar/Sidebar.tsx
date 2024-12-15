import React, { useState } from "react";
import { Button } from "reactstrap";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaBox,
  FaCog,
  FaInfoCircle,
} from "react-icons/fa";
import "./Sidebar.css";
import { MenuItemProps, SidebarProps } from "./SidebarProps";

const Sidebar: React.FC<SidebarProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems: MenuItemProps[] = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Products", icon: <FaBox />, path: "/products" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
    { label: "About", icon: <FaInfoCircle />, path: "/about" },
  ];

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      {/* Header da Sidebar */}
      <div className="sidebar-header">
        <h3>{isExpanded ? "Menu" : "M"}</h3>
        <Button color="primary" onClick={toggleSidebar}>
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </Button>
      </div>

      {/* Menu da Sidebar */}
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <span className="sidebar-icon">{item.icon}</span>
            {isExpanded && <span className="sidebar-label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
