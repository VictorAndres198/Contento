import React from "react";
import GoogleMap from './components/GoogleMap'; 
import FormReclamo from "./components/formreclamo";

export default function Contactanos(){
    return(
        <section className="max-w-screen-xl mx-auto pt-8 pb-24">

            <h2 className="md:pl-20 pl-11 font-semibold pb-5 text-4xl text-blue-800">
                Ubicación:</h2>

        <div className="flex md:flex-row flex-col gap-10">

            <div className="font-medium mx-auto md:mx-0">
            <h2 className="font-semibold">Dirección:</h2>
                <p>Salud Mental, Jirón Huayna Capac, Jesús María, Lima, Perú</p>
            <h2 className="font-semibold">Referencia:</h2>
                <p>Al frente del parque Andrés Avelino Cáceres</p>
            <h2 className="font-semibold">Horario de atención:</h2>
                <p>Lunes a Domingos de 8 a.m. a 9 p.m.</p>
            <h2 className="font-semibold">Número de contacto:</h2>
                <p>961 427 551</p>
            <h2 className="font-semibold">Email:</h2>
                <p>Contento@gmail.com</p>            
            </div>

            <div className="mx-auto md:mx-0 md:ml-20 lg:w-6/12 md:w-7/12 w-96 h-96 -order-1">                
                <GoogleMap />
            </div>

        </div>
        <h2 className="pt-5 md:pl-20 pl-11 font-semibold pb-5 text-4xl text-blue-800">
                Libro de reclamaciones</h2>
        <div className="bg-white border-0 h-max md:max-w-4xl w-4/5 md:w-10/12 rounded-3xl text-white md:mx-auto
        flex flex-col gap-5 shadow-lg mx-auto">
            <h2 className="font-bold text-blue-800 mt-9 text-2xl px-12"> 
                    Envía tu reclamo
                </h2>
            <FormReclamo/>
        </div>
    </section>
    );
}