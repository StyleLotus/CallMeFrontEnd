import React from "react";
import CallMeIcon from "./CallMeIcon.png";
import { RiDashboardFill, RiSettingsFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaListAlt, FaComment, FaEdit, FaPlus } from "react-icons/fa";
import { IoBarChartSharp, IoAlertCircle, IoExitSharp, IoClose } from "react-icons/io5";

const SideBar = () => {
    const aStyle = "flex rounded p-1 m-1 hover:ml-6 hover:border-l-4 hover:border-blue-500 hover:bg-blue-100 transition duration-600 ease";
    const iconStyle = " m-1 text-2xl";
    const menuText = "text-2xl font-bold";

    return (
        <div className="h-screen w-36 mx-4">
            <div className="m-4 flex">
                <img src={CallMeIcon} alt="" className="w-6 h-6 mr-1 mt-1" />
                <h1 className="text-2xl">
                    Call<span className="text-red-500 font-bold">ME</span>
                </h1>
                <IoClose className="fixed left-44 m-1 text-2xl borderl hidden" />
            </div>
            <a href="1">
                <span className={aStyle}>
                    <RiDashboardFill className={iconStyle} />
                    <h3 classname={menuText}>Dashboard</h3>
                </span>
            </a>
            <a href="3">
                <span className={aStyle}>
                    <BsFillPeopleFill className={iconStyle} />
                    <h3 classname={menuText}>Customers</h3>
                </span>
            </a>
            <a href="2">
                <span className={aStyle}>
                    <FaListAlt className={iconStyle} />
                    <h3 classname={menuText}>Orders</h3>
                </span>
            </a>
            <a href="2">
                <span className={aStyle}>
                    <IoBarChartSharp className={iconStyle} />
                    <h3 classname={menuText}>Analytics</h3>
                </span>
            </a>
            <a href="2">
                <span className={aStyle}>
                    <FaComment className={iconStyle} />
                    <h3 classname={menuText}>Messages</h3>
                    <span className=" bg-red-200 mx-3 px-3 rounded-lg mt-1">25</span>
                </span>
            </a>
            <a href="2">
                <span className={aStyle}>
                    <FaEdit className={iconStyle} />
                    <h3 classname={menuText}>Products</h3>
                </span>
            </a>
            <a href="2">
                <span className={aStyle}>
                    <IoAlertCircle className={iconStyle} />
                    <h3 classname={menuText}>Reports</h3>
                </span>
            </a>
            <a href="2">
                <span className={aStyle}>
                    <RiSettingsFill className={iconStyle} />
                    <h3 classname={menuText}>Settings</h3>
                </span>
            </a>
            <a href="2">
                <span className={aStyle}>
                    <FaPlus className={iconStyle} />
                    <h3 classname={menuText}>Add Product</h3>
                </span>
            </a>
            <a href="2" className="fixed bottom-0 left-0 m-5">
                <span className={aStyle}>
                    <IoExitSharp className={iconStyle} />
                    <h3 classname={menuText}>Log Out</h3>
                </span>
            </a>
        </div>
    );
};

export default SideBar;
