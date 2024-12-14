import React from "react";
import { FormGroup as Form } from "reactstrap";
import { FormGroupProps } from "./FormGroupProps";
import Button from "../button/Button1";

const FormGroup: React.FC<FormGroupProps> = ({
  className,
  color,
  style,
  labelButtonSubmit = "Submit",
  labelButtonCancel = "Calcelar",
  onSubmit,
  onClickCancel,
  beforesubmit,
  afterSubmit,
  children,
  formProps,
}) => {
  const handleFormSubmit = async (formData?: any) => {
    if (beforesubmit && onSubmit) {
      await beforesubmit();
      onSubmit(formData);
    }
    if (afterSubmit && onSubmit) {
      await onSubmit(formData);
      afterSubmit();
    }
    if (onSubmit) {
      onSubmit(formData);
    }
    if (onClickCancel) {
      onClickCancel();
    }
  };

  return (
    <Form>
      {children}
      <Button
        label={labelButtonSubmit}
        onClick={formProps.handleSubmit(handleFormSubmit)}
      />
    </Form>
  );
};

export default FormGroup;
