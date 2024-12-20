import { CSSProperties } from "react";
import { UseFormReturn } from "react-hook-form";

export interface FormGroupProps {
  labelButtonSubmit?: string;
  labelButtonCancel?: string;
  labelButtonInclude?: string;
  routeInclude?: string;
  routeCancel?: string;
  hidenButtonCancel?: boolean;
  className?: string;
  color?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  onSubmit?: (formData: any) => unknown;
  onClickCancel?: () => void;
  afterSubmit?: () => unknown;
  beforesubmit?: () => unknown;
  formProps: UseFormReturn;
}
