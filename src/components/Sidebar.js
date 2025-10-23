import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ setZonaSeleccionada, tipoContenido, setTipoContenido }) => {
  // Estado para controlar qué departamento está desplegado
  const [departamentoActivo, setDepartamentoActivo] = useState(null);

  // Ejemplo de estructura de departamentos y salas
  const departamentos = [
    {
      nombre: 'Urgencias',
      salas: ['Box 1', 'Box 2', 'Observación', 'Triaje']
    },
    {
      nombre: 'Radiología',
      salas: ['Rayos X', 'TAC', 'Resonancia Magnética']
    },
    {
      nombre: 'UCI',
      salas: ['UCI 1', 'UCI 2', 'Control Enfermería']
    },
    {
      nombre: 'Quirófanos',
      salas: ['Quirófano 1', 'Quirófano 2', 'Sala de Reanimación']
    },
    {
      nombre: 'Pediatría',
      salas: ['Consulta 1', 'Consulta 2', 'Sala de Juegos']
    }
  ];

  // Cambia el estado de desplegado de un departamento
  const toggleDepartamento = (nombre) => {
    setDepartamentoActivo(departamentoActivo === nombre ? null : nombre);
  };

  return (
    <div className="sidebar">
      <h2>Departamentos</h2>

      {/* Menú jerárquico */}
      <div className="departamentos-lista">
        {departamentos.map((dep) => (
          <div key={dep.nombre} className="departamento">
            <button
              className={`dep-btn ${departamentoActivo === dep.nombre ? 'activo' : ''}`}
              onClick={() => toggleDepartamento(dep.nombre)}
            >
              {dep.nombre}
            </button>

            {/* Salas desplegables */}
            {departamentoActivo === dep.nombre && (
              <ul className="salas-lista">
                {dep.salas.map((sala) => (
                  <li
                    key={sala}
                    className="sala-item"
                    onClick={() => setZonaSeleccionada(`${dep.nombre} - ${sala}`)}
                  >
                    {sala}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Selector de tipo de contenido (manteniendo esta parte) */}
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
