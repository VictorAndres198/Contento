import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Estilos por defecto
import { ClockIcon } from "@heroicons/react/24/outline"; // Icono de reloj

export default function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState(undefined);
  const [availableHours, setAvailableHours] = useState([]);
  const currentHour = new Date().getHours();

  // Función para manejar la selección de hora
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Obtén las horas disponibles dinámicamente
  const getAvailableHours = () => {
    const hours = [];
    for (let hour = 8; hour <= 21; hour++) {
      if (hour > currentHour) {
        const formattedHour = `${hour.toString().padStart(2, "0")}:00`;
        hours.push(formattedHour);
      }
    }
    setAvailableHours(hours);
  };

  useEffect(() => {
    getAvailableHours();
  }, [currentHour]);

  return (
    <div className="relative flex flex-row h-full w-full p-0 m-0 rounded-md">
      <select
        value={selectedTime}
        onChange={handleTimeChange}
        className="pl-5 w-full h-8 block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-offset-1 ring-gray-300 sm:text-sm sm:leading-6 p-0 m-0"
        required    
        placeholder="Hora"  
      >
        <option value="" disabled>
          Seleccione una hora
        </option>
        {availableHours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))} 
      </select>
      <ClockIcon className="absolute h-6 mt-1 text-gray-900 pointer-events-none"/>
    </div>
  );
}