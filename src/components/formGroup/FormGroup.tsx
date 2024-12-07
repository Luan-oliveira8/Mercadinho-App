import React from "react";
import { FormGroup as Form } from "reactstrap";
import { FormGroupProps } from "./FormGroupProps";
import Button from "../button/Button";

const FormGroup: React.FC<FormGroupProps> = ({
  className,
  color,
  style,
  labelButtonSubmit = "Calcelar",
  labelButtonCancel = "Salvar",
  onClickSubmit,
  onClickCancel,
  beforesubmit,
  afterSubmit,
  children,
}) => {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (beforesubmit && onClickSubmit) {
      await beforesubmit();
      onClickSubmit();
    }
    if (afterSubmit && onClickSubmit) {
      await onClickSubmit();
      afterSubmit();
    }
    if (onClickSubmit) {
      onClickSubmit();
    }
    if (onClickCancel) {
      onClickCancel();
    }
  };

  return (
    <Form>
      {children}
      <Button label={labelButtonSubmit} onClick={() => handleFormSubmit} />
      <Button label={labelButtonCancel} onClick={() => onClickCancel} />
    </Form>
  );
};

export default FormGroup;
