import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const OncologiaRadioterapica = () => {
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

      <h1>Oncología Radioterápica</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de máxima seguridad</strong>
              Acceso extremadamente restringido. Solo personal autorizado durante tratamientos.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Radiación de alta energía</strong>
              Fotones de alta energía (6-18 MV) y electrones. Bunkers con blindaje extremo.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="⚠️">
            <div>
              <strong>Sistemas de enclavamiento</strong>
              Múltiples sistemas de seguridad. Respeta todos los enclavamientos y señales.
            </div>
          </li>
          <li className="alerta-info" data-icon="📹">
            <div>
              <strong>Monitorización continua</strong>
              Cámaras y audio permiten vigilancia del paciente durante todo el tratamiento.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Parada de emergencia</strong>
              Botones dentro y fuera del bunker. Conoce su ubicación y procedimiento.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          La Oncología Radioterápica es la especialidad médica dedicada al tratamiento del cáncer 
          mediante radiaciones ionizantes. Utiliza haces de radiación de alta energía dirigidos 
          con precisión al tumor para destruir células cancerosas, minimizando el daño a tejidos 
          sanos circundantes.
        </p>

        <h3>Fundamentos de la radioterapia</h3>
        <p>
          La radioterapia actúa dañando el ADN de las células:
        </p>
        <ul>
          <li><strong>Daño directo:</strong> Ionización directa de moléculas de ADN</li>
          <li><strong>Daño indirecto:</strong> Producción de radicales libres que dañan el ADN</li>
          <li><strong>Selectividad:</strong> Las células tumorales tienen menor capacidad de reparación</li>
          <li><strong>Fraccionamiento:</strong> División de la dosis total permite recuperación de tejidos sanos</li>
        </ul>

        <h3>Equipos de radioterapia</h3>
        <p>
          El servicio de Oncología Radioterápica cuenta con tecnología de última generación:
        </p>
        <ul>
          <li><strong>Aceleradores lineales (LINAC):</strong> Equipos principales para radioterapia externa</li>
          <li><strong>CyberKnife:</strong> Sistema robótico para radiocirugía estereotáctica de alta precisión</li>
          <li><strong>Sistemas de imagen:</strong> TAC de simulación, imagen portal, CBCT</li>
          <li><strong>Planificación dosimétrica:</strong> Software avanzado para optimización de tratamientos</li>
        </ul>

        <h3>Tipos de radioterapia</h3>
        <ul>
          <li><strong>Radioterapia externa (EBRT):</strong> La más común, haces desde fuera del cuerpo</li>
          <li><strong>Radioterapia conformacional 3D:</strong> Adapta haces a forma tridimensional del tumor</li>
          <li><strong>IMRT:</strong> Intensidad modulada para distribuciones complejas de dosis</li>
          <li><strong>VMAT:</strong> IMRT en arco continuo, más rápido</li>
          <li><strong>IGRT:</strong> Guiada por imagen para verificación de posición</li>
          <li><strong>SBRT/SRS:</strong> Radiocirugía estereotáctica, dosis altas en pocas sesiones</li>
          <li><strong>Radioterapia adaptativa:</strong> Ajuste del plan según cambios anatómicos</li>
        </ul>

        <h3>Indicaciones principales</h3>
        <ul>
          <li><strong>Tratamiento radical:</strong> Con intención curativa (próstata, cabeza-cuello, pulmón)</li>
          <li><strong>Adyuvante:</strong> Post-cirugía para eliminar enfermedad residual microscópica</li>
          <li><strong>Neoadyuvante:</strong> Pre-quirúrgico para reducir tamaño del tumor</li>
          <li><strong>Paliativo:</strong> Control de síntomas (metástasis óseas dolorosas, compresión medular)</li>
          <li><strong>Concomitante:</strong> Combinado con quimioterapia para efecto sinérgico</li>
        </ul>

        <h3>Proceso de tratamiento</h3>
        <p><strong>1. Consulta inicial y decisión terapéutica:</strong></p>
        <ul>
          <li>Evaluación por oncólogo radioterápico</li>
          <li>Revisión de historia clínica, pruebas diagnósticas</li>
          <li>Decisión en comité multidisciplinar</li>
          <li>Información al paciente, consentimiento informado</li>
        </ul>

        <p><strong>2. Simulación:</strong></p>
        <ul>
          <li>TAC de planificación con inmovilizadores personalizados</li>
          <li>Marcaje de piel o tatuajes de posicionamiento</li>
          <li>Fusión con otras imágenes (RM, PET) si necesario</li>
        </ul>

        <p><strong>3. Planificación dosimétrica:</strong></p>
        <ul>
          <li>Delimitación de volúmenes (tumor, órganos de riesgo)</li>
          <li>Prescripción de dosis</li>
          <li>Optimización de distribución de dosis</li>
          <li>Verificación independiente</li>
          <li>Control de calidad específico del paciente</li>
        </ul>

        <p><strong>4. Tratamiento diario:</strong></p>
        <ul>
          <li>Sesiones diarias (lunes a viernes típicamente)</li>
          <li>Duración: 10-20 minutos por sesión</li>
          <li>Posicionamiento del paciente</li>
          <li>Verificación con imagen</li>
          <li>Irradiación (2-5 minutos)</li>
          <li>Revisión semanal con oncólogo</li>
        </ul>

        <h3>Efectos secundarios</h3>
        <p><strong>Agudos (durante y semanas post-tratamiento):</strong></p>
        <ul>
          <li>Fatiga (muy común)</li>
          <li>Reacciones cutáneas (eritema, descamación)</li>
          <li>Específicos por localización (mucositis, náuseas, cistitis, proctitis)</li>
          <li>Generalmente reversibles</li>
        </ul>

        <p><strong>Tardíos (meses a años):</strong></p>
        <ul>
          <li>Fibrosis de tejidos blandos</li>
          <li>Disfunción específica de órganos irradiados</li>
          <li>Requieren seguimiento a largo plazo</li>
        </ul>

        <h3>Seguridad en radioterapia</h3>
        <p>
          Múltiples barreras de seguridad protegen a pacientes y personal:
        </p>
        <ul>
          <li><strong>Bunkers blindados:</strong> Paredes de hormigón de 1.5-2.5 metros de espesor</li>
          <li><strong>Puertas plomadas:</strong> Múltiples capas, peso de hasta 3 toneladas</li>
          <li><strong>Enclavamientos:</strong> Impiden irradiación si condiciones no seguras</li>
          <li><strong>Señalización luminosa:</strong> Indica cuando haz está activo</li>
          <li><strong>Paradas de emergencia:</strong> Accesibles desde interior y exterior</li>
          <li><strong>Monitorización de área:</strong> Detectores de radiación fuera del bunker</li>
          <li><strong>Sistemas redundantes:</strong> Verificación independiente de dosis</li>
        </ul>

        <h3>Equipo multidisciplinar</h3>
        <ul>
          <li><strong>Oncólogos radioterápicos:</strong> Prescripción, delimitación, seguimiento</li>
          <li><strong>Radiofísicos médicos:</strong> Planificación, control de calidad, protección radiológica</li>
          <li><strong>Técnicos en radioterapia (TERS):</strong> Administración diaria del tratamiento</li>
          <li><strong>Dosimetristas:</strong> Optimización de planes de tratamiento</li>
          <li><strong>Personal de enfermería:</strong> Cuidados de soporte, manejo de efectos secundarios</li>
        </ul>

        <h3>Protección radiológica</h3>
        <ul>
          <li>Los pacientes NO emiten radiación tras tratamiento</li>
          <li>Personal debe permanecer fuera del bunker durante irradiación</li>
          <li>Monitorización dosimétrica del personal</li>
          <li>Formación continua en protección radiológica</li>
          <li>Revisiones periódicas de blindajes</li>
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
          <li>Dosimetría detallada (perfil, simetría, planicidad)</li>
          <li>Precisión mecánica (isocentro, colimadores)</li>
          <li>Sistemas de imagen</li>
        </ul>

        <p><strong>Anual:</strong></p>
        <ul>
          <li>Calibración absoluta de dosis</li>
          <li>Revisión exhaustiva de todos los sistemas</li>
          <li>Verificación de blindajes</li>
        </ul>
      </section>

      {/* ===================== EQUIPOS ESPECÍFICOS ===================== */}
      <section>
        <h2>Equipos de Oncología Radioterápica</h2>
        <p>El servicio cuenta con los siguientes equipos especializados:</p>
        
        <div className="zona-info-card zona-1" style={{ marginBottom: '1rem' }}>
          <h3>Acelerador Lineal (LINAC)</h3>
          <p>
            Equipo principal de radioterapia externa. Genera haces de alta energía con capacidad 
            para técnicas avanzadas como IMRT, VMAT e IGRT.
          </p>
          <button onClick={() => navigate('/zonas/acelerador-lineal')}>
            Ver información detallada →
          </button>
        </div>

        <div className="zona-info-card zona-2" style={{ marginBottom: '1rem' }}>
          <h3>CyberKnife</h3>
          <p>
            Sistema robótico de radiocirugía estereotáctica. Permite tratar tumores con precisión 
            submilimétrica, incluso en movimiento, sin marcos invasivos.
          </p>
          <button onClick={() => navigate('/zonas/ciberknife')}>
            Ver información detallada →
          </button>
        </div>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ManualOncologiaRadioterapica.pdf" target="_blank" rel="noopener noreferrer">📄 Manual General de Radioterapia</a></li>
          <li><a href="/docs/ProtocolosRadioterapia.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Tratamiento</a></li>
          <li><a href="/docs/SeguridadRadioterapia.pdf" target="_blank" rel="noopener noreferrer">📄 Seguridad en Radioterapia</a></li>
          <li><a href="/docs/ControlCalidadRadioterapia.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Calidad</a></li>
          <li><a href="/docs/EfectosSecundariosRadioterapia.pdf" target="_blank" rel="noopener noreferrer">📄 Manejo de Efectos Secundarios</a></li>
        </ul>
      </section>
    </div>
  );
};

export default OncologiaRadioterapica;
