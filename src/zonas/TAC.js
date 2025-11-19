import React from 'react';
import '../styles/ZonaInteractiva.css';

const TAC = () => (
  <div className="zona-interactiva">
    <h1>Tomografía Axial Computarizada (TAC)</h1>

    <section>
      <h2>Alertas activas</h2>
      <p>⚠️ Zona controlada. Uso de radiofármacos. Acceso restringido.</p>
    </section>

    <section>
      <h2>Información general</h2>
      <p>La gamma cámara detecta radiación gamma emitida por radiofármacos administrados al paciente.</p>
    </section>

    <section>
      <h2>Vídeo explicativo</h2>
      <video controls src="/videos/TAC.mp4" />
    </section>

    <section>
      <h2>Documentación</h2>
      <a href="/docs/TAC.pdf" target="_blank" rel="noopener noreferrer">
        Ver protocolo PDF
      </a>
    </section>

    <section>
      <h2>Test interactivo</h2>
      <p>¿Qué tipo de radiación detecta el acelerador lineal?</p>
      <div className="zona-test">
        <button>Rayos X</button>
        <button>Radiación gamma</button>
        <button>Radiación alfa</button>
      </div>
    </section>
  </div>
);

export default TAC;
