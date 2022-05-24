import React from "react";
import { Outlet } from "react-router-dom";

const ficheTech = () => {
  return (
    <div className="content-wrapper">
      <Outlet />
    </div>
  );
};

export default ficheTech;
