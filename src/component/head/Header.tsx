import { Avatar } from "antd";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import FilterSection from "../filter/filter";

const Header = () => {
  return (
    <>
      <div className="bg-white sticky top-0 p-2 z-20">
        <div className="flex justify-end items-center ">
          <div className="px-5 py-2 bg-[#e4e4eb] rounded-lg ">
            <AiOutlineSearch color="black" size={18} />
          </div>

          <div className="flex gap-4 px-3 ">
            <Avatar
              size={42}
              icon={<BsPlus />}
              style={{
                backgroundColor: "#D6D7D9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
            />
            <Avatar
              size={42}
              style={{
                backgroundColor: "#D6D7D9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<IoIosNotificationsOutline color="black" />}
            />
            <Avatar
              size={42}
              style={{
                backgroundColor: "#e8eff1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
              icon={"C"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
