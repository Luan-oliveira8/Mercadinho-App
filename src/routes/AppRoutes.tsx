import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductListView from "../views/productListView/ProductListView";
import UserRegisterView from "../views/userRegister/UserRegisterView";
import UserLoginView from "../views/userlogin/UserLoginView";
import ProductManageView from "../views/productManage/ProductManageView";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import Layout from "../components/layout/Layout";
import {
  ROUTE_EDIT_PRODUCT,
  ROUTE_LIST_PRODUCT,
  ROUTE_LOGIN,
  ROUTE_REGISTER_PRODUCT,
  ROUTE_REGISTER_USER,
} from "../utils/enums/routeTypeEnum/RouteTypeEnum";

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
      path: ROUTE_LOGIN.value,
      element: (
        <Layout>
          <UserLoginView />
        </Layout>
      ),
    },
    {
      path: ROUTE_REGISTER_USER.value,
      element: (
        <Layout>
          <UserRegisterView />
        </Layout>
      ),
    },
    {
      path: ROUTE_REGISTER_PRODUCT.value,
      element: (
        <PrivateRoute isLogged={isLogged}>
          <Layout>
            <ProductManageView />
          </Layout>
        </PrivateRoute>
      ),
    },
    {
      path: ROUTE_EDIT_PRODUCT.value,
      element: (
        <PrivateRoute isLogged={isLogged}>
          <Layout>
            <ProductManageView />
          </Layout>
        </PrivateRoute>
      ),
    },
    {
      path: ROUTE_LIST_PRODUCT.value,
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
