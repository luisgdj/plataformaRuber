import React, { useEffect, useRef } from 'react';
import '../styles/Mapa.css';

function Mapa({ archivoSvg, onZonaClick, departamentoActivo }) {
  const svgRef = useRef(null);

  const handleLoad = (e) => {
    const svgDoc = e.target.contentDocument;
    svgRef.current = svgDoc;

    if (!svgDoc) return console.warn("No se pudo acceder al contenido del SVG.");

    const zonas = svgDoc.querySelectorAll("path, rect, polygon, g");

    zonas.forEach(zona => {
      if (!zona.id) return;

      zona.style.cursor = "pointer";

      // Color base
      zona.style.transition = "fill 0.2s ease";
      const originalColor = zona.getAttribute("fill") || "#ccc";

      // Hover
      zona.addEventListener("mouseenter", () => {
        if (zona.id !== departamentoActivo) zona.style.fill = "#888";
      });

      zona.addEventListener("mouseleave", () => {
        if (zona.id !== departamentoActivo)
          zona.style.fill = originalColor;
      });

      // Click
      zona.addEventListener("click", () => {
        onZonaClick(zona.id);
        resaltarZona(svgDoc, zona.id);
      });
    });

    // Aplica resaltado inicial si hay un departamento activo
    if (departamentoActivo) resaltarZona(svgDoc, departamentoActivo);
  };

  // 🔄 Efecto: cuando cambia el departamento activo desde el sidebar
  useEffect(() => {
    if (!svgRef.current) return;
    resaltarZona(svgRef.current, departamentoActivo);
  }, [departamentoActivo]);

  const resaltarZona = (svgDoc, idZona) => {
    const zonas = svgDoc.querySelectorAll("path, rect, polygon, g");
    zonas.forEach(z => {
      const original = z.getAttribute("data-original-fill") || z.getAttribute("fill");
      if (!z.hasAttribute("data-original-fill")) {
        z.setAttribute("data-original-fill", original || "#ccc");
      }
      if (z.id === idZona) {
        z.style.fill = "#555"; // Color resaltado
      } else {
        z.style.fill = z.getAttribute("data-original-fill");
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
