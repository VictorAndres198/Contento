import React from "react";
import { TypeAnimation } from 'react-type-animation';
import doctor from './img/doctor.svg'
import consulta from './img/consulta.svg'
import Home2 from './Home2'
import FlipCard from "./components/flipcard";
import FormCita from "./components/form";
import CustomCard from "./components/customcard";



export default function Home(){
    return(
        <section className="flex flex-col items-center">
        <div className="grid md:grid-cols-2 bg-gradient-to-r from-blue-700 to-sky-700 rounded-3xl md:mx-auto m-7 max-w-screen-xl pt-10 w-11/12">
        <div className="text-white lg:py-6 lg:px-4 lg:mt-7 lg:mb-7 mt-5">
            <div className="w-full h-full mx-auto text-left flex flex-col justify-center md:pl-12 pl-4">                
                <p className="font-bold">Contento</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Contento</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Mejorando la salud mental de</p>
                        <TypeAnimation className="md:text-5xl sm:text-4xl text-xl font-bold"
                            sequence={[
                            "I'm a Developer",
                            1000,
                            "I'm a Writer",
                            1000,
                            "I'm a Designer",
                            1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            style={{ fontSize: '2em' }}
                        />
                    <p className="md:text-2xl text-xl font-bold text-slate-800">asdasdasd</p>
                    <div className="flex justify-center md:pr-12 pr-4">
                    <button className="bg-gradient-to-l from-pink-500 to-yellow-500 rounded-3xl p-3 font-medium my-6 mx-auto md:px-12 px-6 text-white 
                    hover:bg-gradient-to-l hover:from-pink-600 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-600/50 hover:scale-110 
                    transition ease-in-out duration-500 hover:-translate-y-1 delay-150">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
         <div className="md:flex align-middle">                      
        <img className='mx-auto p-7 h-96 md:h-auto' src={doctor} alt='doctor'/>
        </div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 w-full 
        max-w-screen-xl md:items-end justify-center pb-9">
            <div className="bg-transparent border-0 rounded-3xl 
            text-blue-800">
                <CustomCard
                imageSrc={consulta}
                title="Título del Card 1"
                description="Descripción del Card 1"
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
                <h2 className="font-bold text-cyan-500 mt-9 text-2xl px-12"> 
                    Contento
                </h2>
                <p className="px-12 text-cyan-500">
                    Mejora tu salud mental con nosotros
                </p>
                <FormCita/>
            </div>
        </div>   

        <CustomCard
            imageSrc={consulta}
            title="Título del Card 1"
            description="Descripción del Card 1"
            buttonText="Ver más"
            linkTo="/"
        />
        <CustomCard
            imageSrc={consulta}
            title="Título del Card 1"
            description="Descripción del Card 1"
            buttonText="Ver más"
            linkTo="/"
            order={-1} // Cambia el orden
            backgroundColor="transparent" // Cambia el fondo
            hidden={true}
            boxShadow="none"
        />
        
        <div className="flex flex-col gap-3 justify-center items-center md:flex-row md:-mt-32 pt-16 md:pt-0">           
           <FlipCard
           imageSrc={doctor}
           title="FlipCard1"
           description="Descripcion1"
           description2="Descripcion1"
           description3="Descripcion3"
           buttonText="Ver más"
           linkTo="/"
           />
           <FlipCard
           imageSrc={doctor}
           title="FlipCard1"
           description="Descripcion1"
           description2="Descripcion1"
           description3="Descripcion3"
           buttonText="Ver más"
           linkTo="/"
           />
           <FlipCard
           imageSrc={doctor}
           title="FlipCard1"
           description="Descripcion1"
           description2="Descripcion1"
           description3="Descripcion3"
           buttonText="Ver más"
           linkTo="/"
           />
        </div>  

        <div className="grid md:grid-cols-2 bg-gradient-to-r from-blue-700 to-sky-700 rounded-3xl md:mx-auto m-7 max-w-screen-xl pt-10 w-11/12">
        <div className="text-white lg:py-6 lg:px-4 lg:mt-7 lg:mb-7 mt-5">
            <div className="w-full h-full mx-auto text-left flex flex-col justify-center md:pl-12 pl-4">                
                <p className="font-bold">Contento</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Contento</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Mejorando la salud mental de</p>
                        <TypeAnimation className="md:text-5xl sm:text-4xl text-xl font-bold"
                            sequence={[
                            "I'm a Developer",
                            1000,
                            "I'm a Writer",
                            1000,
                            "I'm a Designer",
                            1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            style={{ fontSize: '2em' }}
                        />
                    <p className="md:text-2xl text-xl font-bold text-slate-800">asdasdasd</p>
                    <div className="flex justify-center md:pr-12 pr-4">
                    <button className="bg-gradient-to-l from-pink-500 to-yellow-500 rounded-3xl p-3 font-medium my-6 mx-auto md:px-12 px-6 text-white 
                    hover:bg-gradient-to-l hover:from-pink-600 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-600/50 hover:scale-110 
                    transition ease-in-out duration-500 hover:-translate-y-1 delay-150">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
         <div className="md:flex align-middle">                      
        <img className='mx-auto p-7 h-96 md:h-auto' src={doctor} alt='doctor'/>
        </div>
        </div>


        <Home2/>

        </section>
    );
}