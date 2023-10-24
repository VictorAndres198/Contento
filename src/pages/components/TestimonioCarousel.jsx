import React from "react";
import User from "../img/user.svg"
import "../../index.css"

export default function TestimonioCarousel(){
    return(
        <div className="text-cyan-400 lg:max-w-screen-xl mx-auto w-full my-7">
            <div className="w-full h-full mx-auto text-center flex flex-col justify-center">
                <div className="m-0 p-0 inline-flex pt-5 place-items-center h-full bg-transparent w-full overflow-hidden testimonio-container">                    
                    <div className="grid grid-flow-col p-5 gap-10 card-container">
                        <figure className="bg-white rounded-2xl shadow-lg 
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-yellow-100">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, culpa porro? 
                                    Reprehenderit deleniti possimus, debitis doloribus ullam perspiciatis adipisci officia in illo
                                    corporis at necessitatibus temporibus ipsa optio magnam voluptatum.
                                </p>
                            </blockquote>
                            <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-yellow-500 to-orange-500">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={User} alt="perfil" className="w-full h-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Jon Bloomer</div>
                                    <div className="opacity-70">Front-End Developer</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                        <figure className="bg-white rounded-2xl shadow-lg
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-yellow-100">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, culpa porro? 
                                    Reprehenderit deleniti possimus, debitis doloribus ullam perspiciatis adipisci officia in illo
                                    corporis at necessitatibus temporibus ipsa optio magnam voluptatum.
                                </p>
                            </blockquote>
                            <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-yellow-500 to-orange-500">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={User} alt="perfil" className="w-full h-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Jon Bloomer</div>
                                    <div className="opacity-70">Front-End Developer</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                        <figure className="bg-white rounded-2xl shadow-lg
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-yellow-100">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, culpa porro? 
                                    Reprehenderit deleniti possimus, debitis doloribus ullam perspiciatis adipisci officia in illo
                                    corporis at necessitatibus temporibus ipsa optio magnam voluptatum.
                                </p>
                            </blockquote>
                            <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-yellow-500 to-orange-500">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={User} alt="perfil" className="w-full h-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Jon Bloomer</div>
                                    <div className="opacity-70">Front-End Developer</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                    </div>

                    <div className="grid grid-flow-col p-5 gap-10 card-container">
                        <figure className="bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-yellow-100">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, culpa porro? 
                                    Reprehenderit deleniti possimus, debitis doloribus ullam perspiciatis adipisci officia in illo
                                    corporis at necessitatibus temporibus ipsa optio magnam voluptatum.
                                </p>
                            </blockquote>
                            <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-yellow-500 to-orange-500">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={User} alt="perfil" className="w-full h-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Jon Bloomer</div>
                                    <div className="opacity-70">Front-End Developer</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                        <figure className="bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-yellow-100">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, culpa porro? 
                                    Reprehenderit deleniti possimus, debitis doloribus ullam perspiciatis adipisci officia in illo
                                    corporis at necessitatibus temporibus ipsa optio magnam voluptatum.
                                </p>
                            </blockquote>
                            <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-yellow-500 to-orange-500">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={User} alt="perfil" className="w-full h-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Jon Bloomer</div>
                                    <div className="opacity-70">Front-End Developer</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                        <figure className="bg-white rounded-2xl shadow-lg
                        rotate-1 hover:rotate-0 transition duration-500 w-96">
                            <blockquote className="p-8">
                                <div className="mb-5 text-yellow-100">
                                    <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 
                                    8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 
                                    13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 
                                    5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                                </div>
                                <p className="font-bold text-lg text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, culpa porro? 
                                    Reprehenderit deleniti possimus, debitis doloribus ullam perspiciatis adipisci officia in illo
                                    corporis at necessitatibus temporibus ipsa optio magnam voluptatum.
                                </p>
                            </blockquote>
                            <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br
                            from-yellow-500 to-orange-500">
                                <div className="flex items-center gap-5 text-start">
                                <div className="rounded-full border-4 w-14 h-14 border-white">
                                    <img src={User} alt="perfil" className="w-full h-full"></img>
                                </div>
                                <figcaption className="text-white font-semibold">
                                    <div>Jon Bloomer</div>
                                    <div className="opacity-70">Front-End Developer</div>
                                </figcaption>
                            </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}