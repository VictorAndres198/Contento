import React, { useState } from "react";
import {EnvelopeIcon,LockClosedIcon,XMarkIcon,ArrowLeftIcon} from "@heroicons/react/24/outline";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; 
import "../../index.css"

export default function Registro({ onToggleLogin }) {
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [repeatedPasswordFocused, setRepeatedPasswordFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [error, setError] = useState(null);

    const isValidEmail = (email) => {
      // Expresión regular para validar correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
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
  
    const handleRepeatedPasswordFocus = () => {
      if (!repeatedPassword.trim()) {
        setRepeatedPasswordFocused(true);
      }
    };
  
    const handleRepeatedPasswordBlur = () => {
      if (!repeatedPassword.trim()) {
        setRepeatedPasswordFocused(false);
      }
    };
  
    const handleCloseRegistro = () => {
      setIsOpen(false); 
      onToggleLogin(); 
    };
    
    const handleCloseRegistro2 = () => {
      setIsOpen(false); 
    };

    const handleRegistro = async () => {
      try {
        // Verifica si el correo electrónico es válido
        if (!isValidEmail(email)) {
          setError("Ingrese un correo electrónico válido.");
          return;
        }
  
        // Verifica si las contraseñas coinciden y tienen al menos 6 caracteres
        if (password.length < 6) {
          setError("La contraseña debe tener al menos 6 caracteres.");
          return;
        }
  
        if (password !== repeatedPassword) {
          setError("Las contraseñas no coinciden.");
          return;
        }
  
        // Registra al usuario en Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
        // La cuenta se ha creado correctamente.
        console.log("Usuario registrado:", userCredential.user);
  
        // Cierra el formulario de registro
        setIsOpen(false);
        onToggleLogin();
      } catch (error) {
        console.error("Error al registrar usuario:", error.message);
        setError("Error al registrar usuario. Por favor, intenta nuevamente.");
      }
    };
    
    return isOpen ? (
        <div className="w-[100%] h-screen fixed inset-0 flex items-center justify-center z-20">
        <div className="absolute w-[100%] h-full bg-transparent bg-opacity-0">
          <div className="relative flex items-center justify-center pt-32">
            <div className="backdrop-filter backdrop-blur-2xl w-[600px] h-[700px] bg-white rounded-3xl border-slate-400 border-2">
              <form>
                <div className="justify-end flex m-3">
                <XMarkIcon className="h-10 text-black opacity-80 cursor-pointer" onClick={handleCloseRegistro} />
                </div>
                <div className="relative bg-transparent text-center text-5xl mb-10 mt-5 pointer-events-none">
                  Registrate
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
                                id="contraseñaregistro"
                                name="contraseñaregistro"
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

            <div className={`items-center flex justify-center mt-16 mb-6 ${repeatedPasswordFocused ? 'focus' : ''}`}>
                <div className="w-4/5 flex border-2 border-b-black border-transparent">
                  <span name="repeatedPassword" className="order-2">
                    <LockClosedIcon className="h-10 text-black" />
                  </span>
                  <input
                    id="repeatedPassword"
                    name="repeatedPassword"
                    type="password"
                    autoComplete="off"
                    required
                    value={repeatedPassword}
                    onChange={(e) => setRepeatedPassword(e.target.value)}
                    onFocus={handleRepeatedPasswordFocus}
                    onBlur={handleRepeatedPasswordBlur}
                    className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm sm:text-lg sm:leading-6 outline-none ${repeatedPasswordFocused ? 'text-black' : ''}`}
                  />
                  <label className={`text-black text-3xl absolute pl-3 ${repeatedPasswordFocused ? 'label-focus' : 'label-original'}`} style={{ pointerEvents: 'none' }}>
                    Repetir Contraseña
                  </label>
                </div>
              </div>
                              <div className="justify-center flex text-center h-7 mb-2">
                              {error && (
                                <div className="text-red-500">
                                  <p>{error}</p>
                                </div>
                              )}
                              </div>

                              <div className="pb-6 items-center flex justify-center">
                              
                              <button 
                                  type="button"
                                  onClick={handleRegistro}
                                  className="text-xl bg-gradient-to-l from-green-500 to-lime-500 rounded-3xl p-3 font-semibold  md:px-12 px-16 text-white 
                                  hover:bg-gradient-to-l hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-110 
                                  transition ease-in-out duration-500 hover:-translate-y-1 delay-150">
                                  Registrarse
                              </button>
                              </div>
                              
                              <div className="items-center flex justify-center">
                                  <label
                                      className="text-2xl"
                                      >
                                      Ya tienes una cuenta?</label>
                                      <label
                                      className="text-2xl mx-2 text-blue-700 border border-b-blue-700 border-transparent cursor-pointer font-semibold"
                                      onClick={handleCloseRegistro2}
                                      >
                                      Iniciar Sesión
                                  </label>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    ): null;
}