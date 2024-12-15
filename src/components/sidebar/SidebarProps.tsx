import { ReactNode } from "react";

export interface SidebarProps {
  menuItems?: MenuItemProps[];
}

export interface MenuItemProps {
  label: string;
  icon: ReactNode;
  path?: string;
}
