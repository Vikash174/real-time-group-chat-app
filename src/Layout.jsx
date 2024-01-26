import React from "react";
import Header from "./components/Header/Header";
import Siderbar from "./components/Sidebar/Siderbar";

import Body from "./components/Body/Body";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};

export default Layout;
