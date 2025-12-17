import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const SPECTTAC = () => {
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

      <h1>Tomografía Computarizada por Emisión de Fotón Único (SPECT-TAC)</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona controlada</strong>
              Doble restricción: manejo de radiofármacos y uso de rayos X.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Doble exposición radiactiva</strong>
              Combinación de radiación gamma del trazador y rayos X del TAC.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="📏">
            <div>
              <strong>Dosimetría reforzada</strong>
              Control estricto de dosis por exposición dual. Dosímetro obligatorio.
            </div>
          </li>
          <li className="alerta-info" data-icon="⏱️">
            <div>
              <strong>Tiempo de exploración</strong>
              Estudios más largos que gamma cámara convencional (30-60 minutos).
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Protocolo dual</strong>
              Seguir procedimientos tanto de medicina nuclear como de radiología.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          El SPECT-TAC es un sistema híbrido que combina la tomografía por emisión de fotón único 
          (SPECT) con la tomografía computarizada (TAC). Esta tecnología permite obtener simultáneamente 
          información funcional del SPECT e información anatómica del TAC, fusionando ambas imágenes 
          para una localización precisa de hallazgos y mejor caracterización de lesiones.
        </p>

        <h3>Ventajas del sistema híbrido SPECT-TAC</h3>
        <ul>
          <li><strong>Localización anatómica precisa:</strong> El TAC permite situar exactamente los hallazgos del SPECT</li>
          <li><strong>Corrección de atenuación:</strong> El TAC proporciona mapas de atenuación para mejorar la calidad de imagen SPECT</li>
          <li><strong>Aumento de especificidad:</strong> Reduce falsos positivos al correlacionar hallazgos funcionales con anatomía</li>
          <li><strong>Mejor caracterización:</strong> Identifica cambios anatómicos que explican alteraciones funcionales</li>
          <li><strong>Un solo procedimiento:</strong> Ambos estudios en una sola sesión, sin mover al paciente</li>
        </ul>

        <h3>Diferencias entre SPECT y gamma cámara planar</h3>
        <p>
          Mientras la gamma cámara convencional produce imágenes bidimensionales (planares), el SPECT 
          adquiere imágenes desde múltiples ángulos alrededor del paciente, permitiendo reconstrucción 
          tomográfica tridimensional. Esto proporciona:
        </p>
        <ul>
          <li>Mejor contraste y resolución espacial</li>
          <li>Eliminación de estructuras superpuestas</li>
          <li>Localización precisa en profundidad</li>
          <li>Cuantificación más exacta de la actividad</li>
        </ul>

        <h3>Aplicaciones clínicas principales</h3>
        <ul>
          <li><strong>SPECT-TAC óseo:</strong> Caracterización de lesiones óseas, diferenciación benigno/maligno</li>
          <li><strong>SPECT-TAC cardíaco:</strong> Perfusión miocárdica con correlación anatómica, calcificaciones coronarias</li>
          <li><strong>SPECT-TAC de paratiroides:</strong> Localización precisa de adenomas antes de cirugía</li>
          <li><strong>Neuroimagen:</strong> SPECT cerebral de perfusión con referencias anatómicas</li>
          <li><strong>Oncología:</strong> Estadificación, detección de metástasis con receptores específicos</li>
          <li><strong>Ganglio centinela:</strong> Localización preoperatoria exacta</li>
        </ul>

        <h3>Radiofármacos específicos para SPECT-TAC</h3>
        <ul>
          <li><strong>Tc-99m MDP:</strong> Gammagrafía ósea</li>
          <li><strong>Tc-99m Sestamibi/Tetrofosmin:</strong> Perfusión miocárdica, paratiroides</li>
          <li><strong>Tc-99m HMPAO/ECD:</strong> Perfusión cerebral</li>
          <li><strong>Tc-99m MAA:</strong> Perfusión pulmonar</li>
          <li><strong>I-123 MIBG:</strong> Tumores neuroendocrinos</li>
          <li><strong>In-111 Octreótido:</strong> Tumores neuroendocrinos con receptores de somatostatina</li>
        </ul>

        <h3>Protocolo de adquisición</h3>
        <p>
          El procedimiento típico incluye:
        </p>
        <ul>
          <li><strong>Preparación:</strong> Similar a gamma cámara convencional, según el tipo de estudio</li>
          <li><strong>Administración del radiofármaco:</strong> Dosis calculada según peso y tipo de estudio</li>
          <li><strong>Tiempo de espera:</strong> Variable según el trazador (minutos a horas)</li>
          <li><strong>Posicionamiento del paciente:</strong> Crucial para alineación correcta SPECT-TAC</li>
          <li><strong>Scout view (topograma):</strong> Localización rápida del área de interés</li>
          <li><strong>Adquisición TAC:</strong> Generalmente de baja dosis, para localización y corrección de atenuación</li>
          <li><strong>Adquisición SPECT:</strong> Rotación de detectores (180° o 360°), múltiples proyecciones</li>
          <li><strong>Reconstrucción y fusión:</strong> Procesamiento de imágenes y fusión automática</li>
        </ul>

        <h3>Parámetros técnicos del TAC</h3>
        <p>
          El componente TAC del SPECT-TAC puede configurarse en diferentes modos:
        </p>
        <ul>
          <li><strong>TAC de muy baja dosis:</strong> Solo para corrección de atenuación (~2-5 mSv)</li>
          <li><strong>TAC de baja dosis:</strong> Para localización anatómica (~5-10 mSv)</li>
          <li><strong>TAC diagnóstico completo:</strong> Cuando se requiere evaluación anatómica detallada (menor de10 mSv)</li>
        </ul>

        <h3>Dosimetría y protección radiológica</h3>
        <p>
          La dosis total al paciente proviene de dos fuentes:
        </p>
        <ul>
          <li><strong>Dosis interna:</strong> Del radiofármaco administrado (según actividad y vida media)</li>
          <li><strong>Dosis externa:</strong> Del TAC (según protocolo utilizado)</li>
          <li>Dosis efectiva típica: 10-25 mSv total según el estudio</li>
          <li>Personal: protección dual (medicina nuclear + radiología)</li>
        </ul>

        <h3>Control de calidad específico</h3>
        <ul>
          <li><strong>Alineación geométrica:</strong> Verificar coincidencia espacial entre SPECT y TAC</li>
          <li><strong>Uniformidad de detectores:</strong> Control diario de cristales SPECT</li>
          <li><strong>Calibración TAC:</strong> Verificación de número TAC (unidades Hounsfield)</li>
          <li><strong>Precisión de corrección de atenuación:</strong> Con fantomas específicos</li>
          <li><strong>Fusión de imágenes:</strong> Verificar algoritmos de registro automático</li>
        </ul>

        <h3>Artefactos comunes</h3>
        <p>
          Problemas técnicos que pueden afectar la calidad de imagen:
        </p>
        <ul>
          <li><strong>Movimiento del paciente:</strong> Desalineación entre SPECT y TAC</li>
          <li><strong>Artefactos metálicos:</strong> Del TAC que afectan corrección de atenuación</li>
          <li><strong>Truncamiento:</strong> Cuando parte del paciente queda fuera del campo de visión</li>
          <li><strong>Respiración:</strong> Diferencias entre adquisiciones SPECT y TAC</li>
        </ul>

        <h3>Interpretación de imágenes</h3>
        <p>
          El radiólogo/médico nuclear debe evaluar:
        </p>
        <ul>
          <li>Imágenes SPECT solas para identificar captaciones anormales</li>
          <li>Imágenes TAC para contexto anatómico</li>
          <li>Imágenes fusionadas para localización precisa</li>
          <li>Cuantificación de captación cuando sea relevante</li>
          <li>Correlación con hallazgos clínicos y de laboratorio</li>
        </ul>

        <h3>Roles del personal</h3>
        <ul>
          <li><strong>Médicos nucleares:</strong> Prescripción, administración de radiofármacos, interpretación integrada</li>
          <li><strong>Técnicos SPECT-TAC:</strong> Requieren formación dual en medicina nuclear y TAC</li>
          <li><strong>Radiofísicos:</strong> Optimización de protocolos, control de calidad, dosimetría</li>
          <li><strong>Personal de enfermería:</strong> Preparación de pacientes, monitorización</li>
        </ul>

        <h3>Consideraciones clínicas</h3>
        <ul>
          <li>Indicación justificada dada la mayor dosis de radiación</li>
          <li>Evaluar riesgo-beneficio en embarazadas, niños</li>
          <li>Considerar alternativas cuando sea posible (RM, ecografía)</li>
          <li>Informar al paciente sobre dosis y precauciones post-estudio</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloSPECTTAC.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos SPECT-TAC</a></li>
          <li><a href="/docs/OptimizacionDosisSPECTTAC.pdf" target="_blank" rel="noopener noreferrer">📄 Optimización de Dosis</a></li>
          <li><a href="/docs/ControlCalidadSPECTTAC.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Calidad</a></li>
          <li><a href="/docs/InterpretacionImagenesHibridas.pdf" target="_blank" rel="noopener noreferrer">📄 Interpretación de Imágenes Híbridas</a></li>
        </ul>
      </section>
    </div>
  );
};

export default SPECTTAC;
