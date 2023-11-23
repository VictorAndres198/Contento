import React, { useState, useEffect } from "react";
import {ShoppingCartIcon,TrashIcon,MinusIcon,PlusIcon} from "@heroicons/react/24/outline";
import "../index.css"
import {db} from './components/firebase'; // Importa el objeto db de tu archivo de configuración de Firebase
import { collection, getDocs } from 'firebase/firestore'; // Importa los métodos necesarios de Firebase


    export default function Productos() {

      const [showCarrito, setShowCarrito] = useState(false);
      const [showCarritoAnimacion, setShowCarritoAnimacion] = useState(false);
      const [carrito, setCarrito] = useState([]); // Estado para mantener los productos en el carrito
      const [cantidadProductos, setCantidadProductos] = useState(0); // Estado para la cantidad de productos en el carrito
    
      const toggleCarrito = () => {
        setShowCarritoAnimacion(!showCarritoAnimacion);
        setTimeout(() => {
          setShowCarrito(!showCarrito);
        }, 500);
      };
    
      const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        setCantidadProductos(cantidadProductos + 1);
      };
    
      const eliminarDelCarrito = (index) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(index, 1);
        setCarrito(nuevoCarrito);
        setCantidadProductos(cantidadProductos - 1);
      };
    
      const modificarCantidad = (index, cantidad) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito[index].cantidad = cantidad;
        setCarrito(nuevoCarrito);
      };
    
      const calcularTotal = () => {
        let total = 0;
        carrito.forEach((producto) => {
          total += parseFloat(producto.precio) * producto.cantidad;
        });
        return total.toFixed(2);
      };
    
      const [productos, setProductos] = useState([]);
    
      useEffect(() => {
        const obtenerProductos = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'Productos'));
            const productosData = querySnapshot.docs.map((doc) => doc.data());
            setProductos(productosData);
          } catch (error) {
            console.error('Error al obtener los productos:', error);
          }
        };
    
        obtenerProductos();
      }, []);

    return(
        <section className="max-w-screen-xl md:mx-auto md:h-fit">
            <div className="flex flex-col"> 
                <div className="flex items-end right-0 ml-auto pr-10 pt-6 fixed lg:relative lg:mt-auto">
                    <button
                    id="btncarrito"
                    className="bg-gradient-to-tr from-blue-700 to-cyan-700 rounded-full w-fit mb-3 z-20"
                    onClick={toggleCarrito}
                    >
                      <ShoppingCartIcon className="h-16 p-3 text-white" />
                    </button>
                    <div className="pointer-events-none ml-9 absolute rounded-full bg-emerald-400 text-center p-1 font-semibold w-8 h-8 z-20">
                      {cantidadProductos}
                    </div>
                </div>

                {/*Parte de los medicamentos*/}
                <div className="flex flex-col mx-auto">
                    {/* ...contenido de medicamentos... */}
                    <div className="grid md:grid-cols-3 grid-flow-row lg:-mt-16">
                      {productos.map((producto, index) => (
                        <div key={index} className="mb-4 mx-5 mt-28 text-left flex flex-col lg:w-80 w-60 h-80 bg-gradient-to-r from-blue-900 to-green-700 rounded-3xl">
                          <div className="flex justify-center">
                            <img className="flex lg:w-56 md:w-48 w-44 h-fit -m-24 pointer-events-none" src={producto.imagen} alt={producto.nombre} />
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
                <div className={`-mt-3 border border-black bg-white h-full w-80 fixed ${
                    showCarrito ? "carrito-container-entrada" : "carrito-container-salida delay-500 -translate-x-full"
                  }`}></div>
                <div
                  className={`mt-10 ml-4 flex flex-col border border-black bg-white w-72 h-[500px] overflow-y-auto fixed ${
                    showCarrito ? "carrito-container-entrada" : "carrito-container-salida delay-500 -translate-x-80"
                  }`}
                >
                  <div className={`mt-4 w-64 mx-auto ${
                    showCarrito ? "carrito-container-entrada" : "carrito-container-salida delay-500 -translate-x-full"
                  }`}>
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
                        <button
                          onClick={() => modificarCantidad(index, producto.cantidad - 1)}
                          className="rounded-full border border-black h-8 w-8 font-bold text-slate-500 text-5xl flex items-center justify-center"
                          disabled={producto.cantidad === 1}
                        >
                            <MinusIcon className="pointer-events-none relative h-10" />
                          </button>
                          <p className="w-16 text-center flex items-center justify-center">{producto.cantidad}</p>
                          <button
                            onClick={() => modificarCantidad(index, producto.cantidad + 1)}
                            className="rounded-full border border-black h-8 w-8 font-bold text-slate-500 text-5xl flex items-center justify-center"
                          >
                            <PlusIcon className="pointer-events-none relative  h-10" />
                          </button>
                          {producto.cantidad === 1 && (

                          <button
                            onClick={() => eliminarDelCarrito(index)}
                            className="relative w-9 ml-5"
                          >
                          <TrashIcon className="text-slate-500 border border-slate-700 rounded-3xl p-1"></TrashIcon>
                          </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                


                <p className={`fixed ml-[115px] mt-[580px] ${
                    showCarrito ? "carrito-container-entrada-t" : "carrito-container-salida-c -translate-x-80"
                  }`}>
                  Total: 
                </p>
                
                <label className={`fixed ml-[155px] mt-[580px] ${
                    showCarrito ? "carrito-container-entrada-t2" : "carrito-container-salida-c -translate-x-80"
                  }`}>
                  {calcularTotal()}
                </label>
                
                <div className={`fixed md:ml-14 ml-10 mt-[650px] ${
                    showCarrito ? "carrito-container-entrada-b" : "carrito-container-salida-c -translate-x-80"
                  }`}>
                <button 
                className="bg-gradient-to-l from-green-500 to-lime-500 rounded-3xl p-3 font-semibold  md:px-12 px-16 text-white 
                hover:bg-gradient-to-l hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-110 
                transition ease-in-out duration-500 hover:-translate-y-1 delay-150 mb-9">
                Comprar Ahora
                </button>
                </div>
                {/*Solución para que no se vea el carrito ocultable*/}
                <div className="-mt-4 bg-[#F4FFFB] w-80 h-screen fixed -translate-x-full"></div>
            </div>
        </section>
    );
}