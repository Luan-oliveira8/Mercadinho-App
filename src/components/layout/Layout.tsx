import React from "react";
import Header from "../header/Header";
import { LayoutProps } from "./LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
