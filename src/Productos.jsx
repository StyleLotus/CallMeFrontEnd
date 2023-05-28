import React from "react";
import { useState } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";

const Productos = () => {

  const [productName, setProductName] = useState("")
  const [productCode, setProductCode] = useState("")
  const [stock, setStock] = useState("")
  const [onHand, setOnHand] = useState("")

  function settingProductName(e){
    setProductName(e.target.value)
    console.log(productName)
  }
  function settingProductCode(e){
    setProductCode(e.target.value)
  }
  function settingPerUnit(e){
    setStock(e.target.value)
  }
  function settingOnHand(e){
    setOnHand(e.target.value)
  }

  return (
    <>
    <div className="flex w-1/2">
      <div className="mx-auto">
        <div>
          <BsFillBagCheckFill className="mx-auto text-5xl" />
          <h1 className="text-5xl font-bold">ADD PRODUCT</h1>
        </div>
        <div className="m-auto flex-col">
          <form className="w-10/12">
            <label className="my-6">Product Name:</label>
            <input type="text" className="w-full my-4 rounded p-1" onChange={settingProductName}></input>
            <label className="my-6">Product Code:</label>
            <input type="text" className="w-full my-4 rounded p-1" onChange={settingProductCode}></input>
            <label className="my-6">Price per unit:</label>
            <input type="number" className="w-full my-4 rounded p-1" onChange={settingPerUnit}></input>
            <label className="my-6">Quantity on hand:</label>
            <input type="number" className="w-full my-4 rounded p-1" onChange={settingOnHand}></input>
            <label for="imagen">Imagen del Producto:</label>
            <input type="file" id="imagen" name="imagen"></input>
            <label for="nombre">Creator:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value="Current User"
              readonly
              className="m-4 rounded p-1 w-11/12"
            ></input>
            <span className="m-auto flex flex-row justify-center items-center">
              <button className="m-4 p-2 rounded font-bold bg-green-600 hover:bg-green-700 hover:text-white">AGREGAR</button>
              <button className="m-4 p-2 rounded font-bold bg-red-600 hover:bg-red-700 hover:text-white">CANCELAR</button>
            </span>
          </form>
        </div>
      </div>
    </div>
    <div className="flex m-auto">
      <div className="w-52 h-64 border-2 rounded-2xl border-blue-300">
          <h1>{productName}</h1>
          <h2>{productCode}</h2>
          <h2>{stock}</h2>
          <h2>{onHand}</h2>
      </div>
    </div>
    </>
    
  );
};

export default Productos;
