import React from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TiChartArea, TiChartLine, TiChartBar } from "react-icons/ti";
import profilePicture from "./ProfilePicture.jpg";
import User1 from "./User1.jpg"
import User2 from "./User2.jpg"
import User3 from "./User3.jpg"

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="w-8/12 flex flex-col">
        <div className="flex flex-col mx-4">
          <div>
            <h1 className="font-bold m-3 text-2xl">Dashboard</h1>
          </div>
          <ReactDatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Seleccionar Fecha"
            className="mt-1 mx-3 p-1 rounded-md bg-gray-300"
          />
        </div>
        <div className="grid grid-cols-3 w-10/12 gap-2   m-auto">
          <div className="grid grid-cols-2 rounded-2xl mt-5 shadow-2xl border-2 p-4">
            <div className="flex flex-col ">
              <TiChartArea className="text-white text-2xl p-2 bg-indigo-700 rounded-full w-10 h-10" />
              <h3 className="mt-2 font-extrabold">Total Sales</h3>
              <h4 className="font-extrabold mt-2">$23.000</h4>
              <h5 className="text-gray-400">Last 24 Hours</h5>
            </div>
            <div className="flex justify-center items-center">
              <div className="rounded-full h-20 w-20 bg-blue-500 flex items-center justify-center">
                <div className="h-14 w-14 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 rounded-2xl mt-5  shadow-2xl border-2 p-4">
            <div className="flex flex-col ">
              <TiChartBar className="text-white text-2xl p-2 bg-indigo-700 rounded-full w-10 h-10" />
              <h3 className="mt-2 font-extrabold">Total Expenses</h3>
              <h4 className="font-extrabold mt-2">$33.000</h4>
              <h5 className="text-gray-400">Last 24 Hours</h5>
            </div>
            <div className="flex justify-center items-center">
              <div className="rounded-full h-20 w-20 bg-blue-500 flex items-center justify-center">
                <div className="h-14 w-14 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 rounded-2xl mt-5 shadow-2xl border-2 p-4">
            <div className="flex flex-col ">
              <TiChartLine className="text-white text-2xl p-2 bg-indigo-700 rounded-full w-10 h-10" />
              <h3 className="mt-2 font-extrabold">Total Income</h3>
              <h4 className="font-extrabold mt-2">$11.000</h4>
              <h5 className="text-gray-400">Last 24 Hours</h5>
            </div>
            <div className="flex justify-center items-center">
              <div className="rounded-full h-20 w-20 bg-blue-500 flex items-center justify-center">
                <div className="h-14 w-14 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold m-3 mx-8 text-2xl">Recent Orders</h2>
        <table className="border text-center rounded-2xl shadow-2xl w-10/12 m-auto mx-22">
          <thead className=" p-2">
            <tr className="px-5">
              <th className="p-4 m-4">Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="px-5">
              <td className="px-5">Foldable MiniDron</td>
              <td className="px-5">001</td>
              <td className="px-5">Due</td>
              <td className="px-5">Pending</td>
              <td className="px-5">
                <a href="1">Details</a>
              </td>
            </tr>
            <tr>
              <td className="px-5">LAVENDER KF102 Drone</td>
              <td className="px-5">002</td>
              <td className="px-5">Refunded</td>
              <td className="px-5">Declined</td>
              <td className="px-5">
                <a href="1">Details</a>
              </td>
            </tr>
            <tr>
              <td className="px-5">Ruko F11 Pro Drone</td>
              <td className="px-5">003</td>
              <td className="px-5">Due</td>
              <td className="px-5">Pending</td>
              <td className="px-5">
                <a href="1">Details</a>
              </td>
            </tr>
            <tr>
              <td className="px-5">Drone with Camera Drone</td>
              <td className="px-5">004</td>
              <td className="px-5">Paid</td>
              <td className="px-5">Delivered</td>
              <td className="px-5">
                <a href="1">Details</a>
              </td>
            </tr>
            <tr>
              <td className="px-5">GPS 4k Drone</td>
              <td className="px-5">005</td>
              <td className="px-5">Paid</td>
              <td className="px-5">Delivered</td>
              <td className="px-5">
                <a href="1">Details</a>
              </td>
            </tr>
          </tbody>
        </table>
        <span>
          <a
            href="2"
            className="flex justify-center items-center text-blue-500 m-5"
          >
            Show All
          </a>
        </span>
      </div>
      <div>
        <div className="flex flex-row absolute top-0 right-0">
          <div className="m-2">Hola, <span className="text-red-500 font-extrabold">James</span></div>
          <img
            src={profilePicture}
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
        </div>
        <div className="mt-16">
          <h1 className="font-bold text-2xl">
            Recent Updates
          </h1>
          <div className="rounded-2xl shadow-2xl bg-white">
              <div className="p-5 flex">
                <img src={User1} alt="" className="rounded-full w-8 h-8"></img>
                <span><span className="font-bold m-2 text-sm">Myke Tyson</span> receiver his order of Nigh</span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
