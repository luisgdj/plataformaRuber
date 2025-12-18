import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const LaboratoriosClinicos = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      <div className="header-zona">
        <button onClick={() => navigate('/')} className="btn-volver-mapa">
          ← Volver al mapa
        </button>
      </div>

      <h1>Laboratorios Clínicos</h1><br />

      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de bioseguridad</strong>
              Acceso restringido. Manejo de muestras biológicas potencialmente infecciosas.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="🦠">
            <div>
              <strong>Riesgo biológico</strong>
              EPIs obligatorios. Seguimiento estricto de protocolos de bioseguridad.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="💉">
            <div>
              <strong>Material punzante</strong>
              Contenedores específicos para agujas y material cortante.
            </div>
          </li>
          <li className="alerta-info" data-icon="🧪">
            <div>
              <strong>Reactivos químicos</strong>
              Almacenamiento y manejo según fichas de seguridad.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Derrames biológicos</strong>
              Kit de emergencia disponible. Protocolo de descontaminación.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          Los Laboratorios Clínicos son servicios de diagnóstico que realizan análisis de muestras 
          biológicas (sangre, orina, líquidos corporales, tejidos) para ayudar en el diagnóstico, 
          seguimiento y tratamiento de enfermedades. Operan 24/7 para urgencias.
        </p>

        <h3>Áreas del laboratorio</h3>
        <ul>
          <li><strong>Bioquímica clínica:</strong> Análisis de componentes químicos</li>
          <li><strong>Hematología:</strong> Estudio de células sanguíneas</li>
          <li><strong>Microbiología:</strong> Identificación de microorganismos</li>
          <li><strong>Inmunología:</strong> Marcadores inmunológicos y alergias</li>
          <li><strong>Banco de sangre:</strong> Compatibilidad y preparación de hemoderivados</li>
          <li><strong>Anatomía patológica:</strong> Estudio microscópico de tejidos</li>
        </ul>

        <h3>Proceso de la muestra</h3>
        <ul>
          <li><strong>Fase preanalítica:</strong> Solicitud, identificación, extracción, transporte</li>
          <li><strong>Fase analítica:</strong> Procesamiento y análisis</li>
          <li><strong>Fase postanalítica:</strong> Validación, interpretación, informe</li>
        </ul>

        <h3>Control de calidad</h3>
        <ul>
          <li><strong>Controles internos:</strong> Diarios con muestras de concentración conocida</li>
          <li><strong>Controles externos:</strong> Participación en programas de evaluación</li>
          <li><strong>Calibración:</strong> Regular de equipos</li>
          <li><strong>Mantenimiento preventivo:</strong> De instrumentación</li>
        </ul>

        <h3>Bioseguridad</h3>
        <ul>
          <li><strong>Nivel de bioseguridad 2:</strong> Para la mayoría de muestras clínicas</li>
          <li><strong>Nivel 3:</strong> Para agentes de alto riesgo (tuberculosis, etc.)</li>
          <li><strong>EPIs:</strong> Bata, guantes, gafas, mascarilla según procedimiento</li>
          <li><strong>Cabinas de seguridad biológica:</strong> Para manipulación de cultivos</li>
        </ul>
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocolosLaboratorio.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Laboratorio</a></li>
          <li><a href="/docs/BioseguridadLaboratorio.pdf" target="_blank" rel="noopener noreferrer">📄 Manual de Bioseguridad</a></li>
          <li><a href="/docs/ControlCalidadLaboratorio.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Calidad</a></li>
        </ul>
      </section>
    </div>
  );
};

export default LaboratoriosClinicos;
