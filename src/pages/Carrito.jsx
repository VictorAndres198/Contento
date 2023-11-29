import React, { useEffect, useState } from "react";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
  
    useEffect(() => {
      // Obtener el carrito desde localStorage al cargar el componente
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
      setCarrito(carritoGuardado);
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto">
           <Link to={"/Productos"}>
           <div className="flex flex-row cursor-pointer w-fit">
           <ArrowLeftIcon className="h-7 text-blue-500 pointer-events-none pr-3"/>
           <label className="font-semibold text-blu00 pointere-5-events-none text-xl">Volver a los productos</label>
           </div>
           </Link>           
           <h2 className="text-4xl text-slate-800 font-semibold">¡Ya falta poco para finalizar tu compra!</h2>
           <div className="bg-white w-full h-fit rounded-3xl flex flex-col p-7">
           <h3 className="text-slate-900 text-2xl border border-b-gray-300 border-transparent pb-5 font-semibold">Necesitamos algunos datos para continuar</h3>
           <div className="flex flex-row">
           <p className="text-slate-900">
            Estos datos no se guardarán para una próxima compra. Puedes continuar o{" "}
            <span className="text-blue-500 border border-b-blue-500 border-transparent cursor-pointer font-semibold">
                Iniciar Sesión</span> .
           </p>
           </div>

           <div className="flex flex-row w-full">
           <div className="flex flex-col text-gray-700">
            Nombre
            <div className="w-full">
                <input
                    id="nombrecarrito"
                    name="nombrecarrito"
                    type="name"
                    autoComplete="off"
                    required
                    className="block w-full px-2 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-blue-500"
                />
           </div>
           </div>

           <div className="flex flex-col text-gray-700">
            Apellido Paterno
            <div className="w-full">
                <input
                    id="apellidopcarrito"
                    name="apellidopcarrito"
                    type="name"
                    autoComplete="off"
                    required
                    className="block w-full px-2 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-blue-500"
                />
            </div>
           </div>

           <div className="flex flex-col text-gray-700">
            Apellido Materno
            <div className="w-full">
                <input
                    id="apellidomcarrito"
                    name="apellidomcarrito"
                    type="name"
                    autoComplete="off"
                    required
                    className="block w-full px-2 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-blue-500"
                />
            </div>
           </div>
           </div>

           <div className="flex flex-row w-full">
           <div className="flex flex-col text-gray-700">
            Tipo de documento
            <div className="w-full">
            <select
                id="selector_carrito_nrodoc"
                name="selector_carrito_nrodoc"
                className="pl-2 w-full h-[34px] block rounded-xl border-0 text-gray-900 shadow-sm ring-1 ring-offset-1 ring-gray-300 text-sm sm:leading-6 outline-blue-500"
                required
            >
                <option value=""></option>
                <option value="Documento 1">DNI</option>
                <option value="Documento 2">C.E.</option>
                <option value="Documento 3">Pasaporte</option>     
            </select>
            </div>
           </div>

           <div className="flex flex-col text-gray-700">
            Nro. de documento
            <div className="w-full">
                <input
                    id="nrodocumentocarrito"
                    name="nrodocumentocarrito"
                    type="text"
                    autoComplete="off"
                    required
                    className="block w-full px-2 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-blue-500"
                />
            </div>
           </div>

           <div className="flex flex-col text-gray-700">
            Celular
            <div className="w-full">
                <input
                    id="celularcarrito"
                    name="celularcarrito"
                    type="tel"
                    autoComplete="on"
                    required
                    className="block w-full px-2 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-blue-500"
                />
            </div>
           </div>

           <div className="flex flex-col text-gray-700">
            Correo electrónico
            <div className="w-full">
                <input
                    id="emailcarrito"
                    name="emailcarrito"
                    type="email"
                    autoComplete="off"
                    required
                    className="block w-full px-2 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-blue-500"
                />
            </div>
           </div>
           </div> 

           <div>
           <label>
                <input type="checkbox" className="mx-2 h-4 w-4"/>
                <label
                    className="text-lg text-slate-800"
                    >
                    He leído y acepto el</label>                
                    <label className="text-lg mx-2 text-blue-500 cursor-pointer font-semibold">
                    uso de mis datos.
                    </label>                
                </label>      
           </div>

           </div>

                      
           

           
           <h2>Productos en el Carrito</h2>
           <ul>
           {carrito && carrito.length > 0 ? (
                carrito.map((producto, index) => (
                    <li key={index}>
                    {producto.nombre} - Cantidad: {producto.cantidad}
                    </li>
                ))
                ) : (
                <p>No hay productos en el carrito.</p>
            )}
           </ul>

        </div>
      );
};

export default Carrito;