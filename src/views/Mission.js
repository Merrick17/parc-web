import React from "react";
import { Outlet } from "react-router-dom";

const Mission = () => {
  return (
    <div className="content-wrapper">
      <Outlet />
    </div>
  );
};

export default Mission;
