import React from "react";
import GoogleMap from './components/GoogleMap'; 

export default function Nosotros(){
    return(
        <section className="max-w-screen-xl mx-auto py-10">
            <div className="flex md:flex-row flex-col">
                <div className="">
                    
                </div>
                
                <div className="w-96 h-96">
                    <h2>Nuestra Ubicación</h2>
                    <GoogleMap />    
                </div>
            </div>
        </section>
    );
}