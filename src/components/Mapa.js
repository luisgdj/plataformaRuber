import React from 'react';
import '../styles/Mapa.css';

function Mapa({ archivoSvg, onZonaClick }) {
  const handleLoad = (e) => {
    const svgDoc = e.target.contentDocument;
    if (!svgDoc) {
      console.warn("No se pudo acceder al contenido del SVG.");
      return;
    }

    const zonas = svgDoc.querySelectorAll("path, rect, polygon, g");
    if (!zonas || zonas.length === 0) {
      console.warn("No se encontraron zonas clicables en el SVG.");
      return;
    }

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