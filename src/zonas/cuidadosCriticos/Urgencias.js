import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const Urgencias = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      <div className="header-zona">
        <button onClick={() => navigate('/')} className="btn-volver-mapa">
          ← Volver al mapa
        </button>
      </div>

      <h1>Urgencias</h1><br />

      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de alta actividad</strong>
              Flujo constante de pacientes. Priorización por gravedad (triaje).
            </div>
          </li>
          <li className="alerta-peligro" data-icon="🚑">
            <div>
              <strong>Emergencias vitales</strong>
              Preparado para reanimación cardiopulmonar y trauma severo.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🦠">
            <div>
              <strong>Riesgo de contagio</strong>
              Exposición a enfermedades infecciosas. EPIs según protocolo.
            </div>
          </li>
          <li className="alerta-info" data-icon="⏱️">
            <div>
              <strong>Tiempo es crítico</strong>
              Actuación rápida salva vidas. Código ictus, código infarto, código sepsis.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Situaciones de crisis</strong>
              Incidentes con múltiples víctimas. Activación de plan de catástrofes.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          El Servicio de Urgencias es la puerta de entrada al hospital para situaciones que 
          requieren atención médica inmediata. Funciona 24 horas al día, 365 días al año, 
          atendiendo desde emergencias vitales hasta urgencias menores.
        </p>

        <h3>Sistema de triaje (Manchester)</h3>
        <p>Clasificación por prioridad clínica:</p>
        <ul>
          <li><strong>Nivel I (Rojo):</strong> Emergencia, atención inmediata</li>
          <li><strong>Nivel II (Naranja):</strong> Muy urgente, atención en 10 minutos</li>
          <li><strong>Nivel III (Amarillo):</strong> Urgente, atención en 60 minutos</li>
          <li><strong>Nivel IV (Verde):</strong> Menos urgente, atención en 120 minutos</li>
          <li><strong>Nivel V (Azul):</strong> No urgente, atención en 240 minutos</li>
        </ul>

        <h3>Áreas de Urgencias</h3>
        <ul>
          <li><strong>Triaje:</strong> Clasificación inicial</li>
          <li><strong>Área de espera:</strong> Pacientes clasificados pendientes de atención</li>
          <li><strong>Boxes de consulta:</strong> Evaluación y tratamiento</li>
          <li><strong>Sala de críticos:</strong> Pacientes inestables, reanimación</li>
          <li><strong>Observación:</strong> Pacientes que requieren vigilancia temporal</li>
          <li><strong>Sala de curas:</strong> Procedimientos menores</li>
        </ul>

        <h3>Códigos de actuación</h3>
        <ul>
          <li><strong>Código azul:</strong> Parada cardiorrespiratoria</li>
          <li><strong>Código ictus:</strong> Sospecha de ACV, ventana terapéutica 4.5h</li>
          <li><strong>Código infarto:</strong> Síndrome coronario agudo con elevación ST</li>
          <li><strong>Código sepsis:</strong> Sepsis grave o shock séptico</li>
          <li><strong>Código trauma:</strong> Politraumatismo grave</li>
          <li><strong>Código obstétrico:</strong> Emergencia obstétrica</li>
        </ul>

        <h3>Pruebas diagnósticas urgentes</h3>
        <ul>
          <li><strong>Laboratorio urgente:</strong> Resultados en 30-60 minutos</li>
          <li><strong>Radiología simple:</strong> Disponible 24/7</li>
          <li><strong>TAC urgente:</strong> Para emergencias neurológicas y trauma</li>
          <li><strong>Ecografía FAST:</strong> Evaluación rápida en trauma</li>
          <li><strong>ECG:</strong> Interpretación inmediata</li>
        </ul>

        <h3>Equipo de Urgencias</h3>
        <ul>
          <li><strong>Médicos de urgencias:</strong> Guardias 24/7</li>
          <li><strong>Enfermería:</strong> Especializada en urgencias y emergencias</li>
          <li><strong>Auxiliares:</strong> Apoyo en cuidados y movilización</li>
          <li><strong>Celadores:</strong> Traslados y apoyo logístico</li>
          <li><strong>Administrativos:</strong> Admisión y documentación</li>
          <li><strong>Seguridad:</strong> Manejo de situaciones conflictivas</li>
        </ul>

        <h3>Equipamiento esencial</h3>
        <ul>
          <li>Carro de paradas en cada área</li>
          <li>Desfibriladores semiautomáticos (DESA)</li>
          <li>Ventiladores de transporte</li>
          <li>Monitor-desfibriladores</li>
          <li>Equipos de vía aérea difícil</li>
          <li>Material de inmovilización</li>
        </ul>

        <h3>Destino del paciente</h3>
        <ul>
          <li><strong>Alta domiciliaria:</strong> Con recomendaciones y seguimiento</li>
          <li><strong>Observación:</strong> Vigilancia 6-24 horas</li>
          <li><strong>Ingreso en planta:</strong> Hospitalización convencional</li>
          <li><strong>Ingreso en UCI:</strong> Paciente crítico</li>
          <li><strong>Quirófano urgente:</strong> Cirugía inmediata</li>
          <li><strong>Traslado:</strong> A otro centro especializado si necesario</li>
        </ul>
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocolosUrgencias.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Urgencias</a></li>
          <li><a href="/docs/ManualTriaje.pdf" target="_blank" rel="noopener noreferrer">📄 Manual de Triaje Manchester</a></li>
          <li><a href="/docs/CodigosActuacion.pdf" target="_blank" rel="noopener noreferrer">📄 Códigos de Actuación</a></li>
          <li><a href="/docs/SoporteVitalAvanzado.pdf" target="_blank" rel="noopener noreferrer">📄 Soporte Vital Avanzado</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Urgencias;
