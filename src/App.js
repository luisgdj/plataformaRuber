import React, { useState } from 'react';
import Mapa from './components/Mapa';

function App() {
  const [plantaActiva, setPlantaActiva] = useState("planta1.svg");
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);

  const handleZonaClick = (idZona) => {
    setZonaSeleccionada(idZona);
  };

  const opcionesPlanta = [
    "planta01.svg",
    "planta02.svg",
    "planta03.svg",
    "planta00.svg",
    "plantaS1.svg",
    "plantaS2.svg"
  ];

  return (
    <div className="App">
      <h1>Mapa interactivo</h1>

      <div style={{ marginBottom: "1rem" }}>
        {opcionesPlanta.map((archivo, i) => (
          <button key={archivo} onClick={() => setPlantaActiva(archivo)}>
            {archivo.replace(".svg", "")}
          </button>
        ))}
      </div>

      <Mapa archivoSvg={plantaActiva} onZonaClick={handleZonaClick} />

      {zonaSeleccionada && <p>Has seleccionado: {zonaSeleccionada}</p>}
    </div>
  );
}

export default App;