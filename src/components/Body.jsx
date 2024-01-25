import React from "react";
import Siderbar from "./Siderbar";
import ChatWindow from "./ChatWindow";

const Body = () => {
  return (
    <div className="flex">
      <Siderbar />
      <ChatWindow />
    </div>
  );
};

export default Body;
