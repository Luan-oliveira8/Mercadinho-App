import { CSSProperties } from "react";

export interface ButtonProps {
  label: string;
  style?: CSSProperties;
  onClick: () => void;
}
