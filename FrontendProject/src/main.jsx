import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/App/App.scss";
import { UserAuthProvider } from "./utilies/UserAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserAuthProvider>
    <App />
  </UserAuthProvider>
);
