import React from "react";
import "../../index.css"
import Test1 from "../img/Test1.png"
import Test2 from "../img/Test2.png"
import Test3 from "../img/Test3.png"

export default function TestimonioCarousel(){
    return(
        <div className="text-cyan-400 lg:max-w-screen-xl mx-auto w-full my-7">
            <div className="w-full h-full mx-auto text-center flex flex-col justify-center">
                <div className="m-0 p-0 inline-flex pt-5 place-items-center h-full bg-transparent w-full overflow-hidden testimonio-container">                    
                    <div className="grid grid-flow-col p-5 gap-10 card-container">

                        <figure className="bg-white rounded-2xl shadow-lg 
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-green-500">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                Recomiendo encarecidamente esta página. Me ha ayudado a encontrar paz y equilibrio en mi vida. Los recursos y 
                                consejos proporcionados son invaluables. ¡Gracias por hacer una diferencia y por ayudarme en esta travesía!
                                </p>
                            </blockquote>
                            <div className="rounded-b-2xl flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-green-700 to-cyan-400">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={Test1} alt="perfil" className="w-full h-full rounded-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Ana Lucía Vargas</div>
                                    <div className="opacity-70">Profesora de Yoga</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                        <figure className="bg-white rounded-2xl shadow-lg
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-blue-700">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                Esta página es excepcional. Ha sido un faro de luz en mi vida. Los contenidos son excelentes, y 
                                me han ayudado a gestionar mejor mi salud mental, recomiendo encarecidamente esta página. ¡No puedo agradecerles lo suficiente!
                                </p>
                            </blockquote>
                            <div className="rounded-b-2xl flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-blue-800 to-cyan-600">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={Test2} alt="perfil" className="w-full h-full rounded-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Carlos Rojas</div>
                                    <div className="opacity-70">Ingeniero de Software</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                        <figure className="bg-white rounded-2xl shadow-lg
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-pink-600">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                Como profesional de la salud mental, encuentro esta página extremadamente valiosa. Los recursos son sólidos y las 
                                recomendaciones son excelentes. ¡Es una herramienta imprescindible para cualquiera que busque apoyo!
                                </p>
                            </blockquote>
                            <div className="rounded-b-2xl flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-pink-600 to-purple-500">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={Test3} alt="perfil" className="w-full h-full rounded-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Carmen Isabel López</div>
                                    <div className="opacity-70">Psicóloga Clínica</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                                                
                    </div>





                    <div className="grid grid-flow-col p-5 gap-10 card-container">
                        <figure className="bg-white rounded-2xl shadow-lg 
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-green-500">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                Recomiendo encarecidamente esta página. Me ha ayudado a encontrar paz y equilibrio en mi vida. Los recursos y 
                                consejos proporcionados son invaluables. ¡Gracias por hacer una diferencia y por ayudarme en esta travesía!
                                </p>
                            </blockquote>
                            <div className="rounded-b-2xl flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-green-700 to-cyan-400">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={Test1} alt="perfil" className="w-full h-full rounded-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Ana Lucía Vargas</div>
                                    <div className="opacity-70">Profesora de Yoga</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                        <figure className="bg-white rounded-2xl shadow-lg
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-blue-700">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                Esta página es excepcional. Ha sido un faro de luz en mi vida. Los contenidos son excelentes, y 
                                me han ayudado a gestionar mejor mi salud mental, recomiendo encarecidamente esta página. ¡No puedo agradecerles lo suficiente!
                                </p>
                            </blockquote>
                            <div className="rounded-b-2xl flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-blue-800 to-cyan-600">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={Test2} alt="perfil" className="w-full h-full rounded-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Carlos Rojas</div>
                                    <div className="opacity-70">Ingeniero de Software</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                        <figure className="bg-white rounded-2xl shadow-lg
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-pink-600">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                Como profesional de la salud mental, encuentro esta página extremadamente valiosa. Los recursos son sólidos y las 
                                recomendaciones son excelentes. ¡Es una herramienta imprescindible para cualquiera que busque apoyo!
                                </p>
                            </blockquote>
                            <div className="rounded-b-2xl flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-pink-600 to-purple-500">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={Test3} alt="perfil" className="w-full h-full rounded-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Carmen Isabel López</div>
                                    <div className="opacity-70">Psicóloga Clínica</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>

                    </div>


                </div>
            </div>
        </div>
    );
}