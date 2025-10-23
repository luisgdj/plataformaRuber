import React from 'react';
import '../styles/PanelInfo.css';

const PanelInfo = ({ zona, tipo }) => {
  if (!zona) {
    return <div className="panel-info">Selecciona una zona del mapa.</div>;
  }

  return (
    <div className="panel-info">
      <h2>Zona: {zona}</h2>
      <h3>Tipo de contenido: {tipo}</h3>

      {tipo === "alertas" && <p>⚠️ Alerta activa en la zona {zona}</p>}
      {tipo === "video" && <video controls src={`/videos/${zona}.mp4`} />}
      {tipo === "texto" && <p>Información textual sobre la zona {zona}.</p>}
      {tipo === "test" && (
        <div>
          <p>Pregunta de ejemplo sobre {zona}:</p>
          <button>Opción A</button>
          <button>Opción B</button>
          <button>Opción C</button>
        </div>
      )}
    </div>
  );
};

export default PanelInfo;
