import { Control } from "react-hook-form";

export interface RadioOption {
  name: string;
  label: string;
  value: string;
}

export interface RadioProps {
  options: RadioOption[];
  control: Control<any>;
  name: string;
}
