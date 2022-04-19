import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "../components/Menu";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname != "/" ? <Menu /> : <div></div>}
      <Outlet />
    </div>
  );
};

export default Layout;
