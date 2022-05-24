import React from "react";
import { Outlet } from "react-router-dom";

const Reclamation = () => {
  return (
    <div className="content-wrapper">
      <Outlet />
    </div>
  );
};

export default Reclamation;
