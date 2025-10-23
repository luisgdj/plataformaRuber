import React from 'react';
import '../styles/Mapa.css';

function Mapa({ archivoSvg, onZonaClick }) {
  const handleLoad = (e) => {
    const svgDoc = e.target.contentDocument;
    if (!svgDoc) return;

    const zonas = svgDoc.querySelectorAll("path, rect, polygon, g");
    zonas.forEach(zona => {
      if (zona && zona.setAttribute) {
        zona.style.cursor = "pointer";
        zona.addEventListener("click", () => {
          const idZona = zona.getAttribute("id");
          if (idZona) onZonaClick(idZona);
        });
      }
    });
  };

  return (
    <object
      id="svgMapa"
      type="image/svg+xml"
      data={`/${archivoSvg}`}
      className="mapa-svg"
      aria-label={`Mapa de ${archivoSvg}`}
      onLoad={handleLoad}
    >
      No se pudo cargar el mapa.
    </object>
  );
}

export default Mapa;