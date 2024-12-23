import { CSSProperties } from "react";
import { Control, RegisterOptions } from "react-hook-form";

export interface InputGroupProps {
  name: string;
  label: string;
  validation?: RegisterOptions<any>;
  style?: CSSProperties;
  disabled?: boolean;
  integer?: boolean;
  control: Control<any>;
}
