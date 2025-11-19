// src/zonas/ResonanciaMagnetica.js
import React from 'react';
import '../styles/ZonaInteractiva.css';
import '../styles/Mapa.css';
import TestRM from './TestRM';

const ResonanciaMagnetica = () => {
  const rutaSvg = '/mapas/plantaS1-RM.svg';

  return (
    <div className="zona-interactiva">
      <h1>Resonancia magnética (RM)</h1>
      <p>
        Las instalaciones de Resonancia Magnética se dividen en cuatro zonas de seguridad,
        cada una con niveles de control de acceso y restricciones específicos.
      </p>

      {/* ===================== MAPA ===================== */}
      <section className="mapa-apartado">
        <h2>Zonas de seguridad de Resonancia Magnética</h2>
        <div className="mapa-contenedor">

          <div className="mapa-info">
            <h3>Zona I: Acceso libre</h3>
            <ul>
              <li>Áreas de espera y recepción.</li>
              <li>Tránsito libre para el público general.</li>
            </ul>

            <h3>Zona II: Transición</h3>
            <ul>
              <li>Supervisada por personal capacitado.</li>
              <li>Se realiza detección inicial de metales.</li>
            </ul>

            <h3>Zona III: Acceso restringido</h3>
            <ul>
              <li>Solo personal autorizado.</li>
              <li>Se retiran objetos metálicos.</li>
            </ul>

            <h3>Zona IV: Sala del imán</h3>
            <ul>
              <li>Ubicación del equipo RM.</li>
              <li>Acceso completamente controlado.</li>
              <li>Solo personal de RM durante la exploración.</li>
            </ul>
          </div>

          <div className="mapa-visual">
            <object
              id="svgMapa"
              type="image/svg+xml"
              data={rutaSvg}
              className="mapa-svg"
              style={{ width: '400px', height: '300px' }}
            >
              No se pudo cargar el mapa.
            </object>
          </div>
        </div>
      </section>

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas activas</h2>
        <ul className="alertas-lista">
          <li>🔒 <strong>Acceso restringido:</strong> Solo personal formado.</li>
          <li>🧲 <strong>Campo magnético permanente:</strong> Peligro con objetos metálicos.</li>
          <li>🧰 <strong>Equipos de trabajo:</strong> Deben ser MR Safe o MR Conditional.</li>
          <li>❤️ <strong>Implantes:</strong> Avisar si lleva dispositivos médicos.</li>
          <li>🚨 <strong>Emergencias:</strong> Siga indicaciones del técnico.</li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>La resonancia magnética utiliza campos magnéticos y ondas de radio para obtener imágenes detalladas del cuerpo humano.</p>
      </section>

      {/* ===================== VIDEO ===================== */}
      <section>
        <h2>Vídeo explicativo</h2>
        <video controls src="/videos/Resonancia magnética (RM).mp4" />
      </section>

      {/* ===================== DOCUMENTOS ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloSeguridadRM.pdf" target="_blank">Protocolo de Seguridad</a></li>
          <li><a href="/docs/EtiquetadoMaterialesRM.pdf" target="_blank">Etiquetado de Materiales</a></li>
          <li><a href="/docs/ManualSeguridadRM.pdf" target="_blank">Manual de Seguridad</a></li>
        </ul>
      </section>

      {/* ===================== TEST INTERACTIVO REAL ===================== */}
      <section>
        <h2>Test interactivo</h2>
        <TestRM />
      </section>

    </div>
  );
};

export default ResonanciaMagnetica;
