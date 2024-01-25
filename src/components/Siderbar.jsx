import React, { useEffect, useState } from "react";

import { MdContentCopy } from "react-icons/md";
import { TfiFiles } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsChatRightDotsFill } from "react-icons/bs";
import { VscReactions } from "react-icons/vsc";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegBookmark, FaCaretDown, FaEdit } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { HiOutlineHashtag } from "react-icons/hi";

import db from "../firebase-config";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";

const Siderbar = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "rooms"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      setChannels(querySnapshot.docs.map((doc) => doc.data().name));
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="bg-black w-[260px] text-white p-2 h-screen">
      <div className="flex justify-between  p-2">
        <span>Vikash Rai</span>
        <FaEdit />
      </div>

      <hr />
      <SidebarOption icon={<BsChatRightDotsFill />} optionName={"Threads"} />
      <SidebarOption
        icon={<VscReactions />}
        optionName={"Mentions & reactions"}
      />
      <SidebarOption icon={<CiSaveDown2 />} optionName={"Saved items"} />
      <SidebarOption icon={<FaRegBookmark />} optionName={"Channel browser"} />
      <SidebarOption
        icon={<IoPeopleSharp />}
        optionName={"People & user groups"}
      />
      <SidebarOption icon={<IoApps />} optionName={"Apps"} />
      <SidebarOption icon={<MdContentCopy />} optionName={"Canvases"} />
      <SidebarOption icon={<TfiFiles />} optionName={"Files"} />
      <SidebarOption
        icon={<BsThreeDotsVertical />}
        optionName={"Browse Slack"}
      />
      <SidebarOption
        icon={<MdOutlineKeyboardArrowUp />}
        optionName={"Show less"}
      />
      <hr />
      {/* Channels */}
      <SidebarOption icon={<FaCaretDown />} optionName={"Channels"} />

      {channels.map((channel) => (
        <SidebarOption icon={<HiOutlineHashtag />} optionName={channel} />
      ))}
      <hr />
    </div>
  );
};

const SidebarOption = ({ icon, optionName }) => {
  return (
    <div className="p-1 flex items-center">
      <div className="mx-3">{icon}</div>
      <span>{optionName}</span>
    </div>
  );
};

export default Siderbar;
