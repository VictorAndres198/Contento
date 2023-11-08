import React,{useState} from "react";
import DateSelector from "./dateselector";
import TimeSelector from "./timeselector";
import DoctorSelector from "./doctorselector";

export default function FormCita(){
    const [message, setMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

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
  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      // Aquí puedes enviar el archivo seleccionado al servidor
      // Por ejemplo, usando una solicitud HTTP o una biblioteca como axios.
      // También puedes acceder al archivo como `selectedFile` y procesarlo según tus necesidades.
    } else {
      alert("Por favor, seleccione un archivo antes de enviar el formulario.");
    }
  };

  return(
    <form className="space-y-4" action="#" method="POST">
                    
        <div className="w-4/5 mx-auto">
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="off"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Nombre completo"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Dirección de correo electrónico"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <input
            id="numero_celular"
            name="numero_celular"
            type="tel"
            autoComplete="off"
            required
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Número de celular"
          />
        </div>

        <div className="grid grid-cols-2 justify-center items-center gap-2">
            <div className="ml-auto block rounded-md border-0 sm:text-sm sm:leading-6 w-4/5 p-0 m-0">
                <DateSelector/>
            </div>
            <div className=" block rounded-md border-0 sm:text-sm sm:leading-6 w-4/5 p-0 m-0">
                <TimeSelector/>
            </div>
        </div>

        <div className="mx-auto w-4/5 bg-white rounded-lg text-2xl border-0">
                <DoctorSelector/>
        </div>

        <div className="w-4/5 mx-auto">
          <input
            id="imagen"
            name="imagen"
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
          <textarea id="mensaje" name="mensaje" rows="4" type="text" autoComplete="off"  placeholder="Mensaje..."
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
            className="mx-auto bg-gradient-to-l from-green-500 to-lime-500 rounded-3xl p-3 font-semibold  md:px-12 px-16 text-white 
            hover:bg-gradient-to-l hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-110 
            transition ease-in-out duration-500 hover:-translate-y-1 delay-150 mb-9">
            Reservar
            </button>
        </div>
    </form>
  );
}