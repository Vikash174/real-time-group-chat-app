import React, { useState } from "react";
import { FaCaretDown, FaEdit } from "react-icons/fa";
import { HiOutlineHashtag } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { FiHeadphones } from "react-icons/fi";

import db from "../../firebase-config";

import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import useFetchDataFromFirestore from "../../custom_hooks/useFetchDataFromFirestore";
import { SIDEBAR_OPTIONS } from "../../utils/constants";

const Siderbar = () => {
  // Calling custom hook to get data from firestore
  const channels = useFetchDataFromFirestore();

  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="bg-gray-800 w-[16%] text-white  h-screen ">
      {/* USER DETAILS  */}
      <div className="flex justify-between  p-2 border-b ">
        <span>Vikash Rai</span>
        <FaEdit />
      </div>

      {/* SLACK OPTIONS */}
      <div className="border-b ">
        {SIDEBAR_OPTIONS.map((options) => (
          <SidebarOption icon={<options.icon />} optionName={options.name} />
        ))}
      </div>

      {/* CHANNELS */}
      <div className="border-b">
        <SidebarOption icon={<FaCaretDown />} optionName={"Channels"} />

        <div className="max-h-80 overflow-y-scroll no-scrollbar">
          {channels.map(
            (
              channel // Maping channels
            ) => (
              <SidebarOption
                key={channel.id}
                icon={<HiOutlineHashtag />}
                optionName={channel.name}
                id={channel.id}
              />
            )
          )}
        </div>
        <SidebarOption
          icon={<IoMdAddCircle />}
          optionName={"Add channels"}
          addChannelOption={true}
        />
      </div>

      <div className="flex justify-between border-t w-[260px] rounded-tl-md p-2 rounded-tr-md absolute bottom-0">
        <span>general ^</span>
        <div
          className={`w-12 h-6 border rounded-full flex items-center cursor-pointer transition-all duration-300 ease-in-out ${
            isClicked ? "bg-blue-500" : ""
          }`}
          onClick={handleButtonClick}
        >
          <div
            className={`w-4 h-4 mx-1 bg-white rounded-full transition-transform ${
              isClicked ? "transform translate-x-5 w-6 h-6" : ""
            }`}
          ></div>
          <div
            className={`mx-1 ${
              isClicked ? "absolute  z-40 text-black left-[230px]" : ""
            }`}
          >
            <FiHeadphones />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarOption = ({ icon, optionName, id, addChannelOption }) => {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`room/${id}`);
    } else {
      navigate("/" + optionName);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      addDoc(collection(db, "rooms"), { name: channelName });
    }
  };

  return (
    <div
      className="p-1 m-1 flex items-center cursor-pointer hover:bg-gray-500 rounded-md"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      <div className="mx-3">{icon}</div>
      <span>{optionName}</span>
    </div>
  );
};

export default Siderbar;
