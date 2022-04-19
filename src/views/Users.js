import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="content-wrapper">
      <Outlet />
    </div>
  );
};

export default Users;
