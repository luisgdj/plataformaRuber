import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

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
          La Medicina Nuclear utiliza radiofármacos para el diagnóstico y tratamiento de enfermedades.
          A diferencia de otras técnicas de imagen que proporcionan información anatómica, la medicina nuclear 
          ofrece información funcional y metabólica, permitiendo detectar enfermedades en etapas muy tempranas.
        </p>
        <p>
          La medicina nuclear tiene amplias aplicaciones diagnósticas y terapéuticas.
          Se aplica principalmente en oncología, cardiología, neurología, endocrinología, nefrourología y aparato locomotor.
        </p>
        <p>
          Consideraciones importantes para pacientes:
          <ul>
            <li>Verificar ausencia de embarazo en mujeres en edad fértil</li>
            <li>Suspender lactancia según radiofármaco administrado</li>
            <li>Hidratación adecuada para eliminación rápida del trazador</li>
            <li>Precauciones post-exploración (limitar contacto con embarazadas y niños)</li>
            <li>Preparaciones específicas según tipo de estudio (ayuno, suspensión de medicación)</li>
          </ul>
        </p>
        <p>
          <h3>Protección radiológica</h3>
          La medicina nuclear requiere estrictos protocolos de protección:
          <ul>
            <li><strong>Principio ALARA:</strong> Mantener exposición tan baja como razonablemente alcanzable</li>
            <li><strong>Tiempo:</strong> Minimizar tiempo de exposición a fuentes radiactivas</li>
            <li><strong>Distancia:</strong> Maximizar distancia de las fuentes</li>
            <li><strong>Blindaje:</strong> Uso de mamparas plomadas, jeringas blindadas, contenedores</li>
            <li><strong>Dosimetría:</strong> Control continuo de dosis recibida por el personal</li>
            <li><strong>Gestión de residuos:</strong> Protocolo específico para materiales contaminados</li>
          </ul>
        </p>
        <p>
          <h3>Personal especializado</h3>
          <ul>
            <li><strong>Médicos nucleares:</strong> Especialistas en medicina nuclear, prescripción e interpretación</li>
            <li><strong>Técnicos en medicina nuclear:</strong> Administración de radiofármacos, adquisición de imágenes</li>
            <li><strong>Radiofarmacéuticos:</strong> Preparación y control de calidad de radiofármacos</li>
            <li><strong>Radiofísicos:</strong> Protección radiológica, dosimetría, control de calidad</li>
            <li><strong>Personal de enfermería:</strong> Atención al paciente, monitorización</li>
          </ul>
        </p>
        <p>
          <h3>Control de calidad</h3>
          <ul>
            <li><strong>Diario:</strong> Verificación de equipos, uniformidad de detectores</li>
            <li><strong>Semanal:</strong> Calibración de activímetros, resolución espacial</li>
            <li><strong>Mensual:</strong> Sensibilidad del sistema, linealidad</li>
            <li><strong>Anual:</strong> Evaluación completa, dosimetría de área</li>
            <li><strong>Radiofármacos:</strong> Control de calidad radioquímico antes de administración</li>
          </ul>
        </p>
      </section>

      {/* ===================== ZONAS ESPECÍFICAS ===================== */}
      <section>
        <h2>Instalaciones en Medicina Nuclear</h2>
        <p>El área de Medicina Nuclear incluye diferentes sistemas de imagen molecular:</p>
        
        <div className="zona-info-card zona-1" style={{ marginBottom: '1rem' }}>
          <h3>Tomografía Computarizada por Emisión de Fotón Único (SPECT-TAC)</h3>
          <p>
            Sistema híbrido que combina imagen funcional (SPECT) con imagen anatómica (TAC). <br />
            Proporciona localización precisa y corrección de atenuación.
          </p>
        </div>

        <div className="zona-info-card zona-2" style={{ marginBottom: '1rem' }}>
          <h3>Tomografía por Emisión de Positrones (PET-TAC)</h3>
          <p>
            La técnica más avanzada de imagen molecular. <br />
            Utiliza emisores de positrones para evaluación oncológica, cardiológica y neurológica de alta precisión.
          </p>
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
