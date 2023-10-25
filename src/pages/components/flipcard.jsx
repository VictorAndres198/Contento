import React from "react";
import { Link } from "react-router-dom";

export default function FlipCard({buttonText,linkTo,imageSrc,title,description}){
    return(
    <div className="group w-72 h-72">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex justify-center bg-white rounded-xl">
                <img className="h-full w-fit rounded-xl object-cover shadow-black/40 -order-1" src={imageSrc}/>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-2  text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-start justify-center pt-3">
                    <h1 className="text-2xl font-bold text-blue-800">
                        {title}
                    </h1>
                    <p className="text-medium font-medium text-slate-900">{description}</p>                 
                    <div className="mx-auto pt-3">
                    <Link to={linkTo}>
                    <button className="rounded-3xl p-3 font-semibold mx-auto md:w-32 lg:w-48 w-48 text-blue-800 border border-blue-800 bg-white 
                    hover:shadow-lg hover:shadow-sky-900/40 hover:scale-110 transition ease-in-out duration-500 hover:-translate-y-1 delay-150">{buttonText}</button>
                    </Link>
                    </div>
                </div>
            </div>            
        </div>
    </div>
    );
}