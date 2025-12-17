import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const PETTAC = () => {
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

      <h1>Tomografía por Emisión de Positrones (PET-TAC)</h1> <br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona controlada de alta seguridad</strong>
              Manejo de radiofármacos emisores de positrones de corta vida media.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Radiación de alta energía</strong>
              Los positrones generan fotones de 511 keV. Requiere blindaje especial.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="💉">
            <div>
              <strong>Glucosa y diabetes</strong>
              Control estricto de glucemia antes de administrar FDG. Ayuno obligatorio.
            </div>
          </li>
          <li className="alerta-info" data-icon="🏃">
            <div>
              <strong>Tiempo crítico</strong>
              Los radiofármacos tienen vida media muy corta (F-18: 110 minutos).
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="⚠️">
            <div>
              <strong>Precauciones post-exploración</strong>
              El paciente emite radiación durante horas. Limitar contacto con embarazadas y niños.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          El PET-TAC es el sistema de imagen molecular más avanzado actualmente disponible. Combina 
          la Tomografía por Emisión de Positrones (PET), que visualiza procesos metabólicos a nivel 
          celular, con la Tomografía Computarizada (TAC), que proporciona información anatómica detallada. 
          Es especialmente valioso en oncología, cardiología y neurología.
        </p>

        <h3>Principio físico del PET</h3>
        <p>
          Los radiofármacos PET emiten positrones (antipartículas del electrón). Cuando un positrón 
          choca con un electrón del tejido, ambos se aniquilan generando dos fotones de 511 keV que 
          viajan en direcciones opuestas (180°). El escáner PET detecta estas emisiones coincidentes, 
          permitiendo reconstruir con precisión el origen de la desintegración.
        </p>

        <h3>Ventajas del PET-TAC</h3>
        <ul>
          <li><strong>Detección precoz:</strong> Identifica alteraciones metabólicas antes que cambios anatómicos</li>
          <li><strong>Estadificación oncológica:</strong> Evaluación completa de extensión tumoral</li>
          <li><strong>Caracterización de lesiones:</strong> Diferencia tumores benignos de malignos</li>
          <li><strong>Evaluación de respuesta:</strong> Monitorización de eficacia de tratamiento</li>
          <li><strong>Detección de recidivas:</strong> Más sensible que técnicas convencionales</li>
          <li><strong>Guía para biopsia:</strong> Identifica las áreas más activas metabólicamente</li>
        </ul>

        <h3>Radiofármacos PET</h3>
        <ul>
          <li><strong>F-18 FDG (Fluorodesoxiglucosa):</strong> Análogo de glucosa, el más utilizado (oncología, cardiología, neurología)</li>
          <li><strong>F-18 Flúor:</strong> Metástasis óseas (PET óseo)</li>
          <li><strong>F-18 DOPA:</strong> Tumores neuroendocrinos, enfermedad de Parkinson</li>
          <li><strong>Ga-68 DOTATATE/DOTATOC:</strong> Tumores neuroendocrinos con receptores de somatostatina</li>
          <li><strong>Ga-68 PSMA:</strong> Cáncer de próstata</li>
          <li><strong>C-11 Colina:</strong> Cáncer de próstata, carcinoma hepatocelular</li>
          <li><strong>C-11 Metionina:</strong> Tumores cerebrales</li>
        </ul>

        <h3>Aplicaciones clínicas principales</h3>
        <p><strong>ONCOLOGÍA (80% de los estudios):</strong></p>
        <ul>
          <li>Estadificación inicial de cánceres (pulmón, linfoma, melanoma, colorrectal)</li>
          <li>Detección de metástasis ocultas</li>
          <li>Evaluación de respuesta a quimioterapia/radioterapia</li>
          <li>Diferenciación entre fibrosis/necrosis y tumor viable</li>
          <li>Detección de recidiva tumoral</li>
          <li>Planificación de radioterapia</li>
        </ul>

        <p><strong>CARDIOLOGÍA:</strong></p>
        <ul>
          <li>Evaluación de viabilidad miocárdica antes de revascularización</li>
          <li>Diferenciación entre miocardio hibernado y tejido necrótico</li>
          <li>Diagnóstico de sarcoidosis cardíaca</li>
        </ul>

        <p><strong>NEUROLOGÍA:</strong></p>
        <ul>
          <li>Evaluación de demencias (Alzheimer, demencia frontotemporal)</li>
          <li>Localización de focos epileptógenos antes de cirugía</li>
          <li>Diferenciación entre radionecrosis y recidiva tumoral cerebral</li>
          <li>Enfermedad de Parkinson y otros trastornos del movimiento</li>
        </ul>

        <h3>Preparación específica del paciente</h3>
        <p>
          Para estudios con FDG (los más comunes):
        </p>
        <ul>
          <li><strong>Ayuno:</strong> Mínimo 6 horas (preferible 12 horas)</li>
          <li><strong>Hidratación:</strong> Beber abundante agua antes y después</li>
          <li><strong>Glucemia:</strong> Debe estar por debajo de 140 mg/dL (idealmente menor que120 mg/dL)</li>
          <li><strong>Medicación para diabéticos:</strong> Suspender metformina, ajustar insulina</li>
          <li><strong>Ejercicio físico:</strong> Evitar 24 horas antes (captación muscular)</li>
          <li><strong>Ambiente relajado:</strong> Reposo en sala tranquila y cálida tras inyección</li>
          <li><strong>Medicamentos:</strong> Informar sobre quimioterapia reciente, factores de crecimiento</li>
        </ul>

        <h3>Protocolo de adquisición PET-TAC</h3>
        <p>
          Secuencia típica del procedimiento:
        </p>
        <ul>
          <li><strong>Verificación:</strong> Identidad, historia clínica, glucemia, preparación</li>
          <li><strong>Canalización venosa:</strong> Preferible en brazo no dominante</li>
          <li><strong>Administración FDG:</strong> Dosis según peso (370-740 MBq), en jeringas blindadas</li>
          <li><strong>Periodo de captación:</strong> 60-90 minutos en reposo, habitación oscura y silenciosa</li>
          <li><strong>Vaciado vesical:</strong> Justo antes de la exploración</li>
          <li><strong>Posicionamiento:</strong> Decúbito supino, brazos elevados si es posible</li>
          <li><strong>Scout view:</strong> Topograma para planificar el campo de visión</li>
          <li><strong>TAC:</strong> Baja dosis para corrección de atenuación o diagnóstico completo</li>
          <li><strong>PET:</strong> 2-5 minutos por posición de camilla (7-9 posiciones típicamente)</li>
          <li><strong>Reconstrucción:</strong> Procesamiento y fusión automática de imágenes</li>
        </ul>

        <h3>Interpretación de imágenes PET-TAC</h3>
        <p>
          El médico nuclear debe evaluar varios aspectos:
        </p>
        <ul>
          <li><strong>Captación fisiológica:</strong> Cerebro, corazón, hígado, riñones, vejiga, tracto GI</li>
          <li><strong>Captación patológica:</strong> Lesiones con metabolismo aumentado</li>
          <li><strong>SUV (Standardized Uptake Value):</strong> Medida semicuantitativa de captación</li>
          <li><strong>Correlación anatómica:</strong> Localización precisa en imágenes TAC</li>
          <li><strong>Distribución del trazador:</strong> Patrón global de biodistribución</li>
        </ul>

        <h3>Valores SUV y su interpretación</h3>
        <ul>
          <li><strong>SUV menos de 2.5:</strong> Generalmente benigno (pero depende del contexto)</li>
          <li><strong>SUV 2.5-5:</strong> Zona gris, requiere evaluación cuidadosa</li>
          <li><strong>SUV mas de 5:</strong> Sospecha alta de malignidad</li>
          <li><strong>Nota:</strong> SUV no es diagnóstico por sí solo, debe interpretarse en contexto clínico</li>
        </ul>

        <h3>Causas de falsos positivos</h3>
        <ul>
          <li>Procesos inflamatorios e infecciosos activos</li>
          <li>Tejido de granulación post-quirúrgico (primeras 6 semanas)</li>
          <li>Radioterapia reciente (hasta 3-6 meses)</li>
          <li>Activación de médula ósea por factores de crecimiento</li>
          <li>Adenomas benignos con alta actividad metabólica</li>
          <li>Captación muscular por tensión, ejercicio reciente</li>
        </ul>

        <h3>Causas de falsos negativos</h3>
        <ul>
          <li>Tumores de bajo grado con metabolismo lento</li>
          <li>Hiperglucemia (compite con FDG por transportadores)</li>
          <li>Lesiones muy pequeñas (menos de 5-7 mm)</li>
          <li>Algunos tipos histológicos (carcinoma lobulillar de mama, adenocarcinoma mucinoso)</li>
          <li>Quimioterapia muy reciente (suprime metabolismo tumoral)</li>
        </ul>

        <h3>Protección radiológica en PET</h3>
        <p>
          Consideraciones especiales dada la alta energía:
        </p>
        <ul>
          <li><strong>Blindaje reforzado:</strong> Paredes con mayor espesor de plomo/hormigón</li>
          <li><strong>Jeringas blindadas específicas:</strong> Tungsteno para fotones de 511 keV</li>
          <li><strong>Sala de espera post-inyección:</strong> Área blindada para periodo de captación</li>
          <li><strong>Distancia del personal:</strong> Mantener mas de 2 metros cuando sea posible</li>
          <li><strong>Instrucciones al paciente:</strong> Evitar contacto próximo con embarazadas/niños por 12-24h</li>
          <li><strong>Gestión de residuos:</strong> Decaimiento en depósito blindado específico</li>
        </ul>

        <h3>Dosis de radiación</h3>
        <p>
          Dosis efectiva típica de un PET-TAC con FDG:
        </p>
        <ul>
          <li><strong>FDG (dosis estándar):</strong> ~7 mSv</li>
          <li><strong>TAC de baja dosis:</strong> ~5 mSv</li>
          <li><strong>TAC diagnóstico completo:</strong> ~15-25 mSv</li>
          <li><strong>Total:</strong> 12-32 mSv según protocolo TAC utilizado</li>
        </ul>

        <h3>Contraindicaciones relativas</h3>
        <ul>
          <li>Embarazo (solo si beneficio supera claramente el riesgo)</li>
          <li>Lactancia (suspender 12-24 horas según radiofármaco)</li>
          <li>Diabetes descompensada (glucemia por encima de 200 mg/dL)</li>
          <li>Claustrofobia severa</li>
          <li>Imposibilidad de permanecer inmóvil 20-30 minutos</li>
        </ul>

        <h3>Control de calidad PET-TAC</h3>
        <ul>
          <li><strong>Diario:</strong> Calibración de activímetro, verificación de coincidencias</li>
          <li><strong>Semanal:</strong> Phantom de uniformidad, sensibilidad</li>
          <li><strong>Trimestral:</strong> Resolución espacial, precisión cuantitativa (SUV)</li>
          <li><strong>Anual:</strong> Evaluación completa del sistema, revisión técnica</li>
          <li><strong>Verificación de fusión:</strong> Alineación geométrica PET-TAC</li>
        </ul>

        <h3>Artefactos específicos del PET</h3>
        <ul>
          <li><strong>Movimiento respiratorio:</strong> Borramiento de lesiones en bases pulmonares, hígado</li>
          <li><strong>Captación en grasa parda:</strong> Activación por frío, común en cuello y región interescapular</li>
          <li><strong>Extravasación del trazador:</strong> Captación intensa en sitio de inyección</li>
          <li><strong>Artefactos metálicos del TAC:</strong> Afectan corrección de atenuación</li>
        </ul>

        <h3>Roles del personal especializado</h3>
        <ul>
          <li><strong>Médicos nucleares PET:</strong> Formación adicional en imagen molecular oncológica</li>
          <li><strong>Técnicos PET-TAC:</strong> Entrenamiento específico en manejo de emisores de positrones</li>
          <li><strong>Radiofarmacéuticos:</strong> Síntesis y control de calidad de radiofármacos PET</li>
          <li><strong>Radiofísicos:</strong> Dosimetría, protección radiológica, control de calidad avanzado</li>
          <li><strong>Personal de enfermería:</strong> Manejo de pacientes oncológicos, efectos adversos</li>
        </ul>

        <h3>Futuro del PET</h3>
        <p>
          Avances tecnológicos en desarrollo:
        </p>
        <ul>
          <li><strong>PET digital:</strong> Mejor resolución temporal y espacial</li>
          <li><strong>PET de tiempo de vuelo (TOF):</strong> Mejora la relación señal/ruido</li>
          <li><strong>PET-RM:</strong> Combinación con resonancia magnética</li>
          <li><strong>Nuevos radiofármacos:</strong> Trazadores específicos para diferentes tipos tumorales</li>
          <li><strong>Radiofármacos teranósticos:</strong> Diagnóstico y tratamiento con el mismo compuesto</li>
        </ul>

        <h3>Consideraciones económicas</h3>
        <ul>
          <li>Tecnología de alto coste (equipo, ciclotón, radiofármacos)</li>
          <li>Requiere justificación clínica clara</li>
          <li>Coste-efectivo cuando cambia el manejo terapéutico</li>
          <li>Evita cirugías o tratamientos innecesarios</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloPETTAC.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos PET-TAC</a></li>
          <li><a href="/docs/InterpretacionPET.pdf" target="_blank" rel="noopener noreferrer">📄 Guía de Interpretación PET</a></li>
          <li><a href="/docs/ProteccionRadiologicaPET.pdf" target="_blank" rel="noopener noreferrer">📄 Protección Radiológica en PET</a></li>
          <li><a href="/docs/RadiofarmacosPET.pdf" target="_blank" rel="noopener noreferrer">📄 Radiofármacos PET</a></li>
        </ul>
      </section>
    </div>
  );
};

export default PETTAC;
