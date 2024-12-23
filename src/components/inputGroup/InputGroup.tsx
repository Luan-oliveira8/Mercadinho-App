import React from "react";
import { FormFeedback, Input, Label } from "reactstrap";
import { InputGroupProps } from "./InputGroupProps";
import { Controller } from "react-hook-form";
import { removeNonIntegerChars } from "../../utils/validationUtils/validationUtils";

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
  name,
  label,
  validation,
  type = "text",
  style,
  control,
  disabled = false,
  integer = false,
}) => {
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
              disabled={disabled}
              onInput={(e: any) => {
                if (integer) {
                  // TODO futuraly refactor this code to use generic method that will only receive a type, which will be an enum.
                  e.target.value = removeNonIntegerChars(e.target.value);
                }
              }}
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
