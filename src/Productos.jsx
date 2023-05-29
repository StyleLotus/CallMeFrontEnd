import React from "react";
import { useState, useRef } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import axios from "axios";

const Productos = () => {
  const [responseData,setResponseData] = useState(null)
  const [Img, setImg] = useState("");
  const [values, setValues] = useState({})
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Codigo, setCodigo] = useState("");
  let [PrecioUnidad, setPrecioUnidad] = useState("");
  const [Color, setColor] = useState("");
  let [CantidadActual, setCantidadActual] = useState("");
  const UsuarioNumber = 2
  const [Usuario, setUsuario] = useState(UsuarioNumber)
  const productImgRef = useRef(null);
  const rutaServidorJames = "https://9a50-2800-484-3f84-7f97-adc5-b64f-8e1a-caf.ngrok-free.app" + "/productos"
  
  const fetchData = () => {
    axios
      .post(rutaServidorJames,  values)
      .then(response => {
        setResponseData(response.data);
        console.log(responseData)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
      
  };

  function settingNombre(e) {
    setNombre(e.target.value);
  }
  function settingCodigo(e) {
    setCodigo(e.target.value);
  }
  function settingPerUnit(e) {
    setPrecioUnidad(parseInt(e.target.value));
  }
  function settingCantidadActual(e) {
    setCantidadActual(parseInt(e.target.value));
  }
  function settingDescription(e) {
    setDescripcion(e.target.value);
  }

  function settingColor(e) {
    setColor(e.target.value);
    console.log(Color)
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImg(imageUrl);
  }

  function handleSubmit(e){
    e.preventDefault()
    if(Nombre && Img && Descripcion && Codigo && PrecioUnidad && Color && CantidadActual && Usuario){
      PrecioUnidad = parseInt(PrecioUnidad)
      CantidadActual = parseInt(CantidadActual)
      setValues({Nombre, Codigo, Descripcion,  Color,  PrecioUnidad ,  CantidadActual, Img, Usuario})
      fetchData()
      console.log(values)
    }
   
  }

  return (
    <>
      <div className="flex w-1/2">
        <div className="mx-auto">
          <div className="flex flex-row">
            <BsFillBagCheckFill className="mx-auto text-5xl" />
            <h1 className="text-5xl font-bold">ADD PRODUCT</h1>
          </div>
          <div className="m-auto flex-col">
            <form className="w-10/12" onSubmit={handleSubmit}>
              <label className="my-6">Product Name:</label>
              <input
                type="text"
                className="w-full my-4 rounded p-1"
                onChange={settingNombre}
                value={Nombre}
              ></input>
              <label className="my-6">Description:</label>
              <textarea
                rows="2"
                cols="2"
                onChange={settingDescription}
                className="w-full resize-none"
                maxLength={62}
                value={Descripcion}
              ></textarea>
              <label className="my-6">PrecioUnidad per unit:</label>
              <input
                type="number"
                className="w-full my-4 rounded p-1"
                onChange={settingPerUnit}
                value={PrecioUnidad}
              ></input>
              <label className="my-6">Product Code:</label>
              <input
                type="text"
                className="w-full my-4 rounded p-1"
                onChange={settingCodigo}
                value={Codigo}
              ></input>
              <label className="my-6">Quantity on hand:</label>
              <input
                type="number"
                className="w-full my-4 rounded p-1"
                onChange={settingCantidadActual}
                value={CantidadActual}
              ></input>
              <label for="imagen">Imagen del Producto:</label>
              <input
                type="file"
                id="imagen"
                name="imagen"
                onChange={handleImageChange}
                
              ></input>
              <label for="Color" className="block">Color:</label>
              <input type="Color" onChange={settingColor} value={Color}></input>
              <label for="nombre">Creator:</label> 
              <input
                type="text"
                id="usuario"
                name="usuario"
                value="Current Usuario"
                className="m-4 rounded p-1 w-11/12"
                readonly
              ></input>
              <span className="m-auto flex flex-row justify-center items-center">
                <input type="submit" value="AGREGAR" className="m-4 cursor-pointer p-2 rounded font-bold bg-green-600 hover:bg-green-700 hover:text-white">
                </input >
                <button className="m-4 p-2 rounded font-bold bg-red-600 hover:bg-red-700 hover:text-white">
                  CANCELAR
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
      <div className="flex m-auto">
        <div className="w-72 h-96 border-2 rounded-2xl border-transparent shadow-2xl" style={{backgroundColor: Color}}>
          <img
            src={Img}
            alt=""
            ref={productImgRef}
            className="overflow-hidden rounded-2xl w-full h-2/4"
          ></img>
          <h2 className="font-bold text-2xl m-2">{Nombre}</h2>
          <h2 className="px-2">{Descripcion}</h2>
          <span className="flex flex-row">
            <h2 className="p-2 font-extrabold text-3xl">${PrecioUnidad}</h2>
            <h2 className="flex justify-center items-center rounded p-2 m-auto w-20 shadow-2xl bg-white">{CantidadActual}</h2>
          </span>
          <h2 className="flex justify-end p-2"><span className="font-semibold">Product Code:</span>{Codigo}</h2>
        </div>
      </div>
    </>
  );
};

export default Productos;
