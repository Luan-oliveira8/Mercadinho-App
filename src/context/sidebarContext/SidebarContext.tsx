import React, { createContext, useContext, useState, ReactNode } from "react";
import { SidebarContextProps } from "./SidebarContextProps";

const defaultSidebarContext: SidebarContextProps = {
  isExpanded: false,
  toggleSidebar: () => {},
};

const SidebarContext = createContext<SidebarContextProps>(
  defaultSidebarContext
);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isExpanded, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextProps => {
  return useContext(SidebarContext);
};
