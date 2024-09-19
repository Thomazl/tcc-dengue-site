import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { Menu } from "./components/Menu";
import "./index.css";
import ChatSupport from "./components/ChatSupport";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <AppRoutes />
      <ChatSupport />
    </BrowserRouter>
  </StrictMode>
);
