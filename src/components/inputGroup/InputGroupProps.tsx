import { CSSProperties } from "react";
import { RegisterOptions } from "react-hook-form";

export interface InputGroupProps {
  name: string;
  label: string;
  validation?: RegisterOptions<any>;
  style?: CSSProperties;
  disabled?: boolean;
  integer?: boolean;
}
