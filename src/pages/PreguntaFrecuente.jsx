import React, { useState } from "react";

function PreguntaFrecuente({ pregunta, respuesta }) {
  const [desplegado, setDesplegado] = useState(false);

  const toggleDesplegar = () => {
    setDesplegado(!desplegado);
  };

  return (
    <div className="py-4 text-xl">
      <div
        className="cursor-pointer flex items-center"
        onClick={toggleDesplegar}
      >
        <div className="w-6 h-6 mr-2">
          {desplegado ? "▼" : "►"} {/* Flecha abajo o a la derecha */}
        </div>
        <div className="font-semibold">{pregunta}</div>
      </div>
      {desplegado && (
        <div className="mt-2">{respuesta}</div>
      )}
    </div>
  );
}

export default function PreguntasFrecuentes() {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-60 md:px-36 px-10 py-10">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Preguntas Frecuentes</h2>
      <PreguntaFrecuente
        pregunta="¿Cuál es el tiempo de entrega?"
        respuesta="El tiempo de entrega varía según tu ubicación. Por lo general, entregamos en 3-5 días hábiles."
      />
      <PreguntaFrecuente
        pregunta="¿Aceptan devoluciones?"
        respuesta="Sí, aceptamos devoluciones en un plazo de 30 días a partir de la fecha de compra. Más información en nuestra política de devoluciones."
      />
      <PreguntaFrecuente
        pregunta="¿Cuál es el proceso para realizar una devolución?"
        respuesta={`Para realizar una devolución, por favor sigue estos pasos:
        1) Inicia sesión en tu cuenta
        2) Ve a la sección de historial de compras
        3) Selecciona la orden que deseas devolver y sigue las instrucciones. Si tienes alguna pregunta, no dudes en contactarnos.`}
      />
      <PreguntaFrecuente
        pregunta="¿Puedo rastrear mi pedido?"
        respuesta="Sí, puedes rastrear tu pedido en tiempo real. Una vez que tu pedido sea enviado, recibirás un enlace de seguimiento por correo electrónico. Puedes hacer clic en el enlace para verificar el estado de tu entrega en cualquier momento."
      />
      <PreguntaFrecuente
        pregunta="¿Ofrecen descuentos para compras al por mayor?"
        respuesta="Sí, ofrecemos descuentos especiales para compras al por mayor. Si estás interesado en realizar una compra al por mayor, por favor contáctanos para obtener más detalles sobre nuestros descuentos y políticas."
      />
      <PreguntaFrecuente
        pregunta="¿Cuáles son los métodos de pago aceptados?"
        respuesta="Aceptamos varios métodos de pago, incluyendo tarjetas de crédito (Visa, MasterCard, American Express), PayPal y transferencias bancarias. Puedes seleccionar tu método de pago preferido al finalizar tu compra."
      />
      <PreguntaFrecuente
        pregunta="¿Cómo puedo ponerme en contacto con el servicio al cliente?"
        respuesta="Puedes ponerte en contacto con nuestro equipo de servicio al cliente a través de nuestro formulario de contacto en línea, por correo electrónico o llamando a nuestro número de atención al cliente. Estamos aquí para ayudarte con cualquier pregunta o inquietud que puedas tener."
      />
      <PreguntaFrecuente
        pregunta="¿Ofrecen garantía en sus productos?"
        respuesta="Sí, ofrecemos garantía en la mayoría de nuestros productos. La duración de la garantía puede variar según el producto. Consulta la página de detalles del producto o comunícate con nuestro equipo de servicio al cliente para obtener información específica sobre la garantía de un producto en particular."
      />
      <PreguntaFrecuente
        pregunta="¿Tienen opciones de envío internacional?"
        respuesta="Sí, ofrecemos envío internacional para clientes fuera de nuestro país de origen. Durante el proceso de compra, podrás seleccionar tu ubicación y ver las opciones de envío disponibles. Ten en cuenta que pueden aplicarse tarifas adicionales para envíos internacionales, como aranceles aduaneros o impuestos de importación."
      />
    </div>
  );
}
