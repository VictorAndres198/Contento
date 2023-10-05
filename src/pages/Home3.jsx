import React from "react";

export default function Home3(){
    return(
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2  md:mx-auto mx-8 justify-items-center max-w-screen-xl pb-9">

                <div className="bg-white border border-slate-500 w-full rounded-3xl text-white gap-5 md:gap-0 shadow-lg shadow-gray-300 flex md:flex-row h-full md:items-end flex-col mt-4 md:mt-0">
                    



                    <div className="bg-white border border-slate-500 h-max md:max-w-lg rounded-3xl text-blue-800 md:w-3/4 pt-7">  
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

                    <div className="bg-white border border-slate-500 h-max md:max-w-lg rounded-3xl text-blue-800 md:w-2/4 text-center">
                        IMAGEN
                    </div>
                </div>






                <div className=" -order-1 md:order-1 bg-white border border-slate-500 h-max md:max-w-lg w-4/5  rounded-3xl text-white flex flex-col gap-5 shadow-lg shadow-gray-300 -mt-32 md:-mt-36">
                    <h2 className="font-bold text-cyan-500 mt-9 text-2xl px-12"> 
                        Contento
                    </h2>
                    <p className="px-12 text-cyan-500">
                        Mejora tu salud mental con nostros
                    </p>
                    <div className="mx-auto w-4/5 bg-white rounded-lg mt-4 text-2xl px-5 text-slate-500 border border-slate-500">
                            sd
                    </div>                    
                    <div className="mx-auto w-4/5 bg-white rounded-lg text-2xl px-5 text-slate-500 border border-slate-500">
                            sd
                    </div>
                    <div className="mx-auto w-4/5 bg-white rounded-lg text-2xl px-5 text-slate-500 border border-slate-500">
                            sd
                    </div>
                    <div className="flex flex-row justify-center mx-1">
                        <div className="border border-slate-500 rounded-lg text-slate-500 px-5 text-2xl w-2/5 mx-1">
                            asd
                        </div>
                        <div className="border border-slate-500 rounded-lg text-slate-500 px-5 text-2xl w-2/5 mx-1">
                            asds
                        </div>
                    </div>
                    <div className="mx-auto w-4/5 bg-white rounded-lg text-2xl px-5 text-slate-500 border border-slate-500">
                            sd
                    </div>
                    <div className="mx-auto w-4/5 bg-white rounded-lg text-2xl px-5 text-slate-500 border border-slate-500">
                            sd
                    </div>
                    <button className="bg-gradient-to-l from-pink-500 to-yellow-500 rounded-3xl p-3 font-medium mx-auto md:px-12 px-6 text-white 
                    hover:bg-gradient-to-l hover:from-pink-600 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-600/50 hover:scale-110 
                    transition ease-in-out duration-500 hover:-translate-y-1 delay-150 mb-9 mt-2">Get Started</button>
                </div>
            </div>            
        </section>
    );
}
/*! Parte de un inicio de sesión que luego podria gregar
<form className="space-y-6" action="#" method="POST">
<div>
  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    Email address
  </label>
  <div className="mt-2">
    <input
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
</div>

<div>
  <div className="flex items-center justify-between">
    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
      Password
    </label>
    <div className="text-sm">
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
        Forgot password?
      </a>
    </div>
  </div>
  <div className="mt-2">
    <input
      id="password"
      name="password"
      type="password"
      autoComplete="current-password"
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
</div>

<div>
  <button
    type="submit"
    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Sign in
  </button>
</div>
</form>
*/