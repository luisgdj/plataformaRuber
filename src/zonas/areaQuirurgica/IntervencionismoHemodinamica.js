import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const IntervencionismoHemodinamica = () => {
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

      <h1>Intervencionismo y Hemodinámica</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de alta seguridad</strong>
              Acceso restringido. Procedimientos mínimamente invasivos de alta complejidad.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Radiación fluoroscópica</strong>
              Uso continuo de rayos X durante procedimientos. Protección obligatoria.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="💉">
            <div>
              <strong>Contraste yodado</strong>
              Verificar función renal y alergias. Riesgo de reacciones adversas.
            </div>
          </li>
          <li className="alerta-info" data-icon="🩺">
            <div>
              <strong>Monitorización intensiva</strong>
              Control hemodinámico continuo del paciente durante procedimientos.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Complicaciones vasculares</strong>
              Preparado para manejo de hemorragias y complicaciones cardíacas agudas.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          El área de Intervencionismo y Hemodinámica es un servicio especializado que combina 
          técnicas diagnósticas y terapéuticas mínimamente invasivas guiadas por imagen. Permite 
          realizar procedimientos cardiovasculares, vasculares periféricos y de otros sistemas 
          sin necesidad de cirugía abierta.
        </p>

        <h3>Sala de hemodinámica</h3>
        <p>
          Quirófano híbrido equipado con:
        </p>
        <ul>
          <li><strong>Arco de fluoroscopia:</strong> Generador de imágenes de rayos X en tiempo real</li>
          <li><strong>Mesa radiolúcida:</strong> Permite paso de rayos X y movimiento multiaxial</li>
          <li><strong>Inyector de contraste:</strong> Administración automática de contraste</li>
          <li><strong>Monitores hemodinámicos:</strong> Registro continuo de presiones y flujos</li>
          <li><strong>Sistema de grabación:</strong> Documentación de procedimientos</li>
          <li><strong>Equipos de reanimación:</strong> Desfibrilador, marcapasos temporal</li>
        </ul>

        <h3>Procedimientos diagnósticos</h3>
        <ul>
          <li><strong>Cateterismo cardíaco:</strong> Evaluación de arterias coronarias</li>
          <li><strong>Estudio electrofisiológico:</strong> Análisis de arritmias</li>
          <li><strong>Biopsia endomiocárdica:</strong> Toma de muestras del corazón</li>
          <li><strong>Arteriografía periférica:</strong> Visualización de arterias de extremidades</li>
          <li><strong>Flebografía:</strong> Estudio del sistema venoso</li>
        </ul>

        <h3>Procedimientos terapéuticos cardiovasculares</h3>
        <ul>
          <li><strong>Angioplastia coronaria (ICP):</strong> Dilatación de arterias coronarias con balón y stent</li>
          <li><strong>Implante de marcapasos/DAI:</strong> Dispositivos de estimulación cardíaca</li>
          <li><strong>Ablación por radiofrecuencia:</strong> Tratamiento de arritmias</li>
          <li><strong>Cierre de defectos septales:</strong> Reparación percutánea de comunicaciones</li>
          <li><strong>Valvuloplastia:</strong> Dilatación de válvulas estenóticas</li>
          <li><strong>TAVI:</strong> Implante percutáneo de válvula aórtica</li>
        </ul>

        <h3>Procedimientos de intervencionismo vascular periférico</h3>
        <ul>
          <li><strong>Angioplastia periférica:</strong> Revascularización de extremidades</li>
          <li><strong>Embolización:</strong> Oclusión de vasos sangrantes o malformaciones</li>
          <li><strong>Filtros de vena cava:</strong> Prevención de tromboembolismo pulmonar</li>
          <li><strong>TIPS:</strong> Shunt portosistémico intrahepático transjugular</li>
          <li><strong>Quimioembolización:</strong> Tratamiento de tumores hepáticos</li>
        </ul>

        <h3>Vías de acceso</h3>
        <p>
          Puntos de entrada para catéteres:
        </p>
        <ul>
          <li><strong>Arteria/vena femoral:</strong> Acceso más común, ingle</li>
          <li><strong>Arteria radial:</strong> Acceso preferido en coronariografía, menos complicaciones</li>
          <li><strong>Vena yugular:</strong> Para marcapasos, estudios derechos</li>
          <li><strong>Arteria humeral:</strong> Alternativa menos frecuente</li>
        </ul>

        <h3>Protección radiológica</h3>
        <p>
          Medidas específicas por uso prolongado de fluoroscopia:
        </p>
        <ul>
          <li><strong>Personal:</strong> Delantales plomados (0.5 mm Pb equivalente), gafas plomadas, protector de tiroides</li>
          <li><strong>Paciente:</strong> Blindaje gonadal cuando sea posible, minimizar tiempo de fluoroscopia</li>
          <li><strong>Dosimetría:</strong> Todo el personal lleva dosímetro personal</li>
          <li><strong>Optimización:</strong> Técnicas de imagen pulsada, última imagen guardada</li>
          <li><strong>Distancia:</strong> Personal no esencial fuera de la sala durante fluoroscopia</li>
        </ul>

        <h3>Preparación del paciente</h3>
        <ul>
          <li><strong>Ayuno:</strong> 6-8 horas previas al procedimiento</li>
          <li><strong>Analítica:</strong> Función renal, hemograma, coagulación</li>
          <li><strong>Consentimiento informado:</strong> Explicación detallada de riesgos y beneficios</li>
          <li><strong>Suspensión de anticoagulantes:</strong> Según protocolo</li>
          <li><strong>Premedicación:</strong> Ansiolítico, analgésico si necesario</li>
          <li><strong>Vía venosa periférica:</strong> Para administración de medicación</li>
        </ul>

        <h3>Durante el procedimiento</h3>
        <ul>
          <li><strong>Sedación consciente:</strong> Anestesista presente en casos complejos</li>
          <li><strong>Monitorización:</strong> ECG continuo, presión arterial, saturación de O2</li>
          <li><strong>Anestesia local:</strong> En el punto de punción</li>
          <li><strong>Anticoagulación:</strong> Heparina intravenosa durante el procedimiento</li>
          <li><strong>Administración de contraste:</strong> Con precauciones de función renal</li>
        </ul>

        <h3>Complicaciones potenciales</h3>
        <ul>
          <li><strong>En el sitio de punción:</strong> Hematoma, pseudoaneurisma, fístula arteriovenosa</li>
          <li><strong>Vasculares:</strong> Disección, perforación, trombosis</li>
          <li><strong>Cardíacas:</strong> Arritmias, infarto, taponamiento</li>
          <li><strong>Renales:</strong> Nefropatía por contraste</li>
          <li><strong>Alérgicas:</strong> Reacción al contraste</li>
          <li><strong>Embólicas:</strong> Embolismo cerebral, periférico</li>
        </ul>

        <h3>Cuidados postprocedimiento</h3>
        <ul>
          <li><strong>Compresión manual:</strong> 10-20 minutos en sitio de punción</li>
          <li><strong>Reposo:</strong> 4-6 horas con extremidad en extensión (femoral), 2 horas (radial)</li>
          <li><strong>Vigilancia:</strong> Pulsos distales, signos de sangrado, hematoma</li>
          <li><strong>Hidratación:</strong> Para prevenir nefropatía por contraste</li>
          <li><strong>Analgesia:</strong> Control del dolor</li>
          <li><strong>Alta:</strong> Típicamente 24 horas tras procedimientos diagnósticos</li>
        </ul>

        <h3>Equipo multidisciplinar</h3>
        <ul>
          <li><strong>Cardiólogos intervencionistas:</strong> Realizan procedimientos cardíacos</li>
          <li><strong>Radiólogos intervencionistas:</strong> Procedimientos vasculares no cardíacos</li>
          <li><strong>Anestesiólogos:</strong> Sedación y manejo anestésico</li>
          <li><strong>Enfermería especializada:</strong> Apoyo durante procedimientos</li>
          <li><strong>Técnicos de rayos X:</strong> Manejo del equipo de imagen</li>
          <li><strong>Cirujanos cardiovasculares:</strong> Respaldo para complicaciones</li>
        </ul>

        <h3>Control de calidad</h3>
        <ul>
          <li>Calibración periódica del equipo de fluoroscopia</li>
          <li>Registro de dosis de radiación por procedimiento</li>
          <li>Auditorías de indicaciones y resultados</li>
          <li>Seguimiento de complicaciones</li>
          <li>Formación continua del personal</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloHemodinamica.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Hemodinámica</a></li>
          <li><a href="/docs/IntervencionismoVascular.pdf" target="_blank" rel="noopener noreferrer">📄 Intervencionismo Vascular</a></li>
          <li><a href="/docs/ProteccionRadiologicaHemodinamica.pdf" target="_blank" rel="noopener noreferrer">📄 Protección Radiológica</a></li>
          <li><a href="/docs/ComplicacionesHemodinamica.pdf" target="_blank" rel="noopener noreferrer">📄 Manejo de Complicaciones</a></li>
        </ul>
      </section>
    </div>
  );
};

export default IntervencionismoHemodinamica;
