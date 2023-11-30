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

      // Función para calcular el total
    const calcularTotal = () => {
        let total = 0;
        carrito.forEach((producto) => {
        total += parseFloat(producto.precio) * producto.cantidad;
        });
        return total.toFixed(2);
    };
  
    return (
        <div className="max-w-screen-xl mx-auto">
            
            <div className="flex flex-row order-10">

           <div className="w-[65%]">     
           <Link to={"/Productos"}>
           <div className="flex flex-row cursor-pointer w-fit py-3">
           <ArrowLeftIcon className="h-7 text-blue-500 pointer-events-none pr-3"/>
           <label className="font-semibold text-blu00 pointer-events-none text-xl text-blue-500">Volver a los productos</label>
           </div>
           </Link>           
           <h2 className="text-4xl text-slate-800 font-semibold pb-7 absolute">¡Ya falta poco para finalizar tu compra!</h2>
           <div className="bg-white w-full h-fit rounded-2xl flex flex-col p-7 mt-[69px]">
           <h3 className="text-slate-900 text-2xl border border-b-gray-300 border-transparent pb-5 font-semibold">Necesitamos algunos datos para continuar</h3>
           <div className="flex flex-row">
           <p className="text-slate-900">
            Estos datos no se guardarán para una próxima compra. Puedes continuar o{" "}
            <span className="text-blue-500 border border-b-blue-500 border-transparent cursor-pointer font-semibold">
                Iniciar Sesión</span>.
           </p>
           </div>

           <div className="flex flex-row w-full gap-4">
           <div className="flex flex-col text-gray-700 w-full">
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

           <div className="flex flex-col text-gray-700 w-full">
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

           <div className="flex flex-col text-gray-700 w-full">
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

           <div className="flex flex-row w-full gap-4">
           <div className="flex flex-col text-gray-700 w-[80%]">
            Tipo de documento
            <div className="w-full">
            <select
                id="selector_carrito_nrodoc"
                name="selector_carrito_nrodoc"
                className="pl-2 w-full h-[34px] block rounded-xl border-0 text-gray-900 shadow-sm ring-1 ring-offset-1 ring-gray-300 text-sm sm:leading-6 outline-blue-500 bg-white"
                required
            >
                <option value=""></option>
                <option value="Documento 1">DNI</option>
                <option value="Documento 2">C.E.</option>
                <option value="Documento 3">Pasaporte</option>     
            </select>
            </div>
           </div>

           <div className="flex flex-col text-gray-700 w-[80%]">
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

           <div className="flex flex-col text-gray-700 w-[80%]">
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

           <div className="flex flex-col text-gray-700 w-full">
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

           <div className="bg-red-600 w-full h-screen rounded-2xl my-4">

           </div>
           </div>


           <div className="bg-white sticky top-[75px] w-[430px] h-fit rounded-2xl mt-[120px] p-7 ml-3">
            <h3 className="text-slate-900 text-2xl font-semibold">Resumen de pedido</h3>  
            <h4 className="text-slate-900 text-lg font-semibold pb-2">Contento</h4> 
            <div className="h-[350px] overflow-y-auto">            
            {carrito && carrito.length > 0 ? (
                <ul>
                {carrito.map((producto, index) => (
                    <div className="p-3 flex flex-row border-t-gray-300 border border-transparent h-fit" key={index}>
                        <img className="h-16" src={producto.imagen}/>
                        <div className="flex flex-col ml-7">
                        <p>{producto.nombre}</p>
                        Cantidad: {producto.cantidad}
                        </div>
                        <div className="ml-auto right-0">
                            {producto.precio}
                        </div>
                    </div>
                ))}
                </ul>
            ) : (
                <p>No hay productos en el carrito.</p>
            )} 
            </div> 
            <div className="font-semibold text-slate-900 mt-4 flex flex-row">
                Total a pagar <label className="ml-auto">S/ {calcularTotal()}</label>
            </div>   
            <div>              
            
            </div>    
            </div> 
            

           </div>           



        </div>
      );
};

export default Carrito;