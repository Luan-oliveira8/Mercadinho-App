import React from "react";
import { Input, Label } from "reactstrap";
import { InputGroupProps } from "./InputGroupProps";

type InputType =
  | "text"
  | "password"
  | "email"
  | "tel"
  | "number"
  | "file"
  | "date"
  | "datetime-local"
  | "time"
  | "checkbox"
  | "radio"
  | "search";

const InputGroup: React.FC<InputGroupProps & { type?: InputType }> = ({
  id,
  label,
  validation,
  type = "text",
  style,
  onChange,
}) => {
  return (
    <div className="input-group" style={style}>
      <Label>{label}</Label>
      <Input
        id={id}
        validation={validation}
        type={type}
        onChange={onChange}
        invalid={validation}
      />
    </div>
  );
};

export default InputGroup;
