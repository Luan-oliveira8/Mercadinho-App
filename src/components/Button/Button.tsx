import React from "react";
import { ButtonProps, Button as ReactstrapButton } from "reactstrap";

const Button: React.FC<ButtonProps> = ({ label, style, onClick }) => {
  return (
    <ReactstrapButton onClick={onClick} style={style}>
      {label}
    </ReactstrapButton>
  );
};

export default Button;
