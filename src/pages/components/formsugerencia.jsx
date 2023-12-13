import React,{useState} from "react";
import {db} from './firebase'; // Importa el objeto db de tu archivo de configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FormSugerencia(){
    const [message, setMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageURL, setImageURL] = useState(""); // Para almacenar la URL de la imagen

    const maxLength = 250; // Establece el límite de caracteres
  
    // Función para manejar el cambio en el área de texto
    const handleTextChange = (event) => {
    const text = event.target.value;
    setMessage(text); 
  };

  //=================================================== AGREGADO PARA LIMITAR LA IMAGEN A 2MB ===================================================
  // Función para manejar el cambio en el área de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    // Verificar si se seleccionó un archivo
    if (file) {
      // Verificar el tamaño del archivo (en bytes)
      const maxSize = 2 * 1024 * 1024; // 2 MB

      if (file.size <= maxSize) {
        setSelectedFile(file);
      } else {
        alert("El archivo es demasiado grande. Por favor, seleccione un archivo de hasta 2 MB.");
        // Restablecer el valor del input de archivo
        event.target.value = null;
      }
    } else {
      setSelectedFile(null);
    }
  };
  
  
  // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
      event.preventDefault();

    try {
      if (selectedFile) {
        const storageRef = ref(getStorage(), 'sugerencias/' + selectedFile.name);
        await uploadBytes(storageRef, selectedFile);
        const downloadURL = await getDownloadURL(storageRef);
        setImageURL(downloadURL);
      }

      const reclamoData = {
        celular: document.getElementById("numero_celular_s").value,
        correo: document.getElementById("emails").value,
        detalle: message,
        nombre: document.getElementById("nombres").value,
        sugerencia: imageURL || "Sin archivo adjunto",
      };

      const docRef = await addDoc(collection(db, "Sugerencias"), reclamoData);

      console.log("Sugerencia registrada con el ID: ", docRef.id);

      setMessage("");
      setSelectedFile(null);
      setImageURL("");

      alert("Sugerencia enviada con éxito.");
    } catch (error) {
      console.error("Error al enviar la sugerencia: ", error);
      alert("Hubo un error al enviar la sugerencia. Inténtalo de nuevo más tarde.");
    }
  };
  


  return(
    <form className="space-y-4" action="#" method="POST" enctype="multipart/form-data">
                    
        <div className="w-4/5 mx-auto">
          <input
            id="nombres"
            name="nombres"
            type="text"
            autoComplete="off"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Nombre completo"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <input
            id="emails"
            name="emails"
            type="email"
            autoComplete="email"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Dirección de correo electrónico"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <input
            id="numero_celular_s"
            name="numero_celular_s"
            type="tel"
            autoComplete="off"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Número de celular"
          />
        </div>

        <div className="w-4/5 mx-auto">
        <p className="text-slate-800 pb-1 pl-1">Adjuntar Imagenes (Opcional)</p>
        <input
          id="imagens"
          name="imagens"
          type="file"
          accept="image/*" 
          onChange={handleFileChange} 
          className="block w-full px-2 rounded-md border-0 py-1.5 text-slate-800 shadow-
          sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm 
          sm:leading-6"
          placeholder="Examinar..."
        />
        </div>
     

        <div className="w-4/5 mx-auto">
          <textarea id="mensajes" name="mensaje" rows="4" type="text" autoComplete="off"  
          placeholder="Ingresa tu sugerencia..."
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          style={{ resize: "none" }}
          value={message}
          onChange={handleTextChange}
          maxLength={maxLength}
          />
          <div className="flex justify-end">
          <label className="text-gray-500">{message.length}</label>
          <label className="text-gray-500">/{maxLength}</label>
          </div>
        </div>
        
        <div className="flex items-center">
            <button
            type="submit"
            onClick={handleSubmit}
            className="mx-auto bg-gradient-to-l from-green-500 to-lime-500 rounded-3xl p-3 font-semibold  md:px-12 px-16 text-white 
            hover:bg-gradient-to-l hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-110 
            transition ease-in-out duration-500 hover:-translate-y-1 delay-150 mb-9">
            Enviar Sugerencia           
            </button>
            
        </div>
    </form>
  );
}