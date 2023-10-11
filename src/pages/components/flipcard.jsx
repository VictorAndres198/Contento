import React from "react";
import { Link } from "react-router-dom";

export default function FlipCard({buttonText,linkTo,imageSrc,title,description,description2,description3}){
    return(
    <div className="group w-72 h-72 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex justify-center bg-white rounded-xl">
                <img className="h-full w-fit rounded-xl object-cover shadow-black/40 -order-1" src={imageSrc}/>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-start justify-center pt-3">
                    <h1 className="text-3xl font-bold">
                        {title}
                    </h1>
                    <p className="text-lg">{description}</p>
                    <p className="text-lg">{description2}</p>
                    <p className="text-lg">{description3}</p>                    
                    <div className=" mx-auto">
                    <Link to={linkTo}>
                    <button className="bg-gradient-to-l from-pink-500 to-yellow-500 rounded-3xl p-3 font-medium my-6 mx-auto px-6 text-white 
                    hover:bg-gradient-to-l hover:from-pink-600 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-600/50 hover:scale-110 
                    transition ease-in-out duration-500 hover:-translate-y-1 delay-150">{buttonText}</button>
                    </Link>
                    </div>
                </div>
            </div>            
        </div>
    </div>
    );
}