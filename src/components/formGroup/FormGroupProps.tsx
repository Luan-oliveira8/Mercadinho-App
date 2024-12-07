import { CSSProperties } from "react";

export interface FormGroupProps {
  labelButtonSubmit?: string;
  labelButtonCancel?: string;
  className?: string;
  color?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  onClickSubmit?: () => unknown;
  onClickCancel?: () => void;
  afterSubmit?: () => unknown;
  beforesubmit?: () => unknown;
}
