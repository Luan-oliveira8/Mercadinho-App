import React, { ReactNode } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useSidebar } from "../../context/sidebarContext/SidebarContext";
import "./Layout.css";
import cx from "classnames";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isExpanded } = useSidebar();

  return (
    <div>
      <Sidebar />
      <div
        className={cx("content-wrapper", {
          expanded: isExpanded,
          collapsed: !isExpanded,
        })}
      >
        <Header />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
