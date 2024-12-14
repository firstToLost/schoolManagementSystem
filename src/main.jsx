import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { DarkModeProvider } from "./contexts/DarkModeProvider.jsx";

import { SidebarProvider } from "./contexts/SidebarProvider.jsx";
import App from "./App.jsx";

import "./main.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <DarkModeProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
