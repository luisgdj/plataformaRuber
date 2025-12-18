import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const MedicinaNuclear = () => {
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

      <h1>Medicina Nuclear</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona controlada de radiación</strong>
              Acceso restringido. Manejo de radiofármacos y equipos de imagen molecular.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Material radiactivo</strong>
              Manipulación de radiofármacos emisores gamma y positrones. Protección obligatoria.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="📏">
            <div>
              <strong>Dosimetría personal</strong>
              Todo el personal debe llevar dosímetro actualizado y seguir principios ALARA.
            </div>
          </li>
          <li className="alerta-info" data-icon="⏱️">
            <div>
              <strong>Vida media de radiofármacos</strong>
              Control estricto de tiempos. Algunos trazadores tienen vida media muy corta.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Protocolo de derrames</strong>
              Conocer ubicación del kit de emergencia y procedimientos de actuación.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          La Medicina Nuclear es una especialidad médica que utiliza pequeñas cantidades de 
          material radiactivo (radiofármacos) para diagnosticar y tratar enfermedades. A diferencia 
          de otras técnicas de imagen que proporcionan información anatómica, la medicina nuclear 
          ofrece información funcional y metabólica, permitiendo detectar enfermedades en etapas 
          muy tempranas.
        </p>

        <h3>Equipos principales</h3>
        <p>
          El área de Medicina Nuclear incluye diferentes sistemas de imagen molecular:
        </p>
        <ul>
          <li><strong>Gamma Cámara:</strong> Detecta radiación gamma de radiofármacos convencionales (Tc-99m, I-123, etc.)</li>
          <li><strong>SPECT-TAC:</strong> Tomografía por emisión de fotón único combinada con TAC para localización anatómica precisa</li>
          <li><strong>PET-TAC:</strong> Tomografía por emisión de positrones, la técnica más avanzada de imagen molecular</li>
        </ul>

        <h3>Aplicaciones clínicas</h3>
        <p>
          La medicina nuclear tiene amplias aplicaciones diagnósticas y terapéuticas:
        </p>
        <ul>
          <li><strong>Oncología:</strong> Estadificación tumoral, detección de metástasis, evaluación de respuesta al tratamiento</li>
          <li><strong>Cardiología:</strong> Perfusión miocárdica, viabilidad cardíaca</li>
          <li><strong>Neurología:</strong> Perfusión cerebral, demencias, epilepsia</li>
          <li><strong>Endocrinología:</strong> Función tiroidea, detección de tumores neuroendocrinos</li>
          <li><strong>Nefrourología:</strong> Función renal, obstrucciones</li>
          <li><strong>Aparato locomotor:</strong> Gammagrafía ósea para metástasis, infecciones</li>
        </ul>

        <h3>Protección radiológica</h3>
        <p>
          La medicina nuclear requiere estrictos protocolos de protección:
        </p>
        <ul>
          <li><strong>Principio ALARA:</strong> Mantener exposición tan baja como razonablemente alcanzable</li>
          <li><strong>Tiempo:</strong> Minimizar tiempo de exposición a fuentes radiactivas</li>
          <li><strong>Distancia:</strong> Maximizar distancia de las fuentes</li>
          <li><strong>Blindaje:</strong> Uso de mamparas plomadas, jeringas blindadas, contenedores</li>
          <li><strong>Dosimetría:</strong> Control continuo de dosis recibida por el personal</li>
          <li><strong>Gestión de residuos:</strong> Protocolo específico para materiales contaminados</li>
        </ul>

        <h3>Personal especializado</h3>
        <ul>
          <li><strong>Médicos nucleares:</strong> Especialistas en medicina nuclear, prescripción e interpretación</li>
          <li><strong>Técnicos en medicina nuclear:</strong> Administración de radiofármacos, adquisición de imágenes</li>
          <li><strong>Radiofarmacéuticos:</strong> Preparación y control de calidad de radiofármacos</li>
          <li><strong>Radiofísicos:</strong> Protección radiológica, dosimetría, control de calidad</li>
          <li><strong>Personal de enfermería:</strong> Atención al paciente, monitorización</li>
        </ul>

        <h3>Seguridad del paciente</h3>
        <p>
          Consideraciones importantes para pacientes:
        </p>
        <ul>
          <li>Verificar ausencia de embarazo en mujeres en edad fértil</li>
          <li>Suspender lactancia según radiofármaco administrado</li>
          <li>Hidratación adecuada para eliminación rápida del trazador</li>
          <li>Precauciones post-exploración (limitar contacto con embarazadas y niños)</li>
          <li>Preparaciones específicas según tipo de estudio (ayuno, suspensión de medicación)</li>
        </ul>

        <h3>Instalaciones de medicina nuclear</h3>
        <p>
          El área debe cumplir requisitos específicos:
        </p>
        <ul>
          <li><strong>Zona controlada:</strong> Acceso restringido y señalizado</li>
          <li><strong>Blindaje adecuado:</strong> Paredes, puertas y ventanas con protección plomada</li>
          <li><strong>Laboratorio caliente:</strong> Área específica para manipulación de radiofármacos</li>
          <li><strong>Salas de espera post-inyección:</strong> Área blindada para periodo de captación</li>
          <li><strong>Monitorización ambiental:</strong> Detectores de radiación, control de contaminación</li>
          <li><strong>Sistema de gestión de residuos:</strong> Almacenamiento para decaimiento</li>
        </ul>

        <h3>Control de calidad</h3>
        <ul>
          <li><strong>Diario:</strong> Verificación de equipos, uniformidad de detectores</li>
          <li><strong>Semanal:</strong> Calibración de activímetros, resolución espacial</li>
          <li><strong>Mensual:</strong> Sensibilidad del sistema, linealidad</li>
          <li><strong>Anual:</strong> Evaluación completa, dosimetría de área</li>
          <li><strong>Radiofármacos:</strong> Control de calidad radioquímico antes de administración</li>
        </ul>
      </section>

      {/* ===================== ZONAS ESPECÍFICAS ===================== */}
      <section>
        <h2>Zonas específicas de Medicina Nuclear</h2>
        <p>El área de Medicina Nuclear incluye las siguientes zonas especializadas:</p>
        
        <div className="zona-info-card zona-1" style={{ marginBottom: '1rem' }}>
          <h3>Gamma Cámara</h3>
          <p>
            Sistema de imagen planar y tomográfica (SPECT) para estudios con radiofármacos 
            convencionales. Ideal para gammagrafías óseas, tiroideas, renales y cardíacas.
          </p>
          <button onClick={() => navigate('/zonas/gamma-camara')}>
            Ver información detallada →
          </button>
        </div>

        <div className="zona-info-card zona-2" style={{ marginBottom: '1rem' }}>
          <h3>SPECT-TAC</h3>
          <p>
            Sistema híbrido que combina imagen funcional (SPECT) con imagen anatómica (TAC). 
            Proporciona localización precisa y corrección de atenuación.
          </p>
          <button onClick={() => navigate('/zonas/spect-tac')}>
            Ver información detallada →
          </button>
        </div>

        <div className="zona-info-card zona-3" style={{ marginBottom: '1rem' }}>
          <h3>PET-TAC</h3>
          <p>
            La técnica más avanzada de imagen molecular. Utiliza emisores de positrones 
            para evaluación oncológica, cardiológica y neurológica de alta precisión.
          </p>
          <button onClick={() => navigate('/zonas/pet-tac')}>
            Ver información detallada →
          </button>
        </div>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ManualMedicinaNuclear.pdf" target="_blank" rel="noopener noreferrer">📄 Manual General de Medicina Nuclear</a></li>
          <li><a href="/docs/ProteccionRadiologicaMN.pdf" target="_blank" rel="noopener noreferrer">📄 Protección Radiológica</a></li>
          <li><a href="/docs/ProtocolosRadiofarmacos.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Radiofármacos</a></li>
          <li><a href="/docs/ManejoDerramesRadiactivos.pdf" target="_blank" rel="noopener noreferrer">📄 Manejo de Derrames Radiactivos</a></li>
          <li><a href="/docs/GestionResiduosRadiactivos.pdf" target="_blank" rel="noopener noreferrer">📄 Gestión de Residuos Radiactivos</a></li>
        </ul>
      </section>
    </div>
  );
};

export default MedicinaNuclear;
