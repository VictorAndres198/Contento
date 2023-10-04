import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Home2 from './Home2'
import Home3 from './Home3'
import doctor from './img/fdoctor.svg'



export default function Home(){
    return(
        <section>
        <div className="grid md:grid-cols-2 bg-gradient-to-r from-blue-700 to-sky-700 rounded-3xl md:mx-auto m-7 max-w-screen-xl">
        <div className="text-white lg:py-6 lg:px-4 lg:mt-7 lg:mb-7 mt-5">
            <div className="w-full h-full mx-auto text-left flex flex-col justify-center md:pl-12 pl-4">
                <img src={doctor} alt='doctor' className='mx-auto h-56 md:hidden' />
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
                    <button className="bg-gradient-to-l from-pink-500 to-yellow-500 rounded-3xl p-3 font-medium my-6 mx-auto md:px-12 px-6 text-white hover:bg-gradient-to-l hover:from-pink-600 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-600/50 hover:scale-110 transition ease-in-out duration-500 hover:-translate-y-1 delay-150">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
         <div className="mt-7 mr-7 mb-7 hidden  md:flex align-middle">                      
        <img className='mx-auto p-7' src={doctor} alt='doctor'/>
        </div>
        </div>
        <Home3/>
        <Home2/>
        </section>
    );
}