import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mapa from './components/Mapa';
import Sidebar from './components/Sidebar';
import PanelInfo from './components/PanelInfo';

import ResonanciaMagnetica from './zonas/ResonanciaMagnetica';
import RadiologiaConvencional from './zonas/RadiologiaConvencional';
import Ecografia from './zonas/Ecografia';
import Mamografia from './zonas/Mamografia';
import TAC from './zonas/TAC';
import InstalacionesRadioactivas from './zonas/InstalacionesRadioactivas';
import GammaCamara from './zonas/GammaCamara';
import SPECTTAC from './zonas/SPECTTAC';
import PETTAC from './zonas/PETTAC.js';
import AceleradorLineal from './zonas/AceleradorLineal';
import Ciberknife from './zonas/Ciberknife';

import './App.css';

function App() {
  const [plantaActiva, setPlantaActiva] = useState("planta00.svg");
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);
  const [tipoContenido, setTipoContenido] = useState('texto');
  const [colorZona, setColorZona] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [subcategoriaActiva, setSubcategoriaActiva] = useState(null);

  const opcionesPlanta = [
    "plantaS2.svg",
    "plantaS1.svg",
    "planta00.svg",
    "planta01.svg",
    "planta02.svg",
    "planta03.svg"
  ];

  const handleZonaClick = (idZona) => {
    setZonaSeleccionada(idZona);
    console.log("Zona seleccionada:", idZona);
  };

  // Vista principal del mapa
  const VistaMapa = () => (
    <>
      <h1>Mapa interactivo - Hospital Ruber Internacional</h1>

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
        <Sidebar
          colorZona={colorZona}
          setColorZona={setColorZona}
          tipoContenido={tipoContenido}
          setTipoContenido={setTipoContenido}
          setZonaSeleccionada={setZonaSeleccionada}
          categoriaActiva={categoriaActiva}
          setCategoriaActiva={setCategoriaActiva}
          subcategoriaActiva={subcategoriaActiva}
          setSubcategoriaActiva={setSubcategoriaActiva}
        />

        <Mapa
          archivoSvg={plantaActiva}
          onZonaClick={handleZonaClick}
          colorZona={colorZona}
          zonaSeleccionada={zonaSeleccionada}
        />

        <PanelInfo zona={zonaSeleccionada} tipo={tipoContenido} />
      </div>
    </>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VistaMapa />} />
          <Route path="/zonas/resonancia-magnetica" element={<ResonanciaMagnetica />} />
          <Route path="/zonas/radiologia-convencional" element={<RadiologiaConvencional />} />
          <Route path="/zonas/tac" element={<TAC />} />
          <Route path="/zonas/ecografia" element={<Ecografia />} />
          <Route path="/zonas/mamografia" element={<Mamografia />} />
          <Route path="/zonas/instalaciones-radioactivas" element={<InstalacionesRadioactivas />} />
          <Route path="/zonas/gamma-camara" element={<GammaCamara />} />
          <Route path="/zonas/spect-tac" element={<SPECTTAC />} />
          <Route path="/zonas/pet-tac" element={<PETTAC />} />
          <Route path="/zonas/acelerador-lineal" element={<AceleradorLineal />} />
          <Route path="/zonas/ciberknife" element={<Ciberknife />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
