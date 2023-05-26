import React, { useState } from "react";
import CallMeIcon from "./CallMeIcon.png";
import { RiDashboardFill, RiSettingsFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaListAlt, FaComment, FaEdit, FaPlus } from "react-icons/fa";
import { IoBarChartSharp, IoAlertCircle, IoExitSharp } from "react-icons/io5";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const SideBar = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(true);

  const toggleSiderBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };
  const aStyle = `flex rounded p-1 m-1  ${
    isSideBarOpen
      ? "hover:ml-3 hover:border-l-4 hover:border-blue-500 hover:bg-blue-100 transition duration-600 ease"
      : "hover:bg-blue-200  transition duration-600 ease hover:border-blue-400 hover:border-2"
  }`;
  const iconStyle = "m-1 text-2xl";
  const menuText = `text-md ${isSideBarOpen ? "" : "hidden"}`;

  return (
    <div
      className={` h-screen ${
        isSideBarOpen ? "w-44" : "w-19"
      } mx-4 shadow-l-2xl border-r-4 border-blue-200     `}
    >
      <div className="m-4 flex">
        <img src={CallMeIcon} alt="" className="w-6 h-6 mr-1 mt-1" />
        <h1 className={`text-2xl  ${isSideBarOpen ? "" : "hidden"}`}>
          Call<span className="text-red-500 font-bold">ME</span>
        </h1>
        {isSideBarOpen ? (
          <BiLeftArrow
            onClick={toggleSiderBar}
            className={`${
              isSideBarOpen
                ? "absolute left-40 bg-blue-200 border-blue-200 text-2xl border-2 rounded-full m-3 top-1 "
                : "absolute bg-blue-200 left-14 text-2xl border-2 border-blue-200 rounded-full m-3 top-1 "
            }`}
          />
        ) : (
          <BiRightArrow
            onClick={toggleSiderBar}
            className={`${
              isSideBarOpen
                ? "absolute left-40 text-2xl bg-blue-200 border-blue-200 border-2 rounded-full m-3 top-1"
                : "absolute bg-blue-200 left-14 text-2xl border-2 border-blue-200 rounded-full m-3 top-1"
            }`}
          />
        )}
      </div>
      <a href="1">
        <span className={aStyle}>
          <RiDashboardFill className={iconStyle} />
          <h3 className={menuText}>Dashboard</h3>
        </span>
      </a>
      <a href="3">
        <span className={aStyle}>
          <BsFillPeopleFill className={iconStyle} />
          <h3 className={menuText}>Customers</h3>
        </span>
      </a>
      <a href="2">
        <span className={aStyle}>
          <FaListAlt className={iconStyle} />
          <h3 className={menuText}>Orders</h3>
        </span>
      </a>
      <a href="2">
        <span className={aStyle}>
          <IoBarChartSharp className={iconStyle} />
          <h3 className={menuText}>Analytics</h3>
        </span>
      </a>
      <a href="2">
        <span className={aStyle}>
          <FaComment className={iconStyle} />
          <h3 className={menuText}>Messages</h3>
          <span className=" bg-red-200 mx-3 px-3 rounded-lg mt-1 hidden">
            25
          </span>
        </span>
      </a>
      <a href="2">
        <span className={aStyle}>
          <FaEdit className={iconStyle} />
          <h3 className={menuText}>Products</h3>
        </span>
      </a>
      <a href="2">
        <span className={aStyle}>
          <IoAlertCircle className={iconStyle} />
          <h3 className={menuText}>Reports</h3>
        </span>
      </a>
      <a href="2">
        <span className={aStyle}>
          <RiSettingsFill className={iconStyle} />
          <h3 className={menuText}>Settings</h3>
        </span>
      </a>
      <a href="2">
        <span className={aStyle}>
          <FaPlus className={iconStyle} />
          <h3 className={menuText}>Add Product</h3>
        </span>
      </a>
      <a href="2" className="fixed bottom-0 left-0 m-5">
        <span className={aStyle}>
          <IoExitSharp className={iconStyle} />
          <h3 className={menuText}>Log Out</h3>
        </span>
      </a>
    </div>
  );
};

export default SideBar;
