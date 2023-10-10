import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Estilos por defecto
import { ClockIcon } from "@heroicons/react/24/outline"; // Icono de reloj

export default function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState(null);

  // Función para manejar la selección de hora
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  // Configuración de horas permitidas (8:00 AM y 9:00 AM)
  const minTime = new Date();
  minTime.setHours(8, 0, 0); // 8:00 AM
  const maxTime = new Date();
  maxTime.setHours(21, 0, 0); // 9:00 AM

  return (
    <div className="relative flex flex-row h-full w-full p-0 m-0 rounded-md">
      <DatePicker
        selected={selectedTime}
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30} // Intervalo de minutos (solo 30)
        minTime={minTime}
        maxTime={maxTime}
        timeCaption="Hora" // Etiqueta para el selector de tiempo
        dateFormat="h:mm aa" // Formato de hora
        className="w-full h-8 block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-offset-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-0 m-0"
        placeholderText="Hora"
        showIcon
        required
        autoComplete="off"
      />
      <ClockIcon className="absolute h-6 mt-1 text-gray-900"/>
    </div>
  );
}