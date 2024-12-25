import React from "react";
import cx from "classnames";
import { FormFeedback, Input, Label } from "reactstrap";
import { InputGroupProps } from "./InputGroupProps";
import { Controller } from "react-hook-form";
import { removeNonIntegerChars } from "../../utils/validationUtils/validationUtils";
import Button from "../button/Button";

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
  labelButton = "",
  onclickButton,
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
          <div className="d-flex">
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
            <Button
              label={labelButton}
              onClick={onclickButton}
              className={cx("ms-2", { "d-none": !labelButton })}
            />
          </div>
        )}
      />
    </div>
  );
};

export default InputGroup;
