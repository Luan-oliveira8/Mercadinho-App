import React from "react";
import { FormFeedback, Input, Label } from "reactstrap";
import { InputGroupProps } from "./InputGroupProps";
import { Control, Controller } from "react-hook-form";

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

const InputGroup: React.FC<
  InputGroupProps & { control: Control<any>; type?: InputType }
> = ({ name, label, validation, type = "text", style, control }) => {
  return (
    <div style={style}>
      <Label for={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={validation}
        render={({ field, fieldState }) => (
          <>
            <Input
              {...field}
              type={type}
              id={name}
              invalid={!!fieldState?.error}
            />
            {fieldState?.error && (
              <FormFeedback>{fieldState.error.message}</FormFeedback>
            )}
          </>
        )}
      />
    </div>
  );
};

export default InputGroup;
