// src/zonas/ResonanciaMagnetica.js
import React from 'react';
import '../styles/ZonaInteractiva.css';
import '../styles/Mapa.css';

const ResonanciaMagnetica = () => {
  // Ruta relativa desde la carpeta /public
  const rutaSvg = '/mapas/plantaS1-RM.svg';

  return (
    <div className="zona-interactiva">
      <h1>Resonancia magnética (RM)</h1>
      <p>
        Las instalaciones de Resonancia Magnética se dividen en cuatro zonas de seguridad, cada una con niveles de control de acceso y restricciones específicos.
        <br /> Estas zonas están diseñadas para prevenir la entrada de objetos ferromagnéticos y personas no autorizadas en áreas de alto riesgo.
      </p>
      {/* Apartado del mapa con información */}
      <section className="mapa-apartado">
        <h2>Zonas de seguridad de Resonancia Magnética</h2>
        <div className="mapa-contenedor">
          {/* Información a la izquierda */}
          <div className="mapa-info">

            <h3>Zona I: Acceso libre</h3>
            <ul>
              <li> Áreas de espera y recepción. </li>
              <li> El público general puede transitar sin restricciones. </li>
            </ul>

            <h3>Zona II: Transición</h3>
            <ul>
              <li> Zona supervisada por personal capacitado. </li>
              <li> Se realiza la detección inicial de metales y se prepara a los pacientes. </li>
            </ul>

            <h3>Zona III: Acceso restringido</h3>
            <ul>
              <li> Solo para personal autorizado y pacientes que han pasado el cribado de seguridad. </li>
              <li> Se retiran objetos metálicos. </li>
            </ul>

            <h3>Zona IV: Sala del imán</h3>
            <ul>
              <li> El equipo de Resonancia Magnética. </li>
              <li> Acceso estrictamente controlado debido al potente campo magnético. </li>
              <li> Acceso estrictamente controlado debido al potente campo magnético. </li>
              <li> Solo personal de Resonancia Magnética y paciente durante exploración. </li>
            </ul>
            
          </div>

          {/* Mapa a la derecha */}
          <div className="mapa-visual">
            <object
              id="svgMapa"
              type="image/svg+xml"
              data={rutaSvg}
              className="mapa-svg"
              aria-label="Mapa de las zonas de Resonancia Magnética"
              style={{ width: '400px', height: '300px' }} // tamaño reducido
            >
              No se pudo cargar el mapa.
            </object>
          </div>
        </div>
      </section>

      {/* Resto del contenido */}
      <section>
        <h2>Alertas activas</h2>
        <ul className="alertas-lista">
          <li>🔒 <strong>Acceso restringido:</strong> Solo personal formado o acompañado por el técnico de RM.</li>
          <li>🧲 <strong>Campo magnético permanente:</strong> No entrar con objetos metálicos ni equipos no autorizados.</li>
          <li>🧰 <strong>Equipos de trabajo:</strong> Verifique que sean <em>MR Safe</em> o <em>MR Conditional</em>.</li>
          <li>❤️ <strong>Implantes o prótesis:</strong> Avise al personal si lleva dispositivos médicos implantados.</li>
          <li>🚨 <strong>Situaciones de emergencia:</strong> Siga siempre las indicaciones del personal autorizado.</li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>La resonancia magnética utiliza campos magnéticos y ondas de radio para obtener imágenes detalladas del cuerpo humano.</p>
      </section>

      <section>
        <h2>Vídeo explicativo</h2>
        <video controls src="/videos/Resonancia magnética (RM).mp4" />
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloSeguridadRM.pdf" target="_blank" rel="noreferrer">Protocolo de Seguridad</a></li>
          <li><a href="/docs/EtiquetadoMaterialesRM.pdf" target="_blank" rel="noreferrer">Etiquetado de Materiales</a></li>
          <li><a href="/docs/ManualSeguridadRM.pdf" target="_blank" rel="noreferrer">Manual de Seguridad</a></li>
        </ul>
      </section>

      <section>
        <h2>Test interactivo</h2>
        <p>¿Qué tipo de energía utiliza la RM?</p>
        <div className="zona-test">
          <button>Radiación ionizante</button>
          <button>Ultrasonido</button>
          <button>Campos magnéticos</button>
        </div>
      </section>
    </div>
  );
};

export default ResonanciaMagnetica;
