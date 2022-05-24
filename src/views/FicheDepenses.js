import React from "react";
import { Outlet } from "react-router-dom";

const FicheDep = () => {
  return (
    <div className="content-wrapper">
      <Outlet />
    </div>
  );
};

export default FicheDep;
