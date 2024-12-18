import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { SidebarProvider } from "./context/sidebarContext/SidebarContext";
import { NotificationProvider } from "./context/notificationContext/NotificationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </SidebarProvider>
    </Provider>
  </React.StrictMode>
);
