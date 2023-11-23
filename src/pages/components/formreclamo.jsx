import React,{useState} from "react";
import {db} from './firebase'; // Importa el objeto db de tu archivo de configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FormReclamo(){
    const [message, setMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState(""); // Estado para la opción seleccionada
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageURL, setImageURL] = useState(""); // Para almacenar la URL de la imagen

    const maxLength = 250; // Establece el límite de caracteres
  
    // Función para manejar el cambio en el área de texto
    const handleTextChange = (event) => {
    const text = event.target.value;
    setMessage(text); 
  };

    // Función para manejar el cambio en el combobox
    const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
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
        const storageRef = ref(getStorage(), 'reclamos/' + selectedFile.name);
        await uploadBytes(storageRef, selectedFile);
        const downloadURL = await getDownloadURL(storageRef);
        setImageURL(downloadURL);
      }

      const reclamoData = {
        celular: document.getElementById("numero_celular").value,
        correo: document.getElementById("email").value,
        detalle: message,
        motivo: selectedOption,
        nombre: document.getElementById("nombre").value,
        pruebas: imageURL || "Sin archivo adjunto",
      };

      const docRef = await addDoc(collection(db, "Reclamos"), reclamoData);

      console.log("Reclamo registrado con ID: ", docRef.id);

      setMessage("");
      setSelectedOption("");
      setSelectedFile(null);
      setImageURL("");

      alert("Reclamo enviado con éxito.");
    } catch (error) {
      console.error("Error al enviar el reclamo: ", error);
      alert("Hubo un error al enviar el reclamo. Inténtalo de nuevo más tarde.");
    }
  };
  


  return(
    <form className="space-y-4" action="#" method="POST" enctype="multipart/form-data">
                    
        <div className="w-4/5 mx-auto">
          <input
            id="nombrereclamo"
            name="nombrereclamo"
            type="text"
            autoComplete="off"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Nombre completo"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <input
            id="emailreclamo"
            name="emailreclamo"
            type="email"
            autoComplete="email"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Dirección de correo electrónico"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <input
            id="numero_celular_reclamo"
            name="numero_celular_reclamo"
            type="tel"
            autoComplete="off"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Número de celular"
          />
        </div>

        <div className="w-4/5 mx-auto">
        <p className="text-slate-800 pb-1 pl-1">Adjuntar Pruebas (Opcional)</p>
        <input
          id="imagenreclamo"
          name="imagenreclamo"
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
        <select
          id="motivoreclamo"
          name="motivoreclamo"
          required
          value={selectedOption}
          onChange={handleOptionChange}
          className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
        >
          <option value="">Selecciona un motivo</option>
          <option value="motivo1">Mala atención</option>
          <option value="motivo2">Producto defectuoso</option>
          <option value="motivo3">Tiempo de espera</option>
        </select>
      </div>

        <div className="w-4/5 mx-auto">
          <textarea id="mensajereclamo" name="mensaje" rows="4" type="text" autoComplete="off"  
          placeholder="Ingresa el detalle de tu reclamo..."
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
            Enviar Reclamo            
            </button>
            
        </div>
    </form>
  );
}