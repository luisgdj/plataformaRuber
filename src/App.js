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
import Mamografia from './zonas/Mamografia';
import TAC from './zonas/TAC';
import GammaCamara from './zonas/GammaCamara';
import SPECTTAC from './zonas/SPECTTAC';
import PETTAC from './zonas/PETTAC';
import AceleradorLineal from './zonas/AceleradorLineal';
import Ciberknife from './zonas/Ciberknife';
import GammaKnife from './zonas/GammaKnife';

// Importa tus tests
import TestRM from './tests/TestRM';

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
    "mapas/plantaS2.svg",
    "mapas/plantaS1.svg",
    "mapas/planta00.svg",
    "mapas/planta01.svg",
    "mapas/planta02.svg",
    "mapas/planta03.svg"
  ];

  const [plantaActiva, setPlantaActiva] = useState("mapas/planta00.svg");
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);
  const [tipoContenido, setTipoContenido] = useState('texto');
  const [colorZona, setColorZona] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [subcategoriaActiva, setSubcategoriaActiva] = useState(null);
  const [departamentoActivo, setDepartamentoActivo] = useState(null);
  const [resaltarDepartamento, setResaltarDepartamento] = useState(null);

  // Mapeo actualizado de departamentos/categorías a plantas según el nuevo sidebar
  const DEPARTAMENTOS_POR_PLANTA = {
    "mapas/plantaS2.svg": [
      "Instalaciones radiactivas",
      "Medicina nuclear",
      "Oncología radioterápica",
      "Unidad gamma"
    ],
    "mapas/plantaS1.svg": [
      "Diagnóstico por imagen",
      "Resonancia Magnética",
      "Radiodiagnóstico (RX, TAC, Mamografía)"
    ],
    "mapas/planta00.svg": [
      "Área quirúrgica",
      "Intervencionismo y hemodinámica"
    ],
    "mapas/planta01.svg": [
      "UCI y urgencias"
    ],
    "mapas/planta02.svg": [
      "Hospitalización y consultas"
    ],
    "mapas/planta03.svg": [
      "Laboratorios clínicos",
      "Farmacia hospitalaria"
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

    // Mapeo de zonas del mapa a nombres reconocibles
    const MAPEO_ZONAS_MAPA = {
      'Oncología radioterápica': 'Oncología radioterápica',
      'Medicina nuclear': 'Medicina nuclear',
      'Unidad gamma': 'Unidad gamma',
      'Diagnóstico por imagen': 'Diagnóstico por imagen'
    };

    // Si viene del mapa con un nombre de departamento general, usar ese nombre
    let nombreParaBuscar = MAPEO_ZONAS_MAPA[nombreZona] || nombreZona;

    // Buscar automáticamente la categoría y subcategoría donde está esa zona
    const categorias = [
      {
        nombre: 'Diagnóstico por imagen',
        subcategorias: [
          { nombre: 'Resonancia Magnética', zonas: ['Resonancia Magnética (RM)'] },
          { 
            nombre: 'Radiodiagnóstico (RX, TAC, Mamografía)', 
            zonas: [
              'Radiología Convencional',
              'Tomografía Axial Computarizada (TAC)',
              'Mamografía'
            ] 
          }
        ]
      },
      {
        nombre: 'Instalaciones radiactivas',
        subcategorias: [
          { nombre: 'Medicina nuclear', zonas: ['Gamma cámara', 'SPECT-TAC', 'PET-TAC'] },
          { nombre: 'Oncología radioterápica', zonas: ['Acelerador lineal', 'Ciberknife'] },
          { nombre: 'Unidad gamma', zonas: ['Gamma Knife'] }
        ]
      },
      {
        nombre: 'Área quirúrgica',
        zonas: ['Quirófanos', 'Reanimación postquirúrgica (URPA)', 'Esterilización']
      },
      {
        nombre: 'Intervencionismo y hemodinámica',
        zonas: []
      },
      {
        nombre: 'Laboratorios clínicos',
        zonas: ['Bioquímica', 'Microbiología', 'Hematología']
      },
      {
        nombre: 'Farmacia hospitalaria',
        zonas: ['Preparación de medicamentos peligrosos']
      },
      {
        nombre: 'UCI y urgencias',
        zonas: ['UCI', 'Urgencias']
      },
      {
        nombre: 'Hospitalización y consultas',
        zonas: ['Habitaciones', 'Consultas externas']
      }
    ];

    let categoriaEncontrada = null;
    let subcategoriaEncontrada = null;

    // Primero buscar si el nombre coincide con una categoría principal
    for (const cat of categorias) {
      if (cat.nombre === nombreParaBuscar) {
        categoriaEncontrada = cat.nombre;
        break;
      }
    }

    // Si no se encontró como categoría, buscar en subcategorías
    if (!categoriaEncontrada) {
      for (const cat of categorias) {
        if (cat.subcategorias) {
          for (const sub of cat.subcategorias) {
            if (sub.nombre === nombreParaBuscar) {
              categoriaEncontrada = cat.nombre;
              subcategoriaEncontrada = sub.nombre;
              break;
            }
          }
        }
        if (categoriaEncontrada) break;
      }
    }

    // Si aún no se encontró, buscar la zona específica
    if (!categoriaEncontrada) {
      for (const cat of categorias) {
        if (cat.zonas && cat.zonas.includes(nombreParaBuscar)) {
          categoriaEncontrada = cat.nombre;
          break;
        }
        if (cat.subcategorias) {
          for (const sub of cat.subcategorias) {
            if (sub.zonas.includes(nombreParaBuscar)) {
              categoriaEncontrada = cat.nombre;
              subcategoriaEncontrada = sub.nombre;
              break;
            }
          }
        }
        if (categoriaEncontrada) break;
      }
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
      <div className="header-mapa">
        <h1>Mapa interactivo - Hospital Ruber Internacional</h1>
        <button className="logout-btn" onClick={handleLogout}>
           Cerrar sesión
        </button>
      </div>

      <div className="contenedor-principal">
        <Sidebar
          colorZona={colorZona}
          setColorZona={setColorZona}
          plantaActiva={plantaActiva}
          setPlantaActiva={setPlantaActiva}
          opcionesPlanta={opcionesPlanta}
          setZonaSeleccionada={setZonaSeleccionada}
          categoriaActiva={categoriaActiva}
          setCategoriaActiva={setCategoriaActiva}
          subcategoriaActiva={subcategoriaActiva}
          setSubcategoriaActiva={setSubcategoriaActiva}
          departamentoActivo={departamentoActivo}
          setDepartamentoActivo={setDepartamentoActivo}
          onZonaClick={handleZonaClick}
          onDepartamentoClick={handleDepartamentoClick}
          tipoContenido={tipoContenido}       
          setTipoContenido={setTipoContenido}
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
          
          {/* RUTAS DE ZONAS - Solo las que están en el sidebar */}
          <Route path="/zonas/resonancia-magnetica" element={<RutaPrivada><ResonanciaMagnetica /></RutaPrivada>} />
          <Route path="/zonas/radiologia-convencional" element={<RutaPrivada><RadiologiaConvencional /></RutaPrivada>} />
          <Route path="/zonas/tac" element={<RutaPrivada><TAC /></RutaPrivada>} />
          <Route path="/zonas/mamografia" element={<RutaPrivada><Mamografia /></RutaPrivada>} />
          <Route path="/zonas/gamma-camara" element={<RutaPrivada><GammaCamara /></RutaPrivada>} />
          <Route path="/zonas/spect-tac" element={<RutaPrivada><SPECTTAC /></RutaPrivada>} />
          <Route path="/zonas/pet-tac" element={<RutaPrivada><PETTAC /></RutaPrivada>} />
          <Route path="/zonas/acelerador-lineal" element={<RutaPrivada><AceleradorLineal /></RutaPrivada>} />
          <Route path="/zonas/ciberknife" element={<RutaPrivada><Ciberknife /></RutaPrivada>} />
          <Route path="/zonas/gammaknife" element={<RutaPrivada><GammaKnife /></RutaPrivada>} />
          
          {/* RUTAS DE TESTS */}
          <Route path="/tests/resonancia-magnetica" element={<RutaPrivada><TestRM /></RutaPrivada>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
