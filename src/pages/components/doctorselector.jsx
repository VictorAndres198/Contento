import React, { useState } from "react";

export default function DoctorSelector() {
  const [selectedDoctor, setSelectedDoctor] = useState(""); // Establece el doctor seleccionado

  // Función para manejar la selección del doctor
  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  return (
    <div className="relative flex flex-row h-full w-full p-0 m-0 rounded-md">
      <select
        value={selectedDoctor}
        onChange={handleDoctorChange}
        className="pl-2 w-full h-8 block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-offset-1 ring-gray-300 text-sm sm:leading-6 p-0 m-0"
        required
      >
        <option value="">Seleccionar Doctor</option>
        <option value="Doctor 1">Dr. Pedro Ramírez</option>
        <option value="Doctor 2">Dr. Javier López</option>
        <option value="Doctor 3">Dra. Andrea Herrera</option>
        <option value="Doctor 4">Dra. Sofia Morales</option>       
      </select>
    </div>
  );
}




