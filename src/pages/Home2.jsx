import React from "react";
import { TypeAnimation } from 'react-type-animation';


export default function Home2(){
    return(
        <div className="text-cyan-400 max-w-screen-xl mx-auto">
            <div className="w-full h-screen mx-auto text-center flex flex-col justify-center">
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
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-3 font-medium my-6 mx-auto px-6 text-white">Get Started</button>                    
                </div>
            </div>
        </div>
    );
}