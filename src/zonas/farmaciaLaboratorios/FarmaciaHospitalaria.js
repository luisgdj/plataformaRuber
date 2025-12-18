import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const FarmaciaHospitalaria = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      <div className="header-zona">
        <button onClick={() => navigate('/')} className="btn-volver-mapa">
          ← Volver al mapa
        </button>
      </div>

      <h1>Farmacia Hospitalaria</h1><br />

      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso controlado</strong>
              Solo personal autorizado. Control estricto de medicación y estupefacientes.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="💊">
            <div>
              <strong>Medicamentos de alto riesgo</strong>
              Almacenamiento seguro. Protocolos específicos de manejo.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="❄️">
            <div>
              <strong>Cadena de frío</strong>
              Medicamentos termolábiles. Monitorización continua de temperatura.
            </div>
          </li>
          <li className="alerta-info" data-icon="🧪">
            <div>
              <strong>Preparación de mezclas</strong>
              Cabina de flujo laminar. Técnica aséptica obligatoria.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Alertas de seguridad</strong>
              Sistema de notificación de errores de medicación y reacciones adversas.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          La Farmacia Hospitalaria es un servicio especializado responsable del uso seguro y eficiente 
          de los medicamentos en el hospital. Incluye la dispensación, preparación de mezclas intravenosas, 
          nutrición parenteral, farmacocinética clínica y farmacovigilancia.
        </p>

        <h3>Funciones principales</h3>
        <ul>
          <li><strong>Dispensación:</strong> Medicamentos a servicios y pacientes externos</li>
          <li><strong>Formulación magistral:</strong> Preparaciones personalizadas</li>
          <li><strong>Mezclas IV:</strong> Preparación estéril de citostáticos y otros</li>
          <li><strong>Nutrición parenteral:</strong> Elaboración individualizada</li>
          <li><strong>Farmacocinética clínica:</strong> Monitorización de niveles plasmáticos</li>
          <li><strong>Farmacovigilancia:</strong> Detección de reacciones adversas</li>
          <li><strong>Gestión de medicamentos:</strong> Compras, almacenamiento, caducidades</li>
        </ul>

        <h3>Áreas especializadas</h3>
        <ul>
          <li><strong>Sala blanca:</strong> Preparación estéril de citostáticos</li>
          <li><strong>Área de dispensación:</strong> Dosis unitarias y sistemas automatizados</li>
          <li><strong>Almacén:</strong> General, estupefacientes, termolábiles</li>
          <li><strong>Consulta de farmacia:</strong> Atención farmacéutica a pacientes externos</li>
        </ul>

        <h3>Seguridad en el uso de medicamentos</h3>
        <ul>
          <li>Validación de prescripciones médicas</li>
          <li>Detección de interacciones medicamentosas</li>
          <li>Alertas de alergias</li>
          <li>Ajuste de dosis en insuficiencia renal o hepática</li>
          <li>Protocolos de medicamentos de alto riesgo</li>
        </ul>
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocolosFarmacia.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Farmacia</a></li>
          <li><a href="/docs/MedicamentosAltoRiesgo.pdf" target="_blank" rel="noopener noreferrer">📄 Medicamentos de Alto Riesgo</a></li>
          <li><a href="/docs/PreparacionCitostaticos.pdf" target="_blank" rel="noopener noreferrer">📄 Preparación de Citostáticos</a></li>
        </ul>
      </section>
    </div>
  );
};

export default FarmaciaHospitalaria;
