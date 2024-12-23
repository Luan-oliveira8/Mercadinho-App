import React from "react";
import { Controller } from "react-hook-form";
import { Input, Label } from "reactstrap";
import { RadioProps } from "./RadioProps";

const Radio: React.FC<RadioProps> = ({
  options,
  control,
  name,
  label,
  className,
}) => {
  return (
    <div className={className}>
      <Label for={name}>{label}</Label>
      <div className="d-flex">
        {options.map((option, index) => (
          <div key={index} className="me-2">
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <Label check>
                  <Input
                    type="radio"
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <span className="ms-2">{option.label}</span>
                </Label>
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
