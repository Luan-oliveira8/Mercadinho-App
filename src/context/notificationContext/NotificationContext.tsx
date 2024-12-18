import React, { createContext, useContext, ReactNode } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationContextProps } from "./NotificationContextProps";

const createFallback = (methodName: string) => {
  return () =>
    console.warn(
      `The function "${methodName}" was called outside of a NotificationProvider.`
    );
};

const defaultNotificationContext: NotificationContextProps = {
  showSuccess: createFallback("showSuccess"),
  showError: createFallback("showError"),
  showInfo: createFallback("showInfo"),
  showWarning: createFallback("showWarning"),
};

const NotificationContext = createContext<NotificationContextProps>(
  defaultNotificationContext
);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const showSuccess = (message: string, options?: ToastOptions) =>
    toast.success(message, options);
  const showError = (message: string, options?: ToastOptions) =>
    toast.error(message, options);
  const showInfo = (message: string, options?: ToastOptions) =>
    toast.info(message, options);
  const showWarning = (message: string, options?: ToastOptions) =>
    toast.warn(message, options);

  return (
    <NotificationContext.Provider
      value={{ showSuccess, showError, showInfo, showWarning }}
    >
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextProps => {
  return useContext(NotificationContext);
};
