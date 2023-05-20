import React from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TiChartArea, TiChartLine, TiChartBar } from "react-icons/ti";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col">
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
        <div className="grid grid-cols-3 w-10/12">
          <div className="grid grid-cols-2 rounded-2xl mt-5 mx-3 gap-3 shadow-2xl border-2 p-4">
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
          <div className="grid grid-cols-2 rounded-2xl mt-5 mx-3 gap-3 shadow-2xl border-2 p-4">
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
          <div className="grid grid-cols-2 rounded-2xl mt-5 mx-3 gap-3 shadow-2xl border-2 p-4">
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
      </div>
      <h2 className="font-bold m-3 text-2xl">Recent Orders</h2>
    </div>
  );
};

export default Main;
