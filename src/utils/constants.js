import { MdContentCopy } from "react-icons/md";
import { TfiFiles } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsChatRightDotsFill } from "react-icons/bs";
import { VscReactions } from "react-icons/vsc";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoApps } from "react-icons/io5";

export const SIDEBAR_OPTIONS = [
  {
    icon: BsChatRightDotsFill,
    name: "Threads",
  },
  {
    icon: VscReactions,
    name: "Mentions & reactions",
  },
  {
    icon: CiSaveDown2,
    name: "Saved Items",
  },
  {
    icon: FaRegBookmark,
    name: "Channel browser",
  },
  {
    icon: IoPeopleSharp,
    name: "People & user groups",
  },
  {
    icon: IoApps,
    name: "Apps",
  },
  {
    icon: MdContentCopy,
    name: "Canvases",
  },
  {
    icon: TfiFiles,
    name: "Files",
  },
  {
    icon: BsThreeDotsVertical,
    name: "Browse slack",
  },
  {
    icon: MdOutlineKeyboardArrowUp,
    name: "Show less",
  },
];
