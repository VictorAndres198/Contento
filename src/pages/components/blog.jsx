import React from "react";
import { Link } from "react-router-dom";

export default function Blog({linkTo,titulo,fecha,imagen}){
    return(
            <div className="bg-white shadow-lg rounded-3xl h-full lg:w-3/12 md:w-2/4 w-3/4 my-10 text-black text-left px-5">
                <img className="w-full h-2/4 rounded-3xl" alt="BlogImg" src={imagen}>
                </img>
                <p>
                    {fecha}
                </p> 
                <h1 className="text-xl text-blue-800 font-bold">
                    {titulo}
                </h1>        
                <Link to={linkTo}>
                <div className="text-left left-0">
                <button className="font-semibold mt-6 mb-8 md:w-fit text-blue-800 border-0 bg-white">
                Leer más ...
                </button>
                </div>
                </Link>                
            </div>            
    );
}