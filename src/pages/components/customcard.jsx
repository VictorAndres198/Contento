import React from "react";
import { Link } from "react-router-dom";

export default function CustomCard({ imageSrc, title, description,description2, buttonText, linkTo, order, backgroundColor,hidden,boxShadow, height}) {

    return (
    <div className="bg-white border-0 w-full gap-5 md:gap-0 shadow-lg flex md:flex-row h-full flex-col mt-4 md:mt-0 max-w-screen-xl md:mx-auto" 
    style={{ backgroundColor: backgroundColor,boxShadow:boxShadow }} >
      <div className="bg-transparent border-0 h-max rounded-3xl text-blue-800 pt-7  md:w-10/12 mx-8 md:mx-auto">
        <h1 className="font-bold pl-4 md:pl-12 text-teal-400 text-lg">{title}</h1>
        <p className="lg:3xl md:text-2xl sm:text-xl text-xl font-bold pl-4 py-4 md:pl-12">{description}</p>
        <div>
          <p className="lg:2xl md:text-xl sm:text-lg text-base pl-4 md:pl-12">{description2}</p>
          <div className="pl-4 md:pl-12" style={{display:hidden?"none":"block"}}>
            <Link to={linkTo}>
              <button className="font-semibold rounded-3xl p-3 mt-6 mb-8 mx-auto md:w-32 lg:w-48 w-48 text-blue-800 border border-blue-800 bg-white 
              hover:shadow-lg hover:shadow-sky-900/40 hover:scale-110 transition ease-in-out duration-500 hover:-translate-y-1 delay-150">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-0 md:max-w-lg w-full mx-auto" style={{order:order}}>
      <div className="flex justify-center items-center h-full">
        <img src={imageSrc} alt="imagen" className="md:mx-0" style={{height:height}}/>
        </div>
      </div>
    </div>
  );
}