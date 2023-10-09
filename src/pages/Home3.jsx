import React from "react";
import DateSelector from "./components/dateselector";
import TimeSelector from "./components/timeselector";
import DoctorSelector from "./components/doctorselector";
import consulta from './img/consulta.svg'

export default function Home3(){
    return(
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2  md:mx-auto mx-8 justify-items-center max-w-screen-xl pb-9">

                <div className="bg-transparent border-0 w-full rounded-3xl md:gap-0 flex md:flex-row h-full md:items-end flex-col mt-14 md:mt-0">
                    <div className="border-0 h-max md:max-w-lg rounded-3xl text-blue-800 md:w-3/4 pt-7">  
                        <p className="font-bold pl-4 md:pl-12 text-teal-400">QUE ES LO QUE HACEMOS</p>
                        <h1 className="lg:3xl md:text-2xl sm:text-xl text-lg font-bold pl-4 py-4 md:pl-12">Proveemos de... ofrecemos</h1>
                        
                        <div>
                        <p className="lg:2xl md:text-xl sm:text-lg text-base pl-4 md:pl-12">Mejorando la salud mental de nuestros clientes</p>                        
                        <div className=" pl-4 md:pl-12">                  
                        <button className="rounded-3xl p-3 font-medium mt-6 mb-8 mx-auto md:px-11 px-6 text-blue-800 border border-blue-800 bg-white
                        hover:shadow-lg hover:shadow-sky-900/40 hover:scale-110 
                        transition ease-in-out duration-500 hover:-translate-y-1 delay-150">Get Started</button>
                        </div>    
                        </div>
                    </div>
                    <div className=" border-0 h-full md:max-w-lg md:w-2/4">
                      <img src={consulta} alt='consulta' className='h-full' />
                    </div>
                </div>






                <div className=" -order-1 md:order-1 bg-white border-0 h-max md:max-w-lg w-4/5  rounded-3xl text-white flex flex-col gap-5 shadow-lg -mt-32 md:-mt-36">
                    <h2 className="font-bold text-cyan-500 mt-9 text-2xl px-12"> 
                        Contento
                    </h2>
                    <p className="px-12 text-cyan-500">
                        Mejora tu salud mental con nosotros
                    </p>


                    <form className="space-y-5" action="#" method="POST">
                    
                    <div className="w-4/5 mx-auto">
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        autoComplete="off"
                        required
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Nombre completo"
                      />
                    </div>

                
                    <div className="w-4/5 mx-auto">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Dirección de correo electrónico"
                      />
                    </div>

                    <div className="w-4/5 mx-auto">
                      <input
                        id="numero_celular"
                        name="numero_celular"
                        type="tel"
                        autoComplete="off"
                        required
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Número de celular"
                      />
                    </div>


                    <div className="grid grid-cols-2 justify-center items-center gap-2">
                        <div className="ml-auto block rounded-md border-0 sm:text-sm sm:leading-6 w-4/5 p-0 m-0 ">
                            <DateSelector/>
                        </div>
                        <div className=" block rounded-md border-0 sm:text-sm sm:leading-6 w-4/5 p-0 m-0">
                            <TimeSelector/>
                        </div>
                    </div>


                    <div className="mx-auto w-4/5 bg-white rounded-lg text-2xl border-0">
                            <DoctorSelector/>
                    </div>
                    
                    <div className="w-4/5 mx-auto">
                      <input
                        id="mensaje"
                        name="mensaje"
                        type="text"
                        autoComplete="off"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Mensaje"         
                      />
                    </div>
                    
                    <div className="flex items-center">
                    <button 
                    type="submit"
                    className="mx-auto bg-gradient-to-l from-pink-500 to-yellow-500 rounded-3xl p-3 font-medium md:px-12 px-6 text-white 
                    hover:bg-gradient-to-l hover:from-pink-600 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-600/50 hover:scale-110 
                    transition ease-in-out duration-500 hover:-translate-y-1 delay-150 mb-9 mt-2">
                    Get Started
                    </button>
                    </div>
                    </form>
                    

                </div>
            </div>            
        </section>
    );
}