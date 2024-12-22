import React from "react";
import { Controller } from "react-hook-form";
import { Input, Label } from "reactstrap";
import { RadioProps } from "./RadioProps";

const Radio: React.FC<RadioProps> = ({ options, control, name }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="mb-2">
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
                {option.label}
              </Label>
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Radio;
