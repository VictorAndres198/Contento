import React from "react";

export default function Home4(){
    return(
        <div className="bg-white border border-slate-500 md:w-full rounded-3xl text-white gap-5 md:gap-0 shadow-lg shadow-gray-300 
        flex md:flex-row h-full flex-col mt-4 md:mt-0 max-w-screen-xl md:mx-auto mx-8">

                <div className="bg-white border border-slate-500 h-max rounded-3xl text-blue-800 md:w-full pt-7">  
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

                <div className="bg-white border border-slate-500 h-max rounded-3xl text-blue-800 md:w-full text-center">
                        IMAGEN
               </div>
        </div>
    );
}