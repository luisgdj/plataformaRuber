import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const AceleradorLineal = () => {
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

      <h1>Acelerador Lineal (LINAC)</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de máxima restricción</strong>
              Acceso solo a personal de radioterapia autorizado y paciente en tratamiento.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Radiación de altísima energía</strong>
              Fotones de 6-18 MV y electrones de 6-20 MeV. Bunker con blindaje extremo.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🚨">
            <div>
              <strong>Sistema de enclavamientos</strong>
              Múltiples sistemas de seguridad impiden entrada durante irradiación.
            </div>
          </li>
          <li className="alerta-info" data-icon="📹">
            <div>
              <strong>Monitorización continua</strong>
              Cámaras y audio permiten vigilancia constante del paciente durante tratamiento.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="⚠️">
            <div>
              <strong>Parada de emergencia</strong>
              Botones dentro y fuera del bunker. Conocer ubicación y procedimiento.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          El acelerador lineal (LINAC) es la herramienta fundamental de la radioterapia externa moderna. 
          Genera haces de radiación de alta energía (fotones y electrones) dirigidos con precisión 
          milimétrica hacia tumores, minimizando la exposición de tejidos sanos circundantes. Es el 
          tratamiento estándar para muchos tipos de cáncer.
        </p>

        <h3>Principio de funcionamiento</h3>
        <p>
          El LINAC acelera electrones a velocidades cercanas a la luz mediante ondas electromagnéticas 
          de radiofrecuencia en una estructura aceleradora (guía de ondas). Estos electrones pueden:
        </p>
        <ul>
          <li><strong>Modo fotones (rayos X):</strong> Los electrones impactan en un blanco de tungsteno, generando fotones de alta energía</li>
          <li><strong>Modo electrones:</strong> Los electrones se utilizan directamente tras filtrado y colimación</li>
        </ul>

        <h3>Componentes principales</h3>
        <ul>
          <li><strong>Cañón de electrones:</strong> Fuente de electrones (cátodo caliente)</li>
          <li><strong>Magnetrón/Klistrón:</strong> Generador de microondas para acelerar electrones</li>
          <li><strong>Guía de ondas:</strong> Estructura donde se aceleran los electrones</li>
          <li><strong>Sistema deflector:</strong> Dirige el haz hacia el cabezal de tratamiento</li>
          <li><strong>Blanco:</strong> Convierte electrones en fotones (tungsteno)</li>
          <li><strong>Colimadores multi-láminas (MLC):</strong> Conforman el haz a la forma del tumor</li>
          <li><strong>Gantry:</strong> Estructura giratoria que permite irradiar desde cualquier ángulo (0-360°)</li>
        </ul>

        <h3>Técnicas de radioterapia con LINAC</h3>
        <ul>
          <li><strong>Radioterapia conformacional 3D (3D-CRT):</strong> Múltiples campos que se ajustan a la forma del tumor</li>
          <li><strong>IMRT (Intensity Modulated Radiation Therapy):</strong> Intensidad variable del haz para distribuciones de dosis complejas</li>
          <li><strong>VMAT (Volumetric Modulated Arc Therapy):</strong> IMRT en arco continuo, más rápido</li>
          <li><strong>IGRT (Image Guided Radiation Therapy):</strong> Imagen del paciente antes/durante tratamiento para verificar posición</li>
          <li><strong>SBRT/SRS (Stereotactic Body/Radiosurgery):</strong> Dosis altas en pocas sesiones con precisión submilimétrica</li>
          <li><strong>Radioterapia respiratoria sincronizada:</strong> Ajuste del haz según movimiento respiratorio</li>
        </ul>

        <h3>Proceso de tratamiento</h3>
        <p><strong>1. Simulación y planificación:</strong></p>
        <ul>
          <li>TAC de simulación con inmovilizadores personalizados</li>
          <li>Delimitación de volúmenes (tumor, órganos en riesgo)</li>
          <li>Dosimetría: cálculo de distribución de dosis óptima</li>
          <li>Control de calidad del plan (verificación independiente)</li>
        </ul>

        <p><strong>2. Verificación pre-tratamiento:</strong></p>
        <ul>
          <li>Control de calidad específico del paciente (phantom)</li>
          <li>Verificación de parámetros del plan</li>
          <li>Primera sesión: imágenes de verificación detalladas</li>
        </ul>

        <p><strong>3. Tratamiento diario:</strong></p>
        <ul>
          <li>Posicionamiento del paciente (láser, marcas en piel)</li>
          <li>Imagen de verificación (CBCT, kV/MV imaging)</li>
          <li>Ajustes de posición si necesario</li>
          <li>Irradiación (típicamente 2-10 minutos)</li>
          <li>Monitorización continua del paciente</li>
        </ul>

        <h3>Fraccionamiento de dosis</h3>
        <p>
          El tratamiento se divide en múltiples sesiones (fracciones) para:
        </p>
        <ul>
          <li>Permitir reparación de tejidos sanos entre sesiones</li>
          <li>Redistribución de células tumorales en fases más radiosensibles del ciclo celular</li>
          <li>Reoxigenación de zonas hipóxicas del tumor</li>
          <li>Repoblación controlada</li>
        </ul>

        <p><strong>Esquemas típicos:</strong></p>
        <ul>
          <li><strong>Convencional:</strong> 1.8-2 Gy/fracción, 5 días/semana, 5-7 semanas</li>
          <li><strong>Hipofraccionamiento:</strong> Dosis mayores (menos de 2.5 Gy/fracción), menos sesiones</li>
          <li><strong>SBRT:</strong> Dosis muy altas (8-20 Gy/fracción), 1-5 sesiones</li>
        </ul>

        <h3>Indicaciones principales</h3>
        <ul>
          <li><strong>Tratamiento radical:</strong> Objetivo curativo (cáncer de próstata localizado, cabeza-cuello, pulmón)</li>
          <li><strong>Adyuvante:</strong> Tras cirugía para eliminar enfermedad microscópica residual (mama, recto)</li>
          <li><strong>Neoadyuvante:</strong> Pre-quirúrgico para reducir tumor (recto, sarcomas)</li>
          <li><strong>Paliativo:</strong> Control de síntomas (metástasis óseas dolorosas, compresión medular)</li>
          <li><strong>Rescate:</strong> Tras recidiva locorregional</li>
        </ul>

        <h3>Efectos secundarios</h3>
        <p><strong>Agudos (durante y semanas post-tratamiento):</strong></p>
        <ul>
          <li>Fatiga</li>
          <li>Reacciones cutáneas (eritema, descamación)</li>
          <li>Mucositis (boca, esófago, recto según localización)</li>
          <li>Náuseas (irradiación abdominal)</li>
          <li>Cistitis, proctitis (pelvis)</li>
        </ul>

        <p><strong>Tardíos (meses a años):</strong></p>
        <ul>
          <li>Fibrosis de tejidos blandos</li>
          <li>Xerostomía (boca seca) en irradiación de cabeza-cuello</li>
          <li>Disfunción sexual (pelvis)</li>
          <li>Segundos tumores (raro, riesgo a muy largo plazo)</li>
        </ul>

        <h3>Protección radiológica en radioterapia</h3>
        <p>
          El bunker del LINAC requiere blindaje extremo:
        </p>
        <ul>
          <li><strong>Paredes:</strong> Hormigón de alta densidad, espesor 1.5-2.5 metros</li>
          <li><strong>Puerta:</strong> Múltiples capas de plomo, peso menor a 3 toneladas</li>
          <li><strong>Laberinto:</strong> Entrada en ángulo para reducir radiación dispersa</li>
          <li><strong>Sistema de enclavamiento:</strong> Impide irradiación si puerta abierta</li>
          <li><strong>Señalización luminosa:</strong> Indica cuando haz está activo</li>
          <li><strong>Monitorización de área:</strong> Detectores de radiación fuera del bunker</li>
        </ul>

        <h3>Sistemas de seguridad</h3>
        <ul>
          <li><strong>Enclavamientos físicos:</strong> Múltiples puertas, microswitches</li>
          <li><strong>Paradas de emergencia:</strong> Dentro y fuera del bunker, accesibles al paciente</li>
          <li><strong>Monitorización del haz:</strong> Cámaras de ionización que verifican dosis continuamente</li>
          <li><strong>Verificación de posición:</strong> Sistemas de imagen antes de cada tratamiento</li>
          <li><strong>Redundancia:</strong> Sistemas duplicados de medición y control</li>
          <li><strong>Log files:</strong> Registro automático de todos los parámetros de tratamiento</li>
        </ul>

        <h3>Control de calidad</h3>
        <p><strong>Diario:</strong></p>
        <ul>
          <li>Verificación de constancia de dosis</li>
          <li>Comprobación de láser de posicionamiento</li>
          <li>Funcionalidad de sistemas de seguridad</li>
        </ul>

        <p><strong>Mensual:</strong></p>
        <ul>
          <li>Dosimetría detallada (perfil, simetría, planicidad del haz)</li>
          <li>Precisión mecánica (isocentro, colimadores)</li>
          <li>Sistemas de imagen</li>
        </ul>

        <p><strong>Anual:</strong></p>
        <ul>
          <li>Calibración absoluta de dosis</li>
          <li>Revisión exhaustiva de todos los sistemas</li>
          <li>Verificación de blindajes</li>
        </ul>

        <h3>Roles del equipo de radioterapia</h3>
        <ul>
          <li><strong>Oncólogos radioterápicos:</strong> Prescripción, delimitación de volúmenes, seguimiento</li>
          <li><strong>Radiofísicos:</strong> Planificación dosimétrica, control de calidad, protección radiológica</li>
          <li><strong>Técnicos en radioterapia (TERS):</strong> Posicionamiento, verificación, administración del tratamiento</li>
          <li><strong>Personal de enfermería:</strong> Cuidados de soporte, manejo de efectos secundarios</li>
          <li><strong>Dosimetristas:</strong> Optimización de planes de tratamiento</li>
        </ul>

        <h3>Innovaciones recientes</h3>
        <ul>
          <li><strong>Radioterapia adaptativa:</strong> Ajuste del plan durante el tratamiento según cambios anatómicos</li>
          <li><strong>MR-LINAC:</strong> Integración de resonancia magnética para guía en tiempo real</li>
          <li><strong>Protonterapia:</strong> Alternativa con partículas cargadas para distribuciones de dosis más precisas</li>
          <li><strong>FLASH radiotherapy:</strong> Dosis ultra-altas en fracción de segundo (investigación)</li>
          <li><strong>Inteligencia artificial:</strong> Automatización de delimitación y planificación</li>
        </ul>

        <h3>Consideraciones para otros profesionales</h3>
        <p>
          Personal hospitalario no especializado en radioterapia debe saber:
        </p>
        <ul>
          <li>Los pacientes en tratamiento NO emiten radiación (a diferencia de braquiterapia)</li>
          <li>Las marcas en la piel del paciente son críticas, no eliminarlas</li>
          <li>Informar al oncólogo radioterápico sobre cualquier cambio en estado del paciente</li>
          <li>Respetar las citas de radioterapia (son diarias y críticas para eficacia)</li>
          <li>En emergencias dentro del bunker, usar paradas de emergencia</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocolosRadioterapia.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Radioterapia</a></li>
          <li><a href="/docs/SeguridadLINAC.pdf" target="_blank" rel="noopener noreferrer">📄 Seguridad en LINAC</a></li>
          <li><a href="/docs/ControlCalidadRadioterapia.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Calidad</a></li>
          <li><a href="/docs/EfectosSecundariosRadioterapia.pdf" target="_blank" rel="noopener noreferrer">📄 Manejo de Efectos Secundarios</a></li>
        </ul>
      </section>
    </div>
  );
};

export default AceleradorLineal;
