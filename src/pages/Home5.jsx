import React from "react";
import consulta from './img/consulta.svg'

export default function Home4(){
    return(
        <div className="bg-transparent border-0 w-full gap-5 md:gap-0
        flex md:flex-row h-full flex-col mt-4 md:mt-0 max-w-screen-xl md:mx-auto pt-24">

                <div className="bg-transparent border-0 h-max rounded-3xl text-blue-800 pt-7 w-full md:w-2/4">  
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

                <div className="border-0 h-full md:max-w-lg w-full items-center mx-auto -order-1">
                      <img src={consulta} alt='consulta' className='h-full' />
                </div>
        </div>
    );
}