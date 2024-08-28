import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardProvider } from "./Context/DashboardContext.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DashboardProvider>
      <RouterProvider router={router} />
    </DashboardProvider>
  </StrictMode>
);
