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

  // Categorías y zonas según documento de zonas importantes
  const categorias = [
    {
      nombre: 'Diagnóstico por imagen',
      zonas: ['Resonancia Magnética (RM)', 'Radiodiagnóstico (RX, TAC, Mamografía)']
    },
    {
      nombre: 'Instalaciones radiactivas',
      zonas: ['Medicina nuclear','Oncología radioterápica','Unidad gamma'],
    },
    {
      nombre: 'Área quirúrgica',
      zonas: ['Quirófanos', 'Intervencionismo y Hemodinámica', 'Esterilización']
    },
    {
      nombre: 'Cuidados críticos',
      zonas: ['Unidad de Cuidados Intensivos (UCI)', 'Urgencias']
    },
    {
      nombre: 'Área de farmacia y laboratorios',
      zonas: ['Laboratorios clínicos', 'Farmacia hospitalaria']
    },
    {
      nombre: 'Hospitalización y consultas',
      zonas: ['Hospitalización', 'Consultas externas']
    },
    {
      nombre: 'Servicios generales',
      zonas: ['Cocina']
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
