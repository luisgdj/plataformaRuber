import React, { useEffect } from 'react';
import './Mapa.css';

function Mapa({ archivoSvg, onZonaClick }) {
  useEffect(() => {
    const object = document.getElementById("svgMapa");

    const handleLoad = () => {
      const svgDoc = object?.contentDocument;
      if (!svgDoc) {
        console.warn("No se pudo acceder al contenido del SVG.");
        return;
      }

      const zonas = svgDoc.querySelectorAll("path, rect, polygon, g"); // más flexible
      if (!zonas || zonas.length === 0) {
        console.warn("No se encontraron zonas clicables en el SVG.");
        return;
      }

      zonas.forEach(zona => {
        if (zona) {
          try {
            zona.style.cursor = "pointer";
            zona.addEventListener("click", () => {
              const idZona = zona.getAttribute("id");
              if (idZona) onZonaClick(idZona);
            });
          } catch (err) {
            console.error("Error al configurar zona:", err);
          }
        }
      });
    };

    object?.addEventListener("load", handleLoad);

    return () => {
      object?.removeEventListener("load", handleLoad);
    };
  }, [archivoSvg, onZonaClick]);

  return (
  <object
    id="svgMapa"
    type="image/svg+xml"
    data={`/${archivoSvg}`}
    className="mapa-svg"
    aria-label={`Mapa de ${archivoSvg}`}
    onLoad={(e) => {
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
    }}
  >
    No se pudo cargar el mapa.
  </object>
  );
}

export default Mapa;