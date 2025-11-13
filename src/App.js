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
  const [departamentoActivo, setDepartamentoActivo] = useState(null);
  const [resaltarDepartamento, setResaltarDepartamento] = useState(null); // Nuevo estado

  // Mapeo de departamentos/categorías a plantas
  const DEPARTAMENTOS_POR_PLANTA = {
    "plantaS2.svg": [
      "Instalaciones radiactivas",
      "Medicina nuclear",
      "Oncología radioterápica",
      "Unidad gamma"
    ],
    "plantaS1.svg": [
      "Diagnóstico de imagen"
    ],
    "planta00.svg": [
      "Área quirúrgica"
    ],
    "planta01.svg": [
      "Zona ambulatoria y de urgencias"
    ],
    "planta02.svg": [
      "Hospitalización"
    ],
    "planta03.svg": [
      "Área de farmacia y laboratorio",
      "Laboratorios",
      "Farmacia hospitalaria",
      "Banco de sangre"
    ]
  };

  // Función para encontrar la planta de un departamento
  const encontrarPlantaDeDepartamento = (nombreDepartamento) => {
    for (const [planta, departamentos] of Object.entries(DEPARTAMENTOS_POR_PLANTA)) {
      if (departamentos.some(d => d.toLowerCase() === nombreDepartamento.toLowerCase())) {
        return planta;
      }
    }
    return null;
  };

  const handleDepartamentoClick = (nombreDepartamento) => {
    // Cambiar automáticamente a la planta del departamento
    const plantaCorrespondiente = encontrarPlantaDeDepartamento(nombreDepartamento);
    if (plantaCorrespondiente && plantaCorrespondiente !== plantaActiva) {
      setPlantaActiva(plantaCorrespondiente);
    }
    
    // Resaltar todo el departamento en el mapa
    setResaltarDepartamento(nombreDepartamento);
    setZonaSeleccionada(null); // Limpiar zona individual
    setDepartamentoActivo(null);
  };

  const handleZonaClick = (nombreZona) => {
    setZonaSeleccionada(nombreZona);
    setDepartamentoActivo(nombreZona);
    setResaltarDepartamento(null); // Limpiar resaltado de departamento

    // Buscar automáticamente la categoría y subcategoría donde está esa zona
    const categorias = [
      {
        nombre: 'Diagnóstico de imagen',
        zonas: [
          'Resonancia Magnética (RM)',
          'Radiología Convencional',
          'Tomografía Axial Computarizada (TAC)',
          'Ecografía',
          'Mamografía'
        ]
      },
      {
        nombre: 'Instalaciones radiactivas',
        subcategorias: [
          {
            nombre: 'Medicina nuclear',
            zonas: ['Gamma cámara', 'SPECT-TAC', 'PET-TAC']
          },
          {
            nombre: 'Oncología radioterápica',
            zonas: ['Acelerador lineal', 'Ciberknife']
          },
          {
            nombre: 'Unidad gamma',
            zonas: ['Gamma Knife']
          }
        ]
      },
      {
        nombre: 'Área quirúrgica',
        zonas: ['Quirófanos', 'Reanimación postquirúrgica (URPA)', 'Esterilización central']
      },
      {
        nombre: 'Hospitalización',
        zonas: ['Habitaciones y controles de enfermería', 'Áreas de aislamiento']
      },
      {
        nombre: 'Zona ambulatoria y de urgencias',
        zonas: ['Urgencias', 'Consultas externas', 'Hospital de día']
      },
      {
        nombre: 'Área de farmacia y laboratorio',
        subcategorias: [
          { nombre: 'Laboratorios', zonas: ['Bioquímica', 'Microbiología', 'Hematología'] },
          { nombre: 'Farmacia hospitalaria', zonas: [] },
          { nombre: 'Banco de sangre', zonas: [] }
        ]
      }
    ];

    let categoriaEncontrada = null;
    let subcategoriaEncontrada = null;

    // Buscar la categoría o subcategoría que contiene la zona
    for (const cat of categorias) {
      if (cat.zonas && cat.zonas.includes(nombreZona)) {
        categoriaEncontrada = cat.nombre;
        break;
      }
      if (cat.subcategorias) {
        for (const sub of cat.subcategorias) {
          if (sub.zonas.includes(nombreZona)) {
            categoriaEncontrada = cat.nombre;
            subcategoriaEncontrada = sub.nombre;
            break;
          }
        }
      }
      if (categoriaEncontrada) break;
    }

    setCategoriaActiva(categoriaEncontrada);
    setSubcategoriaActiva(subcategoriaEncontrada);

    // Cambiar automáticamente a la planta del departamento/subcategoría
    const departamentoParaBuscar = subcategoriaEncontrada || categoriaEncontrada;
    if (departamentoParaBuscar) {
      const plantaCorrespondiente = encontrarPlantaDeDepartamento(departamentoParaBuscar);
      if (plantaCorrespondiente && plantaCorrespondiente !== plantaActiva) {
        setPlantaActiva(plantaCorrespondiente);
      }
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
          onZonaClick={handleZonaClick}
          onDepartamentoClick={handleDepartamentoClick}
        />

        <Mapa
          archivoSvg={plantaActiva}
          onZonaClick={handleZonaClick}
          colorZona={colorZona}
          zonaSeleccionada={zonaSeleccionada}
          departamentoActivo={departamentoActivo}
          setDepartamentoActivo={setDepartamentoActivo}
          resaltarDepartamento={resaltarDepartamento}
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
