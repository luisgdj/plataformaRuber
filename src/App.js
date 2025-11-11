import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import Auth from './components/Auth';
import Mapa from './components/Mapa';
import Sidebar from './components/Sidebar';
import PanelInfo from './components/PanelInfo';

// Importa tus zonas
import ResonanciaMagnetica from './zonas/ResonanciaMagnetica';
import RadiologiaConvencional from './zonas/RadiologiaConvencional';
import Ecografia from './zonas/Ecografia';
import Mamografia from './zonas/Mamografia';
import TAC from './zonas/TAC';
import InstalacionesRadioactivas from './zonas/InstalacionesRadioactivas';
import GammaCamara from './zonas/GammaCamara';
import SPECTTAC from './zonas/SPECTTAC';
import PETTAC from './zonas/PETTAC';
import AceleradorLineal from './zonas/AceleradorLineal';
import Ciberknife from './zonas/Ciberknife';
import GammaKnife from './zonas/GammaKnife';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    if (token) {
      axios.get(`${API_URL}/api/protected`, {
        headers: { Authorization: token }
      })
      .then(() => setIsLoggedIn(true))
      .catch(() => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
      })
      .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const opcionesPlanta = [
    "plantaS2.svg",
    "plantaS1.svg",
    "planta00.svg",
    "planta01.svg",
    "planta02.svg",
    "planta03.svg"
  ];

  const [plantaActiva, setPlantaActiva] = useState("planta00.svg");
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);
  const [tipoContenido, setTipoContenido] = useState('texto');
  const [colorZona, setColorZona] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [subcategoriaActiva, setSubcategoriaActiva] = useState(null);

  // NUEVO: estado compartido para sincronizar mapa y sidebar
  const [departamentoActivo, setDepartamentoActivo] = useState(null);

  const handleZonaClick = (nombreZona) => {
    // nombreZona = "Acelerador lineal" (por ejemplo)
    console.log("handleZonaClick recibido:", nombreZona);

    setZonaSeleccionada(nombreZona);
    setDepartamentoActivo(nombreZona);

    // abrir la categoría/subcategoria correcta
    if (
      nombreZona.includes("Acelerador") ||
      nombreZona.includes("Ciberknife") ||
      nombreZona.includes("Radioterapia")
    ) {
      setCategoriaActiva("Instalaciones radiactivas");
      setSubcategoriaActiva("Oncología radioterápica");
    } else if (
      nombreZona.includes("Gamma") ||
      nombreZona.includes("SPECT") ||
      nombreZona.includes("PET") ||
      nombreZona.toLowerCase().includes("medicina nuclear")
    ) {
      setCategoriaActiva("Instalaciones radioactivas");
      setSubcategoriaActiva("Medicina nuclear");
    } else if (
      nombreZona.includes("Resonancia") ||
      nombreZona.includes("TAC") ||
      nombreZona.includes("Ecografía") ||
      nombreZona.includes("Mamografía") ||
      nombreZona.includes("Radiología")
    ) {
      setCategoriaActiva("Diagnóstico de imagen");
      setSubcategoriaActiva(null);
    } else if (
    nombreZona.includes("Gamma Knife") ||
    nombreZona.includes("Gamma Knife")
    ) {
    setCategoriaActiva("Gamma Knife");
    setSubcategoriaActiva(null);
    } else {
      setCategoriaActiva(null);
      setSubcategoriaActiva(null);
    }
  };

  const VistaMapa = () => (
    <>
      <h1>Mapa interactivo - Hospital Ruber Internacional</h1>
      <div className="header-mapa">
        <button className="logout-btn" onClick={handleLogout}>
           Cerrar sesión
        </button>
      </div>



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
          departamentoActivo={departamentoActivo}
          setDepartamentoActivo={setDepartamentoActivo}
        />

        <Mapa
          archivoSvg={plantaActiva}
          onZonaClick={handleZonaClick}
          colorZona={colorZona}
          zonaSeleccionada={zonaSeleccionada}
          departamentoActivo={departamentoActivo}
          setDepartamentoActivo={setDepartamentoActivo}
        />

        <PanelInfo zona={zonaSeleccionada} tipo={tipoContenido} />
      </div>
    </>
  );

  const RutaPrivada = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Auth onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/" element={<RutaPrivada><VistaMapa /></RutaPrivada>} />
          <Route path="/zonas/resonancia-magnetica" element={<RutaPrivada><ResonanciaMagnetica /></RutaPrivada>} />
          <Route path="/zonas/radiologia-convencional" element={<RutaPrivada><RadiologiaConvencional /></RutaPrivada>} />
          <Route path="/zonas/tac" element={<RutaPrivada><TAC /></RutaPrivada>} />
          <Route path="/zonas/ecografia" element={<RutaPrivada><Ecografia /></RutaPrivada>} />
          <Route path="/zonas/mamografia" element={<RutaPrivada><Mamografia /></RutaPrivada>} />
          <Route path="/zonas/instalaciones-radioactivas" element={<RutaPrivada><InstalacionesRadioactivas /></RutaPrivada>} />
          <Route path="/zonas/gamma-camara" element={<RutaPrivada><GammaCamara /></RutaPrivada>} />
          <Route path="/zonas/spect-tac" element={<RutaPrivada><SPECTTAC /></RutaPrivada>} />
          <Route path="/zonas/pet-tac" element={<RutaPrivada><PETTAC /></RutaPrivada>} />
          <Route path="/zonas/acelerador-lineal" element={<RutaPrivada><AceleradorLineal /></RutaPrivada>} />
          <Route path="/zonas/ciberknife" element={<RutaPrivada><Ciberknife /></RutaPrivada>} />
          <Route path="/zonas/gammaknife" element={<RutaPrivada><GammaKnife /></RutaPrivada>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
