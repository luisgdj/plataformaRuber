import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const RadiologiaConvencional = () => {
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

      <h1>Radiología Convencional</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso restringido</strong>
              Solo personal autorizado puede acceder durante los procedimientos radiológicos.
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
          <li className="alerta-info" data-icon="🚪">
            <div>
              <strong>Señalización</strong>
              Respetar las señales luminosas que indican cuando el equipo está activo.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Procedimiento de emergencia</strong>
              En caso de emergencia, abandonar la sala siguiendo las rutas de evacuación señalizadas.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          La radiología convencional es la técnica de imagen médica más utilizada y accesible. 
          Emplea rayos X para obtener imágenes bidimensionales de estructuras internas del cuerpo, 
          siendo especialmente útil para visualizar huesos, articulaciones y algunas estructuras de tejidos blandos.
        </p>

        <h3>Funcionamiento básico</h3>
        <p>
          Un tubo de rayos X genera un haz de radiación que atraviesa el cuerpo del paciente. 
          Las estructuras más densas (como los huesos) absorben más radiación y aparecen blancas en la imagen, 
          mientras que los tejidos blandos y el aire absorben menos y aparecen en tonos grises u oscuros.
        </p>

        <h3>Aplicaciones principales</h3>
        <ul>
          <li>Radiografías de tórax: detección de neumonía, fracturas costales, problemas cardíacos</li>
          <li>Radiografías óseas: diagnóstico de fracturas, luxaciones, artritis</li>
          <li>Radiografías abdominales: detección de obstrucciones intestinales, cálculos</li>
          <li>Radiografías dentales: evaluación de caries, infecciones, estructura ósea</li>
        </ul>

        <h3>Protección radiológica</h3>
        <p>
          Aunque las dosis de radiación en radiología convencional son bajas, es fundamental seguir 
          los principios ALARA (As Low As Reasonably Achievable):
        </p>
        <ul>
          <li><strong>Justificación:</strong> Solo realizar estudios cuando sean médicamente necesarios</li>
          <li><strong>Optimización:</strong> Utilizar la mínima dosis necesaria para obtener imágenes diagnósticas</li>
          <li><strong>Limitación:</strong> Proteger áreas no estudiadas con equipos de protección plomados</li>
        </ul>

        <h3>Seguridad del paciente</h3>
        <p>
          Antes de realizar cualquier estudio radiológico, el personal debe:
        </p>
        <ul>
          <li>Verificar la indicación clínica del estudio</li>
          <li>Preguntar sobre posible embarazo en mujeres en edad fértil</li>
          <li>Retirar objetos metálicos que puedan interferir con la imagen</li>
          <li>Proteger órganos sensibles (gónadas, tiroides) con protectores plomados</li>
          <li>Explicar al paciente el procedimiento y la necesidad de permanecer inmóvil</li>
        </ul>

        <h3>Roles y responsabilidades</h3>
        <p>
          El personal que trabaja en radiología convencional debe:
        </p>
        <ul>
          <li><strong>Técnicos en radiología:</strong> Posicionamiento del paciente, ajuste de parámetros técnicos, protección radiológica</li>
          <li><strong>Radiólogos:</strong> Interpretación de imágenes y elaboración de informes diagnósticos</li>
          <li><strong>Personal de enfermería:</strong> Preparación del paciente, asistencia durante el procedimiento</li>
          <li><strong>Personal administrativo:</strong> Gestión de citas, historiales y documentación</li>
        </ul>

        <h3>Mantenimiento y control de calidad</h3>
        <p>
          Los equipos de radiología convencional requieren:
        </p>
        <ul>
          <li>Calibración periódica para garantizar la calidad de imagen y dosis adecuadas</li>
          <li>Revisiones técnicas regulares por personal especializado</li>
          <li>Pruebas de control de calidad diarias, semanales y mensuales</li>
          <li>Registro de todas las intervenciones y mantenimientos realizados</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloRadiologiaConvencional.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolo de Radiología Convencional</a></li>
          <li><a href="/docs/ProteccionRadiologica.pdf" target="_blank" rel="noopener noreferrer">📄 Manual de Protección Radiológica</a></li>
          <li><a href="/docs/ControlCalidadRX.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Calidad en RX</a></li>
        </ul>
      </section>
    </div>
  );
};

export default RadiologiaConvencional;
