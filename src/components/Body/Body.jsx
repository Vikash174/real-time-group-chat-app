import React from "react";

import { Outlet } from "react-router-dom";
import Siderbar from "../Sidebar/Siderbar";

const Body = () => {
  return (
    <div className="flex overflow-hidden w-screen">
      <Siderbar />

      <Outlet />
    </div>
  );
};

export default Body;
