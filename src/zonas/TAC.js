import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const TAC = () => {
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

      <h1>Tomografía Axial Computarizada (TAC)</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso restringido</strong>
              Solo personal capacitado puede operar los equipos de TAC.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Radiación ionizante</strong>
              Dosis de radiación más elevada que la radiología convencional. Justificación estricta necesaria.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="💉">
            <div>
              <strong>Contraste intravenoso</strong>
              Verificar función renal y alergias antes de administrar contraste yodado.
            </div>
          </li>
          <li className="alerta-info" data-icon="🏃">
            <div>
              <strong>Procedimientos de evacuación</strong>
              Conocer la ubicación de las salidas de emergencia y el protocolo de evacuación del paciente.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="⚠️">
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
          La Tomografía Axial Computarizada (TAC o TC) es una técnica de imagen avanzada que utiliza 
          rayos X y procesamiento informático para generar imágenes transversales (cortes) del cuerpo. 
          Permite visualizar con gran detalle estructuras anatómicas internas y detectar anomalías.
        </p>

        <h3>Funcionamiento básico</h3>
        <p>
          El equipo de TAC consiste en un tubo de rayos X que rota alrededor del paciente, emitiendo 
          múltiples haces de radiación desde diferentes ángulos. Los detectores captan la radiación 
          que atraviesa el cuerpo, y un ordenador procesa esta información para reconstruir imágenes 
          tridimensionales detalladas.
        </p>

        <h3>Aplicaciones clínicas</h3>
        <ul>
          <li><strong>TAC craneal:</strong> Diagnóstico de traumatismos, ictus, tumores cerebrales</li>
          <li><strong>TAC torácico:</strong> Evaluación de pulmones, corazón, grandes vasos</li>
          <li><strong>TAC abdominal:</strong> Estudio de órganos internos, detección de tumores, infecciones</li>
          <li><strong>Angio-TAC:</strong> Visualización de vasos sanguíneos con contraste</li>
          <li><strong>TAC guiado:</strong> Para biopsias y procedimientos intervencionistas</li>
        </ul>

        <h3>Uso de contraste</h3>
        <p>
          Muchos estudios de TAC requieren la administración de contraste yodado intravenoso para 
          mejorar la visualización de estructuras vasculares y tejidos blandos. Antes de administrar 
          contraste, es fundamental:
        </p>
        <ul>
          <li>Verificar la función renal del paciente (creatinina, filtrado glomerular)</li>
          <li>Descartar alergias previas al yodo o contrastes radiológicos</li>
          <li>Asegurar una hidratación adecuada del paciente</li>
          <li>Suspender medicamentos nefrotóxicos si es posible (ej: metformina)</li>
          <li>Monitorizar al paciente durante y después de la administración</li>
        </ul>

        <h3>Protección radiológica en TAC</h3>
        <p>
          El TAC implica dosis de radiación más elevadas que la radiología convencional, por lo que 
          la justificación y optimización son críticas:
        </p>
        <ul>
          <li><strong>Justificación:</strong> Evaluar si el TAC es el mejor método diagnóstico</li>
          <li><strong>Optimización de protocolos:</strong> Ajustar parámetros según peso, edad y región anatómica</li>
          <li><strong>Reducción de dosis:</strong> Utilizar técnicas de modulación automática de corriente</li>
          <li><strong>Evitar exploraciones repetidas:</strong> Revisar estudios previos cuando sea posible</li>
          <li><strong>Protección de órganos sensibles:</strong> Especialmente importante en niños y embarazadas</li>
        </ul>

        <h3>Preparación del paciente</h3>
        <p>
          Dependiendo del tipo de estudio, la preparación puede incluir:
        </p>
        <ul>
          <li>Ayuno de 4-6 horas para estudios abdominales con contraste</li>
          <li>Retirada de objetos metálicos que puedan causar artefactos</li>
          <li>Explicación del procedimiento y obtención del consentimiento informado</li>
          <li>Canalización de vía venosa si se requiere contraste intravenoso</li>
          <li>Instrucciones sobre apnea respiratoria durante la adquisición de imágenes</li>
        </ul>

        <h3>Roles del personal</h3>
        <ul>
          <li><strong>Técnicos de TAC:</strong> Posicionamiento, configuración de protocolos, inyección de contraste</li>
          <li><strong>Radiólogos:</strong> Supervisión de protocolos, interpretación de imágenes</li>
          <li><strong>Personal de enfermería:</strong> Monitorización del paciente, manejo de reacciones adversas</li>
          <li><strong>Radiofísicos:</strong> Optimización de dosis, control de calidad</li>
        </ul>

        <h3>Mantenimiento y control de calidad</h3>
        <p>
          Los equipos de TAC requieren un estricto programa de mantenimiento:
        </p>
        <ul>
          <li>Calibración diaria del sistema mediante fantomas específicos</li>
          <li>Verificación de la exactitud geométrica y contraste de la imagen</li>
          <li>Medición periódica de dosis de radiación</li>
          <li>Mantenimiento preventivo del tubo de rayos X y sistema de refrigeración</li>
          <li>Actualización del software y evaluación de nuevos protocolos</li>
        </ul>

        <h3>Seguridad y manejo de emergencias</h3>
        <p>
          El personal debe estar preparado para manejar emergencias como:
        </p>
        <ul>
          <li><strong>Reacciones al contraste:</strong> Desde leves (náuseas, urticaria) hasta graves (shock anafiláctico)</li>
          <li><strong>Descompensaciones del paciente:</strong> Crisis de ansiedad, dolor torácico</li>
          <li><strong>Protocolo de actuación:</strong> Conocer la ubicación del carro de paradas y medicación de emergencia</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloTAC.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de TAC</a></li>
          <li><a href="/docs/ContrasteRadiologico.pdf" target="_blank" rel="noopener noreferrer">📄 Guía de Uso de Contraste</a></li>
          <li><a href="/docs/OptimizacionDosisTAC.pdf" target="_blank" rel="noopener noreferrer">📄 Optimización de Dosis en TAC</a></li>
          <li><a href="/docs/ReaccionesContraste.pdf" target="_blank" rel="noopener noreferrer">📄 Manejo de Reacciones al Contraste</a></li>
        </ul>
      </section>
    </div>
  );
};

export default TAC;
