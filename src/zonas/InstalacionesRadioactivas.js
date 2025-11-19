import React from 'react';
import '../styles/ZonaInteractiva.css';

const InstalacionesRadioactivas = () => {
  return (
    <div className="zona-interactiva">
      <h1>Instalaciones radioactivas</h1>

      <section>
        <h2>Información general</h2>
        <p>Las instalaciones radioactivas incluyen áreas de medicina nuclear y radioterapia, donde se utilizan fuentes de radiación para diagnóstico y tratamiento.</p>
      </section>

      <section>
        <h2>Medicina nuclear</h2>
        <ul>
          <li>Gamma cámara: Detecta radiación emitida por radiofármacos.</li>
          <li>SPECT/TAC: Combina imágenes funcionales y anatómicas.</li>
          <li>PET/TAC: Permite visualizar procesos metabólicos.</li>
        </ul>
      </section>

      <section>
        <h2>Radioterapia</h2>
        <ul>
          <li>Acelerador lineal: Emite radiación de alta energía para tratar tumores.</li>
          <li>Ciberknife: Sistema robótico para radiocirugía de alta precisión.</li>
        </ul>
      </section>

      <section>
        <h2>Vídeo explicativo</h2>
        <video controls src="/videos/Instalaciones radioactivas.mp4" />
      </section>

      <section>
        <h2>Documentación</h2>
        <a href="/docs/Instalaciones_Radioactivas.pdf" target="_blank" rel="noopener noreferrer">
          Ver protocolo PDF
        </a>
      </section>

      <section>
        <h2>Test interactivo</h2>
        <p>¿Cuál es la diferencia entre SPECT y PET?</p>
        <div className="zona-test">
          <button>SPECT usa rayos X, PET usa ultrasonido</button>
          <button>SPECT mide radiación gamma, PET mide positrones</button>
          <button>Ambos usan la misma tecnología</button>
        </div>
      </section>

      <section>
        <h2>Alertas activas</h2>
        <p>⚠️ Acceso restringido: Se requiere dosimetría personal en estas áreas.</p>
      </section>
    </div>
  );
};

export default InstalacionesRadioactivas;
