import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

import TestimonioCarousel from './components/TestimonioCarousel'
import FlipCard from "./components/flipcard";
import FormCita from "./components/form";
import CustomCard from "./components/customcard";
import Blog from "./components/blog";

import imgBlog1 from './img/Blog1.png'
import imgBlog2 from './img/Blog2.png'
import imgBlog3 from './img/Blog3.png'
import imgHome from './img/Home.png'
import imgReservaAhora from './img/ReservaAhora.png'
import imgServicios from './img/Servicios.png'
import imgCC2 from './img/CC2.png'
import imgCC1 from './img/CC1.png'
import imgF1 from './img/Flip1.png'
import imgF2 from './img/Flip2.png'
import imgF3 from './img/Flip3.png'

export default function Home(){
    return(
        <section className="flex flex-col items-center">
        <div className="grid md:grid-cols-2 bg-gradient-to-r from-blue-900 to-sky-700 rounded-3xl md:mx-auto m-7 max-w-screen-xl pt-10 w-11/12">
        <div className="text-white lg:py-6 lg:px-4 lg:mt-7 lg:mb-7 mt-5">
            <div className="w-full h-full mx-auto text-left flex flex-col justify-center md:pl-12 pl-4">                
                <div>
                    <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold">Mantente Contento con nuestra ayuda!</h1>
                    <p className="md:text-2xl text-lg font-medium text-white pt-5">Nuestro equipo de experimentados psicólogos te ayudarán a afrontar cualquier malestar que estes experimentando</p>
                    <div className="flex justify-center md:pr-12 pr-4">
                    <button className="bg-gradient-to-l from-green-500 to-lime-500 rounded-3xl p-3 font-semibold my-6 mx-auto md:px-12 px-16 text-white 
                    hover:bg-gradient-to-l hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-110 
                    transition ease-in-out duration-500 hover:-translate-y-1 delay-150">Empieza ahora</button>
                    </div>
                </div>
            </div>
        </div>
         <div className="md:flex align-middle">                      
        <img className='mx-auto p-7 h-96 md:h-auto' src={imgHome} alt='doctor'/>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full 
        max-w-screen-xl md:items-end justify-center pb-9">
            <div className="bg-transparent border-0 rounded-3xl 
            text-blue-800">
                <CustomCard
                imageSrc={imgCC1}
                title="Que es lo que hacemos"
                description="Proveemos de Salud Mental"
                description2="Ofrecemos un comprensivo tratamiento con nuestros mejores doctores"
                buttonText="Ver más"
                linkTo="/"
                backgroundColor="transparent" // Cambia el fondo
                hidden={false}
                boxShadow="none"
                height={354}
                />
            </div>
            <div className=" -order-1 md:order-1 bg-white border-0 h-max md:max-w-lg w-4/5 md:w-10/12 lg:w-10/12 rounded-3xl text-white  md:mx-0 lg:mx-auto
            flex flex-col gap-5 shadow-lg -mt-32 md:-mt-36 mx-auto">
                <h2 className="font-bold text-blue-800 mt-9 text-2xl px-12"> 
                    Reserva una cita
                </h2>
                <p className="px-12 text-blue-800">
                    Mejora tu salud mental con nosotros
                </p>
                <FormCita/>
            </div>
        </div>   

        <CustomCard
            imageSrc={imgCC2}
            title="Introducción"
            description="Salud Mental para ti y tu familia con nuestros mejores doctores"
            description2="Tu Destino para el Bienestar Mental! En Contento, estamos dedicados a 
            ayudarte a encontrar la paz interior y el equilibrio emocional. Explora nuestro sitio para descubrir una amplia gama de contenido, servicios terapéuticos y testimonios de 
            personas que han encontrado la serenidad a través de nuestro enfoque integral."
            buttonText="Ver más"
            linkTo="/"
        />
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
        
        <div className="flex flex-col gap-3 
        justify-center items-center md:flex-row md:-mt-32 pt-16 md:pt-0 w-full">           
           <FlipCard
           imageSrc={imgF1}
           title="Evaluación y Diagnóstico Profesional"
           description="Ofrecemos evaluaciones exhaustivas 
           realizadas por terapeutas y psiquiatras altamente capacitados 
           para determinar trastornos de salud mental."
           buttonText="Ver más"
           linkTo="/"
           />
           <FlipCard
           imageSrc={imgF2}
           title="Tratamientos Psicoterapéuticos"
           description="Nuestro equipo de psicólogos y terapeutas brinda una amplia variedad de terapias, 
           desde terapia cognitivo-conductual hasta terapia de exposición."
           buttonText="Ver más"
           linkTo="/"
           />
           <FlipCard
           imageSrc={imgF3}
           title="Suministro de Medicamentos"
           description="Para aquellos pacientes que requieren medicamentos como parte de su tratamiento, 
           ofrecemos servicios de administración de medicamentos."
           buttonText="Ver más"
           linkTo="/"
           />
        </div>  

        <div className="grid md:grid-cols-2 bg-gradient-to-r from-blue-800 to-cyan-700 rounded-3xl md:mx-auto m-7 max-w-screen-xl w-11/12">
        <div className="order-2 md:order-1 text-white lg:py-6 lg:px-4 lg:mt-7 lg:mb-7 mt-5">
            <div className="w-full h-full mx-auto text-left flex flex-col justify-center md:pl-12 pl-4">                
                <p className="font-bold text-cyan-400 text-2xl pb-4">Soporte en línea</p>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold pb-3">Tu salud mental en nuestras manos</p>
                    <p className="md:text-2xl sm:text-xl text-lg font-medium pb-3">Nuestros personal capacitado te ayudara con:</p>
                        <TypeAnimation className="md:text-2xl sm:text-xl text-lg font-medium"
                            sequence={[
                            "Psicoterapia",
                            1000,
                            "Técnicas de meditación",
                            1000,
                            "Control de emociones negativas",
                            1000,
                            "Tests de personalidad",
                            1000,
                            "Apoyo emocional",
                            1000,
                            "Receta de medicamentos",
                            1000,
                            "Asesoría experta",
                            1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            
                        />
                    <div className="flex justify-center md:pr-12 pr-4 pb-4 md:pb-0 pt-6">
                    <button className="bg-gradient-to-l from-green-500 to-lime-500 rounded-3xl p-3 font-semibold my-6 mx-auto md:px-12 px-16 text-white 
                    hover:bg-gradient-to-l hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-110 
                    transition ease-in-out duration-500 hover:-translate-y-1 delay-150">Reserva Ahora</button>
                    </div>
                </div>
            </div>
        </div>
         <div className="md:flex align-middle order-1 md:order-2">                      
        <img className='mx-auto h-96 md:h-auto' src={imgReservaAhora} alt='doctor'/>
        </div>
        </div>

        


        
        <div className="text-blue-800 lg:max-w-screen-xl mx-auto w-full">   
        <div className="w-full h-full mx-auto text-center flex flex-col justify-center mt-4">   
        
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-cyan-400">Testimonios</h1>
                            
                <p className="md:text-5xl sm:text-4xl text-xl font-bold pb-3">Escucha lo que nuestros pacientes tienen que decir:</p>
                                
                <p className="md:text-2xl text-lg font-semibold text-slate-800 py-4">A continuación, encontrarás los testimonios de personas que han 
                experimentado una transformación positiva en su bienestar mental y emocional gracias a nuestro apoyo.</p>
                
                <TestimonioCarousel/>

            <div className="bg-white h-12 bg-gradient-to-t from-white to-[#F4FFFB]"></div>
            <div className="bg-white h-full shadow-lg">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 pt-9 text-cyan-400">Nuestros Blogs</h1>                            
                <p className="md:text-5xl sm:text-4xl text-xl font-bold pb-3">Cuidando tu bienestar emocional</p>
                <p className="md:text-2xl text-lg font-semibold text-slate-800 py-4">Explora nuestro contenido sobre bienestar mental 
                y descubre consejos para cuidar tu salud emocional.</p>




                

            <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 lg:gap-7 px-10 md:px-3 lg:px-0">
                <Blog                
                imagen={imgBlog1}   
                fecha="Octubre 19, 2023"
                titulo="Estrategias Efectivas para el Bienestar Mental"
                linkTo="/"
                />
                <Blog   
                imagen={imgBlog2} 
                fecha="Octubre 23, 2023"
                titulo="Consejos Prácticos para una Mente Equilibrada"
                linkTo="/"
                />
                <Blog       
                imagen={imgBlog3}         
                fecha="Octubre 25, 2023"
                titulo="Explorando el Camino hacia la Salud Mental"
                linkTo="/"
                />
            </div>
            <Link to="/">
                <div className="flex text-center">
                <button className="rounded-3xl p-3 font-semibold mb-12 mx-auto md:w-32 lg:w-48 w-48 text-blue-800 border border-blue-800 bg-white 
                hover:shadow-lg hover:shadow-sky-900/40 hover:scale-110 transition ease-in-out duration-500 hover:-translate-y-1 delay-150">
                Cargar más
                </button>
                </div>
            </Link> 
            </div>
            <div className="bg-white h-12 bg-gradient-to-b from-white to-[#F4FFFB]"></div>                

        </div>  
        </div> 
        </section>
    );
}