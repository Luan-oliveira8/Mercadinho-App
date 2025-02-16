import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductListView from "../views/productList/ProductListView";
import UserManageView from "../views/userManage/UserManageView";
import UserLoginView from "../views/userlogin/UserLoginView";
import ProductManageView from "../views/productManage/ProductManageView";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import Layout from "../components/layout/Layout";
import CartManageView from "../views/cartManage/CartManageView";
import {
  CART_MANAGE,
  HOME,
  ROUTE_EDIT_PRODUCT,
  ROUTE_EDIT_USER,
  ROUTE_LIST_PRODUCT,
  ROUTE_LOGIN,
  ROUTE_REGISTER_PRODUCT,
  ROUTE_REGISTER_USER,
} from "../utils/enums/routeTypeEnum/RouteTypeEnum";
import HomeView from "../views/home/homeView";

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
          <UserManageView />
        </Layout>
      ),
    },
    {
      path: HOME.value,
      element: (
        <Layout>
          <HomeView />
        </Layout>
      ),
    },
    {
      path: ROUTE_REGISTER_PRODUCT.value,
      element: (
        <PrivateRoute isLogged={isLogged}>
          <Layout>
            <ProductManageView key="register" />
          </Layout>
        </PrivateRoute>
      ),
    },
    {
      path: ROUTE_EDIT_PRODUCT.value,
      element: (
        <PrivateRoute isLogged={isLogged}>
          <Layout>
            <ProductManageView key="edit" />
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
      path: ROUTE_EDIT_USER.value,
      element: (
        <PrivateRoute isLogged={isLogged}>
          <Layout>
            <UserManageView />
          </Layout>
        </PrivateRoute>
      ),
    },
    {
      path: CART_MANAGE.value,
      element: (
        <PrivateRoute isLogged={isLogged}>
          <Layout>
            <CartManageView />
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
