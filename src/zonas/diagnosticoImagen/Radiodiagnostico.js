import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const Radiodiagnostico = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      {/* BOTÓN VOLVER AL MAPA */}
      <div className="header-zona">
        <button 
          onClick={() => navigate('/')}
          className="btn-volver-mapa"
        >
          ← Volver al mapa
        </button>
      </div>

      <h1>Radiodiagnóstico (RX, TAC, Mamografía)</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso controlado</strong>
              Solo personal autorizado puede operar los equipos de radiodiagnóstico.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Radiación ionizante</strong>
              Uso de rayos X. Mantener distancia de seguridad cuando el equipo está en funcionamiento.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🦺">
            <div>
              <strong>Protección radiológica</strong>
              Uso obligatorio de delantal plomado y dosímetro personal para el personal expuesto.
            </div>
          </li>
          <li className="alerta-info" data-icon="💉">
            <div>
              <strong>Contraste radiológico</strong>
              Verificar función renal y alergias antes de administrar contraste yodado.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Reacciones al contraste</strong>
              Tener disponible el carro de paradas y medicación para reacciones adversas.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          El área de Radiodiagnóstico comprende las técnicas de imagen que utilizan rayos X para 
          obtener información diagnóstica. Incluye radiología convencional, tomografía computarizada 
          (TAC) y mamografía, siendo pilares fundamentales del diagnóstico médico moderno.
        </p>

        <h3>Principios de funcionamiento</h3>
        <p>
          Todas estas técnicas se basan en la capacidad de los rayos X para atravesar el cuerpo humano:
        </p>
        <ul>
          <li>Los tejidos densos (huesos) absorben más radiación y aparecen blancos</li>
          <li>Los tejidos blandos y el aire absorben menos y aparecen grises u oscuros</li>
          <li>El contraste yodado puede mejorar la visualización de estructuras vasculares y tejidos</li>
        </ul>

        <h3>Modalidades disponibles</h3>
        <p>
          El servicio de Radiodiagnóstico incluye:
        </p>
        <ul>
          <li><strong>Radiología Convencional:</strong> Técnica más básica y accesible para huesos y tórax</li>
          <li><strong>Tomografía Computarizada (TAC):</strong> Imágenes transversales detalladas de cualquier región</li>
          <li><strong>Mamografía:</strong> Especializada en detección precoz de cáncer de mama</li>
        </ul>

        <h3>Protección radiológica</h3>
        <p>
          Todos los procedimientos siguen los principios ALARA (As Low As Reasonably Achievable):
        </p>
        <ul>
          <li><strong>Justificación:</strong> Solo realizar estudios médicamente necesarios</li>
          <li><strong>Optimización:</strong> Utilizar la mínima dosis necesaria para obtener imágenes diagnósticas</li>
          <li><strong>Limitación:</strong> Proteger áreas no estudiadas con equipos de protección plomados</li>
          <li><strong>Dosimetría:</strong> Control continuo de dosis recibida por el personal</li>
        </ul>

        <h3>Uso de contraste radiológico</h3>
        <p>
          Muchos estudios requieren la administración de contraste yodado:
        </p>
        <ul>
          <li>Verificar función renal del paciente (creatinina, filtrado glomerular)</li>
          <li>Descartar alergias previas al yodo o contrastes radiológicos</li>
          <li>Asegurar una hidratación adecuada del paciente</li>
          <li>Suspender medicamentos nefrotóxicos si es posible (ej: metformina)</li>
          <li>Monitorizar al paciente durante y después de la administración</li>
          <li>Conocer ubicación del carro de paradas para emergencias</li>
        </ul>

        <h3>Preparación del paciente</h3>
        <p>
          Dependiendo del tipo de estudio:
        </p>
        <ul>
          <li><strong>Radiología convencional:</strong> Retirada de objetos metálicos</li>
          <li><strong>TAC abdominal:</strong> Ayuno de 4-6 horas si se usa contraste</li>
          <li><strong>Mamografía:</strong> No usar desodorante ni cremas el día del examen</li>
          <li>Verificar ausencia de embarazo en mujeres en edad fértil</li>
        </ul>

        <h3>Seguridad del paciente</h3>
        <p>
          Antes de realizar cualquier estudio:
        </p>
        <ul>
          <li>Verificar la indicación clínica del estudio</li>
          <li>Preguntar sobre posible embarazo</li>
          <li>Retirar objetos metálicos que puedan interferir</li>
          <li>Proteger órganos sensibles (gónadas, tiroides) con protectores plomados</li>
          <li>Explicar al paciente el procedimiento</li>
        </ul>

        <h3>Equipo multidisciplinar</h3>
        <ul>
          <li><strong>Técnicos en radiología:</strong> Posicionamiento del paciente, ajuste de parámetros técnicos</li>
          <li><strong>Radiólogos:</strong> Interpretación de imágenes y elaboración de informes diagnósticos</li>
          <li><strong>Personal de enfermería:</strong> Preparación del paciente, administración de contraste</li>
          <li><strong>Radiofísicos:</strong> Optimización de dosis, control de calidad</li>
        </ul>

        <h3>Control de calidad</h3>
        <ul>
          <li>Calibración periódica de equipos</li>
          <li>Verificación de calidad de imagen y dosis adecuadas</li>
          <li>Pruebas de control de calidad diarias, semanales y mensuales</li>
          <li>Revisiones técnicas regulares por personal especializado</li>
          <li>Registro de todas las intervenciones y mantenimientos</li>
        </ul>

        <h3>Manejo de emergencias</h3>
        <p>
          El personal debe estar preparado para manejar:
        </p>
        <ul>
          <li><strong>Reacciones al contraste:</strong> Desde leves (náuseas, urticaria) hasta graves (shock anafiláctico)</li>
          <li><strong>Descompensaciones del paciente:</strong> Crisis de ansiedad, dolor torácico</li>
          <li>Conocer ubicación del carro de paradas y medicación de emergencia</li>
          <li>Seguir protocolos establecidos de actuación</li>
        </ul>
      </section>

      {/* ===================== EQUIPOS ESPECÍFICOS ===================== */}
      <section>
        <h2>Equipos de Radiodiagnóstico</h2>
        <p>Este servicio incluye los siguientes equipos especializados:</p>
        
        <div className="zona-info-card zona-1" style={{ marginBottom: '1rem' }}>
          <h3>Radiología Convencional</h3>
          <p>
            Técnica de imagen más utilizada y accesible. Emplea rayos X para visualizar 
            estructuras internas, especialmente útil para huesos y tórax.
          </p>
          {/*<button onClick={() => navigate('/zonas/radiologia-convencional')}>
            Ver información detallada →
          </button>*/}
        </div>

        <div className="zona-info-card zona-2" style={{ marginBottom: '1rem' }}>
          <h3>Tomografía Axial Computarizada (TAC)</h3>
          <p>
            Técnica avanzada que utiliza rayos X y procesamiento informático para generar 
            imágenes transversales detalladas del cuerpo.
          </p>
          {/*<button onClick={() => navigate('/zonas/tac')}>
            Ver información detallada →
          </button>*/}
        </div>

        <div className="zona-info-card zona-3" style={{ marginBottom: '1rem' }}>
          <h3>Mamografía</h3>
          <p>
            Técnica especializada para evaluación del tejido mamario. 
            Herramienta más efectiva para detección precoz del cáncer de mama.
          </p>
          {/*<button onClick={() => navigate('/zonas/mamografia')}>
            Ver información detallada →
          </button>*/}
        </div>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ManualRadiodiagnostico.pdf" target="_blank" rel="noopener noreferrer">📄 Manual General de Radiodiagnóstico</a></li>
          <li><a href="/docs/ProteccionRadiologica.pdf" target="_blank" rel="noopener noreferrer">📄 Manual de Protección Radiológica</a></li>
          <li><a href="/docs/ContrasteRadiologico.pdf" target="_blank" rel="noopener noreferrer">📄 Guía de Uso de Contraste</a></li>
          <li><a href="/docs/OptimizacionDosis.pdf" target="_blank" rel="noopener noreferrer">📄 Optimización de Dosis</a></li>
          <li><a href="/docs/ReaccionesContraste.pdf" target="_blank" rel="noopener noreferrer">📄 Manejo de Reacciones al Contraste</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Radiodiagnostico;
