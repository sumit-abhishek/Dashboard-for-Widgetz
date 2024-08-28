import React from "react";
import { Outlet } from "react-router-dom";
import Hearder from "./Components/Header/Hearder";
const Layout = () => {
  return (
    <>
      <Hearder />
      <Outlet />
    </>
  );
};

export default Layout;
