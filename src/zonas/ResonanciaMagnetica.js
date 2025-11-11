import React from 'react';
import '../ZonaInteractiva.css';

const ResonanciaMagnetica = () => {
  return (
    <div className="zona-interactiva">
      <h1>Resonancia magnética (RM)</h1>

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
        <a href="/docs/Resonancia_Magnetica.pdf" target="_blank" rel="noopener noreferrer">
          Ver protocolo PDF
        </a>
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
