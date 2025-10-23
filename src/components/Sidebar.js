import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ colorZona, setColorZona, tipoContenido, setTipoContenido }) => {
  return (
    <div className="sidebar">
      <h2>Opciones</h2>

      <div className="filtro">
        <h3>Filtrar por zona</h3>
        <div className="botones-zonas">
          {["verde", "gris", "amarilla", "roja"].map((color) => (
            <button
              key={color}
              className={colorZona === color ? "activo" : ""}
              onClick={() => setColorZona(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
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