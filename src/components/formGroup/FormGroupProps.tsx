import { CSSProperties } from "react";
import { FieldValue, UseFormProps, UseFormReturn } from "react-hook-form";

export interface FormGroupProps {
  labelButtonSubmit?: string;
  labelButtonCancel?: string;
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
