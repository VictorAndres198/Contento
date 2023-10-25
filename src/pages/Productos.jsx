import React, { useState, useEffect } from "react";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import "../index.css"
import imgMedicamento from "./img/Medicamento.png";
import imgRisperdal from "./img/MedRisperdal.png";
import imgIbuprofeno from "./img/MedIbuprofeno.png";
import imgCaptropil from "./img/MedCaptropil.png";
import imgGlibenClamida from "./img/MedGlibenClamida.png";
import imgLosartan from "./img/MedLosartan.png";





// Define un array de objetos que contiene la información de los productos
const productos = [
    {
      nombre: "Risperdal",
      precio: "31.50",
      stock: 100,
      imagen: imgRisperdal, // Asegúrate de tener la ruta correcta para la imagen
    },
    {
        nombre: "Ibuprofeno",
        precio: "11.90",
        stock: 150,
        imagen: imgIbuprofeno, // Asegúrate de tener la ruta correcta para la imagen
    },
    {
        nombre: "Captropil",
        precio: "0.80",
        stock: 150,
        imagen: imgCaptropil, // Asegúrate de tener la ruta correcta para la imagen
    },
    {
        nombre: "GlibenClamida",
        precio: "3.80",
        stock: 150,
        imagen: imgGlibenClamida, // Asegúrate de tener la ruta correcta para la imagen
    },
    {
        nombre: "Losartan",
        precio: "2.50",
        stock: 150,
        imagen: imgLosartan, // Asegúrate de tener la ruta correcta para la imagen
    }
];
    export default function Productos() {

        const [showCarrito, setShowCarrito] = useState(false);
        const [showCarritoAnimacion, setShowCarritoAnimacion] = useState(false);
        const [carrito, setCarrito] = useState([]); // Estado para mantener los productos en el carrito
        const [cantidadProductos, setCantidadProductos] = useState(0); // Estado para la cantidad de productos en el carrito

        const toggleCarrito = () => {
          setShowCarritoAnimacion(!showCarritoAnimacion); // Alterna el estado de animación
          setTimeout(() => {
            setShowCarrito(!showCarrito); // Alterna el estado de visibilidad después de la animación
          }, 500); // Asegúrate de que 500ms coincida con la duración de tu animación
        };
      
        // Función para agregar un producto al carrito
        const agregarAlCarrito = (producto) => {
          setCarrito([...carrito, producto]);
          setCantidadProductos(cantidadProductos + 1);
        };
        
    return(
        <section className="max-w-screen-xl md:mx-auto">
            <div className="flex flex-col"> 
                <div className="flex items-end right-0 ml-auto pr-10 pt-6">
                    <button
                    id="btncarrito"
                    className="bg-gradient-to-tr from-blue-700 to-cyan-700 rounded-full w-fit mb-3"
                    onClick={toggleCarrito}
                    >
                      <ShoppingCartIcon className="h-16 p-3 text-white" />
                    </button>
                    <div className="pointer-events-none ml-9 absolute rounded-full bg-emerald-400 text-center p-1 font-semibold w-8 h-8">
                      {cantidadProductos}
                    </div>
                </div>

                {/*Parte de los medicamentos*/}
                <div className="flex flex-col mx-auto">
                    {/* ...contenido de medicamentos... */}
                    <div className="grid md:grid-cols-3 grid-flow-row -mt-16">
                      {productos.map((producto, index) => (
                        <div key={index} className="mb-4 mx-5 mt-28 text-left flex flex-col lg:w-80 w-60 h-80 bg-gradient-to-r from-blue-900 to-green-700 rounded-3xl">
                          <div className="flex justify-center">
                            <img className="flex lg:w-56 md:w-48 w-44 h-fit -m-24" src={producto.imagen} alt={producto.nombre} />
                          </div>
                          <p className="text-white pt-24 text-lg px-5">{producto.nombre}</p>
                          <p className="text-white text-lg px-5">{producto.precio}</p>
                          <p className="text-slate-300 text-lg px-5 pb-3">Quedan {producto.stock} unidades</p>
                          <button
                            onClick={() => agregarAlCarrito(producto)} // Agregar producto al carrito al hacer clic
                            className="rounded-3xl p-3 font-semibold mb-12 mx-auto md:w-32 lg:w-48 w-48 text-blue-800 border border-blue-800 bg-white 
                              hover:shadow-lg hover:shadow-sky-900/40 hover:scale-110 transition ease-in-out duration-500 hover:-translate-y-1 delay-150"
                          >
                            Agregar
                          </button>
                        </div>
                      ))}
                    </div>
                </div>


               {/* Parte del Carrito ocultable */}
                <div
                  className={`flex flex-col border border-black bg-white w-80 h-screen absolute ${
                    showCarrito ? "carrito-container-entrada" : "carrito-container-salida delay-500 -translate-x-full"
                  }`}
                >
                  <div className="mt-9 w-72 mx-auto">
                    {carrito.map((producto, index) => (
                      <div key={index} className="border border-black rounded-3xl mb-3 p-3">
                        <div className="flex flex-row items-center">
                          <img className="w-14 h-fit p-1 ml-5" src={producto.imagen} alt={producto.nombre} />
                          <div className="flex flex-col pl-6 py-1">
                            <div>{producto.nombre}</div>
                            <div>{producto.precio}</div>
                          </div>
                        </div>
                        <div className="flex flex-row w-full justify-center items-center">
                          <button className="rounded-full border border-black h-8 w-8 font-bold text-slate-500 text-5xl flex items-center justify-center">
                            <p className="pointer-events-none absolute pb-[13px]">-</p>
                          </button>
                          <p className="w-16 text-center flex items-center justify-center">1</p>
                          <button className="rounded-full border border-black h-8 w-8 font-bold text-slate-500 text-5xl flex items-center justify-center">
                            <p className="pointer-events-none absolute pb-[13px]">+</p>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/*Solución para que no se vea el carrito ocultable*/}
                <div className="bg-[#F4FFFB] w-80 h-screen absolute -translate-x-full"></div>
            </div>
        </section>
    );
}