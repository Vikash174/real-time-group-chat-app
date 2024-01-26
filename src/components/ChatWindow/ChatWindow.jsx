import React from "react";
import { useParams } from "react-router-dom";

const ChatWindow = () => {
  const { roomId } = useParams();

  return <div>{roomId}</div>;
};

export default ChatWindow;
