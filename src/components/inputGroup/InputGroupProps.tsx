import { CSSProperties } from "react";

export interface InputGroupProps {
  id: string;
  label: string;
  validation?: boolean;
  type?: string;
  style?: CSSProperties;
  onChange?: () => void;
}
