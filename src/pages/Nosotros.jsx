import React from "react";
import CustomCard from "./components/customcard";

import imgServicios from './img/Servicios.png'
import FormSugerencia from "./components/formsugerencia";

const randomCompanyInfo = [
  "Somos una empresa comprometida con la excelencia.",
  "Nuestro equipo está formado por profesionales apasionados.",
  "Buscamos siempre la innovación en cada proyecto.",
];

const videoUrl = "https://www.youtube.com/watch?v=vvpXPZF2gqk";

export default function Nosotros() {
  return (
    <section className="max-w-screen-xl mx-auto py-10">
      <div className="flex md:flex-row flex-col">
        <div className="w-96 h-fit">
          <div className="bg-transparent p-4 rounded-md">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Sobre Nosotros</h2>
            <p className="text-blue-800 text-xl">Somos una empresa comprometida con la excelencia.</p>
            <p className="text-blue-800 text-xl">Nuestro equipo está formado por profesionales apasionados.</p>
            <p className="text-blue-800 text-xl">Buscamos siempre la innovación en cada proyecto.</p>
          </div>
        </div>

        <div className="flex-grow">
          <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
            <iframe
              title="Video de la empresa"
              className="absolute top-0 left-0 w-full h-full px-2 py-2 rounded-3xl"
              src={videoUrl.replace("watch?v=", "embed/")}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <CustomCard
            imageSrc={imgServicios}
            title="Nuestros Servicios"
            description="Mejorando tu bien estar emocional"
            description2="En nuestra consultoría, nosotros ofrecemos un gran rango
             de servicios psicológicos para ayudarte a optener una mente sana.
             Nuestros servicios están diseñados para empoderarte en tu viaje hacia una mente más sana 
             y una vida más feliz. Ya sea que busques apoyo individual o desees explorar opciones farmacológicas, 
             estamos aquí para ayudarte a encontrar el equilibrio emocional que necesitas."
            buttonText="Ver más"
            linkTo="/"
            order={-1} // Cambia el orden
            backgroundColor="transparent" // Cambia el fondo
            hidden={true}
            boxShadow="none"
        />
        <h2 className="pt-5 md:pl-20 pl-11 font-semibold pb-5 text-4xl text-blue-800">
                Sugerencias</h2>
        <div className="bg-white border-0 h-max md:max-w-4xl w-4/5 md:w-10/12 rounded-3xl text-white md:mx-auto
        flex flex-col gap-5 shadow-lg mx-auto">
            <h2 className="font-bold text-blue-800 mt-9 text-2xl px-12"> 
                    Dinos en que podemos mejorar!
                </h2>
            <FormSugerencia/>
        </div>
    </section>
  );
}
