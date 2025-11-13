import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({
  setZonaSeleccionada,
  tipoContenido,
  setTipoContenido,
  categoriaActiva,
  setCategoriaActiva,
  subcategoriaActiva,
  setSubcategoriaActiva,
  departamentoActivo,
  setDepartamentoActivo,
  onZonaClick,
  onDepartamentoClick
}) => {

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
        { nombre: 'Medicina nuclear', zonas: ['Gamma cámara', 'SPECT-TAC', 'PET-TAC'] },
        { nombre: 'Oncología radioterápica', zonas: ['Acelerador lineal', 'Ciberknife'] },
        { nombre: 'Unidad gamma', zonas: ['Gamma Knife'] }
      ]
    },
    { nombre: 'Área quirúrgica', zonas: ['Quirófanos', 'Reanimación postquirúrgica (URPA)', 'Esterilización central'] },
    { nombre: 'Hospitalización', zonas: ['Habitaciones y controles de enfermería', 'Áreas de aislamiento'] },
    { nombre: 'Zona ambulatoria y de urgencias', zonas: ['Urgencias', 'Consultas externas', 'Hospital de día'] },
    { nombre: 'Área de farmacia y laboratorio',
      subcategorias: [
        { nombre: 'Laboratorios', zonas: ['Bioquímica', 'Microbiología', 'Hematología'] },
        { nombre: 'Farmacia hospitalaria', zonas: [] },
        { nombre: 'Banco de sangre', zonas: [] }
      ]
    }
  ];

  const toggleCategoria = (nombre) => {
    if (categoriaActiva === nombre) {
      setCategoriaActiva(null);
      setSubcategoriaActiva(null);
    } else {
      setCategoriaActiva(nombre);
      // Llamar a la función para cambiar de planta
      if (onDepartamentoClick) {
        onDepartamentoClick(nombre);
      }
    }
  };

  const toggleSubcategoria = (nombre) => {
    if (subcategoriaActiva === nombre) {
      setSubcategoriaActiva(null);
    } else {
      setSubcategoriaActiva(nombre);
      // Llamar a la función para cambiar de planta
      if (onDepartamentoClick) {
        onDepartamentoClick(nombre);
      }
    }
  };

  return (
    <div className="sidebar">
      <h2>Áreas hospitalarias</h2>
      <div className="departamentos-lista">
        {categorias.map((cat) => (
          <div key={cat.nombre} className="departamento">
            <button
              className={`dep-btn ${categoriaActiva === cat.nombre ? 'activo' : ''}`}
              onClick={() => toggleCategoria(cat.nombre)}
            >
              {cat.nombre}
            </button>

            {/* Zonas simples */}
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

                    {subcategoriaActiva === sub.nombre && sub.zonas.length > 0 && (
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

      <div className="filtro">
        <h3>Tipo de contenido</h3>
        <select value={tipoContenido} onChange={(e) => setTipoContenido(e.target.value)}>
          <option value="alertas">Alertas</option>
          <option value="video">Vídeo explicativo</option>
          <option value="texto">Texto explicativo</option>
          <option value="test">Test</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
