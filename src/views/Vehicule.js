import React from "react";
import { Outlet } from "react-router-dom";

const Vehicule = () => {
  return (
    <div className="content-wrapper">
      <Outlet />
    </div>
  );
};

export default Vehicule;
