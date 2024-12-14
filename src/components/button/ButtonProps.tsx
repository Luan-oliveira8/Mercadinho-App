import { CSSProperties } from "react";

export interface ButtonProps {
  label: string;
  className?: string;
  color?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
