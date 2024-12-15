import React from "react";
import Header from "../header/Header";
import { LayoutProps } from "./LayoutProps";
import Sidebar from "../sidebar/Sidebar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
