import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App1 from "./App1";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App1 />
    </Provider>
  </React.StrictMode>
);
