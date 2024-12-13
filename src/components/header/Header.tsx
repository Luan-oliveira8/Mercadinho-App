import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <Link to="/login">
          <Button label="Login" />
        </Link>
        <Link to="/user/register">
          <Button label="Register User" />
        </Link>
        <Link to="/product/list">
          <Button label="Product List" />
        </Link>
        <Link to="/product/register">
          <Button label="Register Product" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
