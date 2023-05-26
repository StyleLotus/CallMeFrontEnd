import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";

const Productos = () => {
  return (
    <>
      <div className="mx-auto">
        <div>
          <BsFillBagCheckFill className="mx-auto text-5xl" />
          <h1 className="text-5xl font-bold">AGREGAR PRODUCTO</h1>
        </div>
        <div className="m-auto flex-col">
          <form className="w-6/12">
            <label className="my-6">Nombre del producto</label>
            <input type="text" className="w-full my-4 rounded p-1"></input>
            <label className="my-6">Codigo del producto</label>
            <input type="text" className="w-full my-4 rounded p-1"></input>
            <label className="my-6">Precio Unidad</label>
            <input type="number" className="w-full my-4 rounded p-1"></input>
            <label className="my-6">Cantidad Actual</label>
            <input type="number" className="w-full my-4 rounded p-1"></input>
            <label for="imagen">Imagen del Producto:</label>
            <input type="file" id="imagen" name="imagen"></input>
            <label for="nombre">Usuario Creador:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value="Usuario Actual"
              readonly
              className="m-4 rounded p-1"
            ></input>
            <span className="m-auto flex flex-row justify-center items-center">
              <button className="m-4 p-2 rounded font-bold bg-green-600 hover:bg-green-700 hover:text-white">AGREGAR</button>
              <button className="m-4 p-2 rounded font-bold bg-red-600 hover:bg-red-700 hover:text-white">CANCELAR</button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Productos;
