import React,{useState} from "react";

export default function FormReclamo(){
    const [message, setMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState(""); // Estado para la opción seleccionada

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

        <div className="w-4/5 mx-auto">
        <p className="text-slate-800 pb-1 pl-1">Adjuntar Pruebas (Opcional)</p>
          <input
            id="imagen"
            name="imagen"
            type="file"
            accept="image/*" 
            maxSize="2097152" // Limita el tamaño a 2 MB (2 MB * 1024 KB/MB * 1024 B/KB)
            className="block w-full px-2 rounded-md border-0 py-1.5 text-slate-800 shadow-
            sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm 
            sm:leading-6"
            placeholder="Examinar..."
          />
        </div>
        
        <div className="w-4/5 mx-auto">
        <select
          id="motivo"
          name="motivo"
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
          <textarea id="mensaje" name="mensaje" rows="4" type="text" autoComplete="off"  
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
            className="mx-auto bg-gradient-to-l from-green-500 to-lime-500 rounded-3xl p-3 font-semibold  md:px-12 px-16 text-white 
            hover:bg-gradient-to-l hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-110 
            transition ease-in-out duration-500 hover:-translate-y-1 delay-150 mb-9">
            Enviar Reclamo
            </button>
        </div>
    </form>
  );
}