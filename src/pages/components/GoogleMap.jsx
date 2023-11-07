import React, { useEffect } from 'react';

export default function GoogleMap() {
  useEffect(() => {
    // Código JavaScript para mostrar el mapa
    const google = window.google;

    // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de Google Maps
    const apiKey = 'AIzaSyCnZ52CTv2Cw7tP9W-mWTkC2jM8Bho29S0';

    // Verifica que la API de Google Maps se haya cargado
    if (!google || !google.maps) {
      console.error('Error: API de Google Maps no se ha cargado correctamente.');
      return;
    }

    // Coordenadas de la ubicación de tu empresa (cambia estos valores según tu dirección)
    const companyLocation = { lat: -12.135, lng: -77.0 };

    // Opciones para personalizar el mapa
    const mapOptions = {
      center: companyLocation,
      zoom: 15, // Puedes ajustar el nivel de zoom según tus necesidades
    };

    // Crea un nuevo mapa y lo muestra en el div con id "google-map"
    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    // Crea un marcador en la ubicación de la empresa
    const marker = new google.maps.Marker({
      position: companyLocation,
      map: map,
      title: 'Ubicación de la Empresa', // Puedes personalizar el título del marcador
    });

    // Agrega un cuadro de información al marcador (opcional)
    const infowindow = new google.maps.InfoWindow({
      content: 'Tu dirección de empresa va aquí',
    });

    // Abre el cuadro de información al hacer clic en el marcador (opcional)
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
  }, []);

  return <div id="google-map" style={{ width: '100%', height: '400px' }}></div>;  
}