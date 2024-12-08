import React from "react";
import { Button as ReactstrapButton } from "reactstrap";
import { ButtonProps } from "./ButtonProps";

const Button: React.FC<ButtonProps> = ({
  label,
  style,
  onClick,
  className,
  color,
}) => {
  return (
    <ReactstrapButton
      onClick={onClick}
      style={style}
      className={className}
      color={color}
      type="submit"
    >
      {label}
    </ReactstrapButton>
  );
};

export default Button;
