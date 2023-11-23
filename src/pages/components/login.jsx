import React, { useState } from "react";
import {EnvelopeIcon,LockClosedIcon,XMarkIcon} from "@heroicons/react/24/outline";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "../../index.css"
import Registro from "./registro"; 


export default function Login(){
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginOpen, setLoginOpen] = useState(true);
    const [isRegisterFormOpen, setRegisterFormOpen] = useState(false);
    const [error, setError] = useState(null);
  
    const handleEmailFocus = () => {
      if (!email.trim()) {
        setEmailFocused(true);
      }
    };
  
    const handleEmailBlur = () => {
      if (!email.trim()) {
        setEmailFocused(false);
      }
    };
  
    const handlePasswordFocus = () => {
      if (!password.trim()) {
        setPasswordFocused(true);
      }
    };
  
    const handlePasswordBlur = () => {
      if (!password.trim()) {
        setPasswordFocused(false);
      }
    };
  
    const handleCloseLogin = () => {
      setLoginOpen(false);
    };
  
    const handleToggleLogin = () => {
      setLoginOpen((prev) => !prev);
    };
  
    const handleToggleRegister = () => {
      setRegisterFormOpen((prev) => !prev);
    };
  
    const handleLogin = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Usuario inició sesión:", userCredential.user);
        handleCloseLogin();
        // Puedes redirigir a la página principal o hacer otras acciones después del inicio de sesión exitoso.
      } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
        setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
      }
    };

    return (
        <>
        {isLoginOpen ? (
        <div className=" w-[100%] h-screen fixed inset-0 flex items-center justify-center z-20">
                <div className="absolute w-[100%] h-full bg-white backdrop-filter backdrop-blur-2xl bg-opacity-80 border border-gray-100">
                    <div className="relative flex items-center justify-center pt-32">
                        <div className="backdrop-filter backdrop-blur-2xl w-[600px] h-[700px] bg-white rounded-3xl border-slate-400 border-2">
                            <form>    
                                    <div className="justify-end flex m-3">
                                        <XMarkIcon
                                            className="h-10 text-black opacity-80 cursor-pointer"
                                            onClick={handleCloseLogin}
                                        />
                                    </div>                          
                                    <div className="relative bg-transparent text-center text-5xl mb-10 mt-5 pointer-events-none">
                                        Iniciar sesión
                                    </div>                                    
                                    
                                    
                                    <div className={`items-center flex justify-center my-16 ${emailFocused ? 'focus' : ''}`}>
                                        <div className="w-4/5 flex border-2 border-b-black border-transparent">
                                            <span name="email" className="order-2">
                                                <EnvelopeIcon className="h-10 text-black" />
                                            </span>
                                            <input
                                                id="emaillogin"
                                                name="emaillogin"
                                                type="email"
                                                autoComplete="off"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onFocus={handleEmailFocus}
                                                onBlur={handleEmailBlur}
                                                className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm sm:text-lg sm:leading-6 outline-none ${emailFocused ? 'text-black' : ''}`}
                                            />
                                           <label
                                                className={`text-black text-3xl absolute pl-3 ${emailFocused || email.trim() ? 'label-focus' : 'label-original'}`}
                                                style={{ pointerEvents: 'none' }}
                                            >
                                                Correo
                                            </label>
                                        </div>
                                    </div>


                                    <div className={`items-center flex justify-center my-16 ${passwordFocused ? 'focus' : ''}`}>
                                        <div className="w-4/5 flex border-2 border-b-black border-transparent">
                                            <span name="contraseña" className="order-2">
                                                <LockClosedIcon className="h-10 text-black" />
                                            </span>
                                            <input
                                                id="contraseñalogin"
                                                name="contraseña"
                                                type="password"
                                                autoComplete="off"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                onFocus={handlePasswordFocus}
                                                onBlur={handlePasswordBlur}
                                                className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm sm:text-lg sm:leading-6 outline-none ${passwordFocused ? 'text-black' : ''}`}
                                            />
                                            <label className={`text-black text-3xl absolute pl-3 ${passwordFocused ? 'label-focus' : 'label-original'}`} style={{ pointerEvents: 'none' }}>
                                                Contraseña
                                            </label>
                                        </div>
                                    </div>

                                    
                                    <div className="items-center flex justify-center my-10 ">
                                        <label>
                                            <input type="checkbox" className="mx-2 h-4 w-4"/>
                                            <label
                                                className="text-2xl"
                                                >
                                                Recordarme</label>
                                            
                                                <label className="text-2xl mx-2 text-blue-700 border border-b-blue-700 border-transparent cursor-pointer font-semibold">
                                                    Olvidaste tu contraseña?
                                                </label>
                                            
                                        </label>                                    
                                    </div>
                                    
                                    <div className="pb-6 items-center flex justify-center">
                                    <button 
                                        type="button"
                                        onClick={handleLogin}
                                        className="text-xl bg-gradient-to-l from-green-500 to-lime-500 rounded-3xl p-3 font-semibold  md:px-12 px-16 text-white 
                                        hover:bg-gradient-to-l hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-110 
                                        transition ease-in-out duration-500 hover:-translate-y-1 delay-150">
                                        Iniciar Sesión
                                    </button>
                                    </div>
                                    <div className="items-center flex justify-center">
                                            <label
                                                className="text-2xl"
                                                >
                                                No tienes una cuenta?</label>                                            
                                                <label 
                                                    className="text-2xl mx-2 text-blue-700 border border-b-blue-700 border-transparent cursor-pointer font-semibold"
                                                    onClick={handleToggleRegister}
                                                >
                                                    Registrate
                                                </label>                                            
                                    </div>
                                    <div className="justify-center flex text-center h-7 mt-4">
                                    {error && (
                                        <div className="text-red-500 mb-2">
                                            <p>{error}</p>
                                        </div>
                                    )}
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        ) : null}

        {isRegisterFormOpen && <Registro onToggleLogin={handleToggleLogin} />}
        </>
    );
}