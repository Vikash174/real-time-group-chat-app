import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaFilterSolid } from "react-icons/lia";

import { IoIosSearch } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <div className="grid grid-cols-4 border-b  bg-gray-950 p-3 ">
      <div className=" justify-self-center inline-block col-span-3">
        <MdOutlineWatchLater className="text-white text-xl inline-block mx-2" />
        <form className="inline-block">
          <div className="flex items-center">
            <input
              placeholder="Search..."
              className="bg-gray-700 p-1 px-5 rounded-sm w-96 text-white"
            />
            <div className="-ml-12">
              <LiaFilterSolid className="text-gray-400 text-xl" />
            </div>
            <div className=" text-gray-400 text-xl">
              <IoIosSearch />
            </div>
          </div>
        </form>
      </div>
      <div className="justify-self-end inline-block">
        <FaQuestionCircle className="text-white text-xl inline-block mx-5" />
        <CiUser className="text-white text-xl inline-block mx-5" />
      </div>
    </div>
  );
};

export default Header;
