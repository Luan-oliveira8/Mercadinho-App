import React, { ReactNode } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useSidebar } from "../../context/sidebarContext/SidebarContext";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isExpanded } = useSidebar();
  console.log(isExpanded);

  return (
    <div className="container">
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
