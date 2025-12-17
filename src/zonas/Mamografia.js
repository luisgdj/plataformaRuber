import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const Mamografia = () => {
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

      <h1>Mamografía</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso controlado</strong>
              Solo personal técnico autorizado puede operar el mamógrafo.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Radiación de baja energía</strong>
              Uso de rayos X de baja energía optimizados para tejido mamario.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🤰">
            <div>
              <strong>Embarazo y lactancia</strong>
              Verificar siempre antes del procedimiento. Evitar durante embarazo salvo indicación médica urgente.
            </div>
          </li>
          <li className="alerta-info" data-icon="🩺">
            <div>
              <strong>Privacidad de la paciente</strong>
              Garantizar intimidad y trato respetuoso durante todo el procedimiento.
            </div>
          </li>
          <li className="alerta-info" data-icon="📅">
            <div>
              <strong>Momento del ciclo</strong>
              Preferiblemente realizar entre día 7-14 del ciclo menstrual para mayor comodidad.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          La mamografía es una técnica de imagen radiológica especializada diseñada específicamente 
          para la evaluación del tejido mamario. Es la herramienta más efectiva para la detección 
          precoz del cáncer de mama, permitiendo identificar lesiones incluso antes de que sean 
          palpables.
        </p>

        <h3>Funcionamiento básico</h3>
        <p>
          El mamógrafo utiliza rayos X de baja energía optimizados para penetrar el tejido mamario 
          con la mínima dosis posible. La mama se comprime suavemente entre dos placas para obtener 
          imágenes de alta calidad, reducir el movimiento y distribuir uniformemente el tejido.
        </p>

        <h3>Tipos de mamografía</h3>
        <ul>
          <li><strong>Mamografía de cribado (screening):</strong> Examen de rutina en mujeres asintomáticas para detectar cáncer precoz</li>
          <li><strong>Mamografía diagnóstica:</strong> Evaluación de síntomas específicos (bulto, dolor, secreción)</li>
          <li><strong>Mamografía digital:</strong> Imágenes digitales que permiten mejor manipulación y almacenamiento</li>
          <li><strong>Tomosíntesis mamaria (3D):</strong> Múltiples imágenes desde diferentes ángulos para reconstrucción 3D</li>
        </ul>

        <h3>Indicaciones principales</h3>
        <ul>
          <li><strong>Cribado poblacional:</strong> Mujeres entre 50-69 años cada 2 años (según protocolo local)</li>
          <li><strong>Alto riesgo:</strong> Mujeres con antecedentes familiares o mutaciones genéticas (BRCA1/2)</li>
          <li><strong>Diagnóstico de síntomas:</strong> Bultos, cambios en la piel, secreción del pezón</li>
          <li><strong>Seguimiento post-tratamiento:</strong> Después de cirugía o tratamiento de cáncer de mama</li>
        </ul>

        <h3>Técnica de adquisición</h3>
        <p>
          Para obtener mamografías de calidad diagnóstica:
        </p>
        <ul>
          <li><strong>Proyecciones estándar:</strong> Cráneo-caudal (CC) y oblicua medio-lateral (OML) de cada mama</li>
          <li><strong>Compresión adecuada:</strong> Esencial para reducir dosis, mejorar contraste y separar estructuras</li>
          <li><strong>Posicionamiento correcto:</strong> Incluir todo el tejido mamario, especialmente región axilar</li>
          <li><strong>Comunicación con la paciente:</strong> Explicar el procedimiento, importancia de la compresión</li>
          <li><strong>Proyecciones adicionales:</strong> Si es necesario para clarificar hallazgos</li>
        </ul>

        <h3>Preparación de la paciente</h3>
        <p>
          Antes de la mamografía, se recomienda:
        </p>
        <ul>
          <li>No usar desodorante, talco o cremas en mamas o axilas (pueden crear artefactos)</li>
          <li>Informar sobre implantes mamarios, cirugías previas o biopsias</li>
          <li>Traer mamografías anteriores para comparación</li>
          <li>Programar el examen en la primera parte del ciclo menstrual si es posible</li>
          <li>Informar sobre síntomas o áreas de preocupación</li>
        </ul>

        <h3>Interpretación BI-RADS</h3>
        <p>
          Los hallazgos mamográficos se clasifican según el sistema BI-RADS (Breast Imaging 
          Reporting and Data System):
        </p>
        <ul>
          <li><strong>BI-RADS 0:</strong> Evaluación adicional necesaria</li>
          <li><strong>BI-RADS 1:</strong> Negativo (sin hallazgos)</li>
          <li><strong>BI-RADS 2:</strong> Hallazgos benignos</li>
          <li><strong>BI-RADS 3:</strong> Probablemente benigno, seguimiento recomendado (control en 6 meses)</li>
          <li><strong>BI-RADS 4:</strong> Anormalidad sospechosa, biopsia recomendada (subdividido en 4A, 4B, 4C)</li>
          <li><strong>BI-RADS 5:</strong> Altamente sugestivo de malignidad, biopsia urgente</li>
          <li><strong>BI-RADS 6:</strong> Malignidad conocida confirmada por biopsia</li>
        </ul>

        <h3>Hallazgos comunes</h3>
        <p>
          Los hallazgos más frecuentes en mamografía incluyen:
        </p>
        <ul>
          <li><strong>Calcificaciones:</strong> Pueden ser benignas o sospechosas según morfología y distribución</li>
          <li><strong>Masas:</strong> Evaluar forma, márgenes y densidad</li>
          <li><strong>Asimetrías:</strong> Diferencias en la densidad entre mamas</li>
          <li><strong>Distorsión arquitectural:</strong> Alteración del patrón normal del tejido</li>
          <li><strong>Cambios en la piel:</strong> Engrosamiento, retracción</li>
        </ul>

        <h3>Limitaciones de la mamografía</h3>
        <ul>
          <li><strong>Sensibilidad reducida en mamas densas:</strong> El tejido denso puede ocultar lesiones</li>
          <li><strong>Falsos negativos:</strong> 10-20% de cánceres no detectados en mamografía</li>
          <li><strong>Falsos positivos:</strong> Pueden generar ansiedad y procedimientos adicionales innecesarios</li>
          <li><strong>Exposición a radiación:</strong> Aunque mínima, se acumula con estudios repetidos</li>
        </ul>

        <h3>Técnicas complementarias</h3>
        <p>
          Cuando la mamografía es insuficiente, se pueden utilizar:
        </p>
        <ul>
          <li><strong>Ecografía mamaria:</strong> Complemento ideal, diferencia quistes de masas sólidas</li>
          <li><strong>Resonancia magnética (RM):</strong> Más sensible, especialmente en alto riesgo y mamas densas</li>
          <li><strong>Biopsia guiada:</strong> Mamográfica, ecográfica o por RM para confirmación histológica</li>
        </ul>

        <h3>Control de calidad</h3>
        <p>
          Los programas de mamografía requieren estricto control de calidad:
        </p>
        <ul>
          <li>Calibración diaria con fantomas específicos</li>
          <li>Verificación de densidad óptica y contraste</li>
          <li>Control de dosis de radiación</li>
          <li>Revisión de artefactos en sistema de revelado/impresión</li>
          <li>Auditoría de resultados y correlación con biopsias</li>
          <li>Formación continua del personal técnico y médico</li>
        </ul>

        <h3>Roles del personal</h3>
        <ul>
          <li><strong>Técnicos en mamografía:</strong> Requieren formación especializada en posicionamiento y técnica</li>
          <li><strong>Radiólogos:</strong> Especialistas con formación específica en imagen mamaria</li>
          <li><strong>Personal de enfermería:</strong> Apoyo en preparación de pacientes y procedimientos intervencionistas</li>
          <li><strong>Coordinadores de cribado:</strong> Gestión de programas de detección precoz</li>
        </ul>

        <h3>Aspectos psicosociales</h3>
        <p>
          El personal debe ser sensible a:
        </p>
        <ul>
          <li>Ansiedad de las pacientes ante el procedimiento y resultados</li>
          <li>Privacidad y dignidad durante la exploración</li>
          <li>Comunicación clara y empática de resultados</li>
          <li>Apoyo emocional en caso de hallazgos sospechosos</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloMamografia.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Mamografía</a></li>
          <li><a href="/docs/SistemaBIRADS.pdf" target="_blank" rel="noopener noreferrer">📄 Sistema BI-RADS</a></li>
          <li><a href="/docs/ControlCalidadMamografia.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Calidad</a></li>
          <li><a href="/docs/CribadoCancerMama.pdf" target="_blank" rel="noopener noreferrer">📄 Programas de Cribado</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Mamografia;
