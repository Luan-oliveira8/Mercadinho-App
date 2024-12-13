import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListView from "../views/productListView/ProductListView";
import UserRegisterView from "../views/userRegister/UserRegisterView";
import UserLoginView from "../views/userlogin/UserLoginView";
import ProductRegisterView from "../views/productRegister/ProductRegisterView";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLoginView />} />
        <Route path="/user/login" element={<UserLoginView />} />
        <Route path="/user/register" element={<UserRegisterView />} />
        <Route path="/product/list" element={<ProductListView />} />
        <Route path="/product/create" element={<ProductRegisterView />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
