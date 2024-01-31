import React from "react";
import { useParams } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdOutlineEmojiEmotions,
  FaItalic,
  FaLink,
  FaUser,
  LuFileImage,
  HiMiniHashtag,
  IoMegaphoneOutline,
  AiOutlineUserAdd,
  FaBold,
  FaStrikethrough,
  FaListOl,
  FaList,
  FaLaptopCode,
  IoMdList,
  IoMdSend,
  FaCode,
  FaFont,
  FaPlus,
  GoDeviceCameraVideo,
  GoMention,
  GrMicrophone,
  CgShortcut,
} from "../../assets/icons";

const ChatWindow = () => {
  const { roomId } = useParams();

  return (
    <div className="bg-gray-900 text-white border-l w-[100%] border-white ">
      <div className="flex justify-between p-5 items-center border-b border-gray-400">
        <div>
          <span className="font-bold text-lg">
            <HiMiniHashtag className="inline-block" />
            general
            <MdKeyboardArrowDown className="inline-block" />
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <span>
              <FaUser className="inline-block" />1
            </span>
          </div>
          <div>
            <span>
              {" "}
              <LuFileImage className="inline-block" /> Canvas
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="p-5">
          <h1 className="font-bold text-3xl flex items-center">
            <IoMegaphoneOutline className="inline-block mr-2" />
            {`You’re looking at the`}
            <HiMiniHashtag className="inline-block" />
            {`general channel`}
          </h1>
          <h3 className="opacity-80 p-1">
            {`This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations.`}
            <span className="text-yellow-300 m-1">Edit description</span>
          </h3>
          <button className="border p-1 rounded-md my-5">
            {" "}
            <AiOutlineUserAdd className="inline-block -mt-1 " /> Add collegues
          </button>
        </div>
      </div>

      <div className="border border-gray-500 p-4 m-4 rounded-md absolute bottom-0 w-[85%]">
        <div className="flex gap-5">
          <FaBold />
          <FaItalic />
          <FaStrikethrough />
          <FaLink />
          <FaList />
          <FaListOl />
          <IoMdList />
          <FaCode />
          <FaLaptopCode />
        </div>
        <div className="">
          <input
            className="bg-transparent py-4 my-2 w-full outline-none"
            placeholder={`Message #general`}
          />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-5">
            <FaPlus />
            <FaFont />
            <MdOutlineEmojiEmotions />
            <GoMention />
            <GoDeviceCameraVideo />
            <GrMicrophone />
            <CgShortcut />
          </div>
          <div>
            <IoMdSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
