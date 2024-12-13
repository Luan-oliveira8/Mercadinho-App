import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductListView from "../views/productListView/ProductListView";
import UserRegisterView from "../views/userRegister/UserRegisterView";
import UserLoginView from "../views/userlogin/UserLoginView";
import ProductRegisterView from "../views/productRegister/ProductRegisterView";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import Layout from "../components/layout/Layout";

const AppRoutes: React.FC = () => {
  const { currentUser } = useSelector((state: any) => state.userReducer);

  const isLogged = currentUser?.isLogged;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <UserLoginView />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <UserLoginView />
        </Layout>
      ),
    },
    {
      path: "/user/register",
      element: (
        <Layout>
          <UserRegisterView />
        </Layout>
      ),
    },
    {
      path: "/product/register",
      element: (
        <PrivateRoute isLogged={isLogged}>
          <Layout>
            <ProductRegisterView />
          </Layout>
        </PrivateRoute>
      ),
    },
    {
      path: "/product/list",
      element: (
        <PrivateRoute isLogged={isLogged}>
          <Layout>
            <ProductListView />
          </Layout>
        </PrivateRoute>
      ),
    },
    {
      path: "*",
      element: <UserLoginView />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
