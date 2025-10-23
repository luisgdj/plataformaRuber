import React, { useState } from 'react';
import Mapa from './components/Mapa';
import Sidebar from './components/Sidebar';
import PanelInfo from './components/PanelInfo';
import './App.css';

function App() {
  // Estado de la planta activa y zona seleccionada (ya los tenías)
  const [plantaActiva, setPlantaActiva] = useState("plantaS1.svg");
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);

  // Nuevo: estado para el tipo de contenido y color de zona
  const [tipoContenido, setTipoContenido] = useState('texto');
  const [colorZona, setColorZona] = useState(null);

  // Plantas disponibles
  const opcionesPlanta = [
    "plantaS2.svg",
    "plantaS1.svg",
    "planta00.svg",
    "planta01.svg",
    "planta02.svg",
    "planta03.svg"
  ];

  // Cuando el usuario hace clic en una zona del mapa
  const handleZonaClick = (idZona) => {
    setZonaSeleccionada(idZona);
    console.log("Zona seleccionada:", idZona);
    // Aquí más adelante harás fetch al backend según la zona y tipo de contenido
  };

  return (
    <div className="App">
      <h1>Mapa interactivo del Hospital Ruber</h1>

      {/* Selector de plantas */}
      <div className="barra-plantas">
        {opcionesPlanta.map((archivo) => (
          <button
            key={archivo}
            className={plantaActiva === archivo ? "boton-activo" : ""}
            onClick={() => setPlantaActiva(archivo)}
          >
            {archivo.replace(".svg", "")}
          </button>
        ))}
      </div>

      <div className="contenedor-principal">
        {/* Barra lateral */}
        <Sidebar
          colorZona={colorZona}
          setColorZona={setColorZona}
          tipoContenido={tipoContenido}
          setTipoContenido={setTipoContenido}
        />

        {/* Mapa interactivo */}
        <Mapa archivoSvg={plantaActiva} onZonaClick={handleZonaClick} colorZona={colorZona} />

        {/* Panel de información */}
        <PanelInfo zona={zonaSeleccionada} tipo={tipoContenido} />
      </div>
    </div>
  );
}

export default App;
