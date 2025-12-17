// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({
  setZonaSeleccionada,
  plantaActiva,
  setPlantaActiva,
  categoriaActiva,
  setCategoriaActiva,
  subcategoriaActiva,
  setSubcategoriaActiva,
  departamentoActivo,
  setDepartamentoActivo,
  onZonaClick,
  onDepartamentoClick,
  tipoContenido,
  setTipoContenido
}) => {

  const pisos = ['-2', '-1', '0', '1', '2', '3'];

  // Mapear piso a archivo SVG
  const PISO_A_PLANTA = {
    '-2': 'mapas/plantaS2.svg',
    '-1': 'mapas/plantaS1.svg',
    '0': 'mapas/planta00.svg',
    '1': 'mapas/planta01.svg',
    '2': 'mapas/planta02.svg',
    '3': 'mapas/planta03.svg'
  };

  // Categorías y zonas
  const categorias = [
    {
      nombre: 'Diagnóstico por imagen',
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
        { nombre: 'Medicina nuclear', zonas: ['Gamma cámara', 'SPECT-TAC', 'PET-TAC'] },
        { nombre: 'Oncología radioterápica', zonas: ['Acelerador lineal', 'Ciberknife'] },
        { nombre: 'Unidad gamma', zonas: ['Gamma Knife'] }
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

  // Expandir/contraer categoría
  const toggleCategoria = (nombre) => {
    if (categoriaActiva === nombre) {
      setCategoriaActiva(null);
      setSubcategoriaActiva(null);
    } else {
      setCategoriaActiva(nombre);
      if (onDepartamentoClick) onDepartamentoClick(nombre);
    }
  };

  // Expandir/contraer subcategoría
  const toggleSubcategoria = (nombre) => {
    if (subcategoriaActiva === nombre) {
      setSubcategoriaActiva(null);
    } else {
      setSubcategoriaActiva(nombre);
      if (onDepartamentoClick) onDepartamentoClick(nombre);
    }
  };

  // Cambio de planta
  const handlePisoClick = (piso) => {
    const planta = PISO_A_PLANTA[piso];
    if (!planta) return;

    setPlantaActiva(planta);
    setCategoriaActiva(null);
    setSubcategoriaActiva(null);
    setDepartamentoActivo(null);
    setZonaSeleccionada(null);
  };

  return (
    <div className="sidebar">

      {/* Selector de pisos */}
      <div className="filtro">
        <h3>Pisos</h3>
        <div className="botones-pisos">
          {pisos.map((piso) => (
            <button
              key={piso}
              className={`piso-btn ${plantaActiva === PISO_A_PLANTA[piso] ? 'activo' : ''}`}
              onClick={() => handlePisoClick(piso)}
            >
              {piso}
            </button>
          ))}
        </div>
      </div>

      {/* Departamentos */}
      <h2 style={{ marginTop: '1rem' }}>Áreas hospitalarias</h2>

      <div className="departamentos-lista">
        {categorias.map((cat) => (
          <div key={cat.nombre} className="departamento">

            <button
              className={`dep-btn ${categoriaActiva === cat.nombre ? 'activo' : ''}`}
              onClick={() => toggleCategoria(cat.nombre)}
            >
              {cat.nombre}
            </button>

            {/* Zonas directas */}
            {categoriaActiva === cat.nombre && cat.zonas && (
              <ul className="salas-lista">
                {cat.zonas.map((zona) => (
                  <li
                    key={zona}
                    className={`sala-item ${departamentoActivo === zona ? 'activo' : ''}`}
                    onClick={() => onZonaClick(zona)}
                  >
                    {zona}
                  </li>
                ))}
              </ul>
            )}

            {/* Subcategorías */}
            {categoriaActiva === cat.nombre && cat.subcategorias && (
              <ul className="salas-lista">
                {cat.subcategorias.map((sub) => (
                  <li key={sub.nombre}>
                    <button
                      className={`dep-btn subcat-btn ${subcategoriaActiva === sub.nombre ? 'activo' : ''}`}
                      onClick={() => toggleSubcategoria(sub.nombre)}
                    >
                      {sub.nombre}
                    </button>

                    {subcategoriaActiva === sub.nombre && (
                      <ul className="salas-lista">
                        {sub.zonas.map((zona) => (
                          <li
                            key={zona}
                            className={`sala-item ${departamentoActivo === zona ? 'activo' : ''}`}
                            onClick={() => onZonaClick(zona)}
                          >
                            {zona}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

          </div>
        ))}
      </div>

      

    </div>
  );
};

export default Sidebar;