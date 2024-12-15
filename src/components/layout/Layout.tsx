import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { LayoutProps } from "./LayoutProps";

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
