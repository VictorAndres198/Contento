import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Estilos por defecto
import {CalendarDaysIcon} from "@heroicons/react/24/outline";

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(null);

  // Función para manejar la selección de fecha
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Configuración de fechas permitidas (20 días a partir de hoy)
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 7);

  return (
    <div
    className="relative flex flex-row h-full w-full p-0 m-0 rounded-md">
      <DatePicker
        id="selector_fecha_cita"
        name="selector_fecha_cita"
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat="dd/MM/yyyy" // Formato de fecha (puedes cambiarlo)
        className="w-full h-8 block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-offset-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm p-0 m-0"
        placeholderText="Fecha" 
        showIcon= {CalendarDaysIcon}      
        required
        autoComplete="off"
      />
      <CalendarDaysIcon className="absolute pointer-events-none h-6 text-gray-900 mt-[2.5px]"/>
    </div>
  );
}