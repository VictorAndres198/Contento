import React from "react";
import { Link } from "react-router-dom";
import ContentoLogo from "../img/ContentoLogoB.png"

export default function Footer(){
    return(
        <div className="text-white lg:max-w-[1278px] mx-auto w-full h-full rounded-tl-[120px] 
        bg-gradient-to-r from-blue-900 to-cyan-950 flex flex-col">
            <div className="pt-12 gap-5 md:gap-0 flex flex-col md:flex-row justify-center mx-16 py-3">

                <div className="flex flex-col md:w-1/4 h-full md:pr-12">
                <div className="w-full items-center align-middle">
                    <img className="font-bold text-sm pb-2 h-12" alt="Logo" src={ContentoLogo}></img>
                </div>
                <p className="py-2 text-sm">
                    Nuestra misión es ayudarte a cuidar de tu salud mental y emocional. 
                    Siempre aquí para ti, ofreciendo apoyo y recursos para que te sientas mejor. 
                    </p>
                </div>
                
                <div className="flex flex-col md:w-1/4 h-full">
                <div className="w-full items-center align-middle text-sm">
                <p className="font-bold pb-2">Dirección</p>
                <p className="py-3 md:pr-16">Salud Mental, Jirón Huayna Capac, Jesús María, Lima, Perú</p>
                <p className="w-fit border-b border-gray-400">Contento@gmail.com</p>
                <p className="py-3 font-bold">+51 - 961 427 551</p>
                </div>
                </div>

                <div className="flex flex-col md:w-1/4 h-full">
                <div className="w-full items-center align-middle">
                <p className="font-bold text-sm pb-2">Links</p>
                <div className="py-1"><Link to="/">Inicio</Link></div>
                <div className="py-1"><Link to="/Productos">Productos</Link></div>
                <div className="py-1"><Link to="/PreguntaFrecuente">Preguntas Frecuentes</Link></div>
                <div className="py-1"><Link to="/Contactanos">Contáctanos</Link></div>
                <div className="py-1"><Link to="/Nosotros">Nosotros</Link></div>
                </div>
                </div>

                <div className="flex flex-col md:w-1/4 h-full">
                <div className="w-full items-center align-middle">
                <p className="font-bold text-sm pb-2">Suscribirse</p>
                </div>
                </div>

            </div>
            <div className="flex justify-center">
                <div className=" w-11/12 border-t border-gray-400 flex justify-center text-sm py-5">
                    Contento ©2023 - Derechos Reservados
                </div>
            </div>
        </div>
    );
}