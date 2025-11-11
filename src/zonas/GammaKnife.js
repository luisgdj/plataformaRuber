import React from 'react';
import '../ZonaInteractiva.css';

const GammaKnife = () => {
  return (
    <div className="zona-interactiva">
      <h1>Gamma Knife</h1>

      <section>
        <h2>Alertas activas</h2>
        <ul className="alertas-lista">
          <li>⚠️ <strong>Acceso restringido:</strong> Solo personal autorizado y paciente preparado.</li>
          <li>🧠 <strong>Precisión extrema:</strong> No mover equipos ni mobiliario dentro del área de disparo.</li>
          <li>🔋 <strong>Equipos electrónicos:</strong> Mantener alejados de la fuente de radiación.</li>
          <li>🚨 <strong>Emergencias:</strong> Siga las instrucciones del técnico responsable.</li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          El sistema Gamma Knife utiliza haces de radiación gamma altamente focalizados para tratar lesiones cerebrales con precisión milimétrica.
        </p>
      </section>

      <section>
        <h2>Vídeo explicativo</h2>
        <video controls src="/videos/GammaKnife.mp4" />
      </section>
    </div>
  );
};

export default GammaKnife;
