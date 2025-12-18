import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const UnidadGamma = () => {
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

      <h1>Unidad Gamma</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso ultra-restringido</strong>
              Solo personal específicamente autorizado y entrenado. Máxima seguridad.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Fuentes radiactivas permanentes</strong>
              192 fuentes de Cobalto-60 siempre activas. Blindaje masivo obligatorio.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🎯">
            <div>
              <strong>Precisión submilimétrica</strong>
              No mover ni tocar equipos. Cualquier alteración puede afectar tratamientos.
            </div>
          </li>
          <li className="alerta-info" data-icon="🧠">
            <div>
              <strong>Tratamiento cerebral exclusivo</strong>
              Especializado en lesiones intracraneales. Procedimientos altamente especializados.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Emergencias</strong>
              Seguir estrictamente las instrucciones del técnico responsable. No intervenir en sistemas.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          La Unidad Gamma es un servicio ultra-especializado de neurocirugía funcional y 
          radiocirugía que utiliza el Gamma Knife, el sistema de referencia mundial para 
          tratamiento de lesiones intracraneales. Desarrollado específicamente para el cerebro, 
          permite tratar tumores y malformaciones con precisión submilimétrica en una sola sesión 
          ambulatoria, sin incisiones quirúrgicas.
        </p>

        <h3>Gamma Knife: El estándar oro</h3>
        <p>
          Gamma Knife es el único sistema diseñado exclusivamente para radiocirugía cerebral:
        </p>
        <ul>
          <li><strong>192 fuentes de Cobalto-60:</strong> Convergen en un punto focal con precisión de 0.15-0.3 mm</li>
          <li><strong>Principio de convergencia:</strong> Cada haz individual es inofensivo, pero la suma en el isocentro es letal para el tejido objetivo</li>
          <li><strong>Sin incisiones:</strong> Procedimiento completamente no invasivo</li>
          <li><strong>Sesión única:</strong> Tratamiento completo en un día, ambulatorio</li>
          <li><strong>Blindaje masivo:</strong> Más de 20 toneladas de plomo y acero</li>
        </ul>

        <h3>Aplicaciones clínicas</h3>
        <p><strong>Tumores cerebrales:</strong></p>
        <ul>
          <li><strong>Metástasis cerebrales:</strong> 1-15 lesiones, control local mayor del 90%</li>
          <li><strong>Schwannomas vestibulares:</strong> Neurinomas del acústico, control mayor del 95%</li>
          <li><strong>Meningiomas:</strong> Especialmente en localizaciones quirúrgicamente difíciles</li>
          <li><strong>Adenomas hipofisarios:</strong> Tumores de la hipófisis</li>
          <li><strong>Tumores gliales de bajo grado:</strong> Astrocitomas, oligodendrogliomas</li>
        </ul>

        <p><strong>Malformaciones vasculares:</strong></p>
        <ul>
          <li><strong>MAVs (Malformaciones arteriovenosas):</strong> Obliteración en 70-85% a 3 años</li>
          <li><strong>Cavernomas:</strong> Con hemorragias recurrentes</li>
        </ul>

        <p><strong>Trastornos funcionales:</strong></p>
        <ul>
          <li><strong>Neuralgia del trigémino:</strong> Dolor facial refractario, alivio en 75-90%</li>
          <li><strong>Epilepsia:</strong> Con foco bien definido</li>
        </ul>

        <h3>Procedimiento de tratamiento</h3>
        <p><strong>1. Consulta y planificación inicial:</strong></p>
        <ul>
          <li>Evaluación por neurocirujano y oncólogo radioterápico</li>
          <li>Revisión de imágenes diagnósticas (RM, angiografía)</li>
          <li>Decisión terapéutica en comité multidisciplinar</li>
          <li>Información detallada al paciente</li>
        </ul>

        <p><strong>2. Día del tratamiento - Colocación del marco:</strong></p>
        <ul>
          <li>Anestesia local en 4 puntos del cráneo</li>
          <li>Fijación del marco estereotáctico con tornillos</li>
          <li>Alternativa: máscara termoplástica (en modelos Icon)</li>
          <li>Incomodidad mínima durante el procedimiento</li>
        </ul>

        <p><strong>3. Adquisición de imágenes:</strong></p>
        <ul>
          <li>RM de alta resolución con sistema de localización</li>
          <li>TAC o angiografía si necesario</li>
          <li>Imágenes con referencias del marco para cálculo preciso</li>
        </ul>

        <p><strong>4. Planificación dosimétrica:</strong></p>
        <ul>
          <li>Delimitación precisa del tumor y estructuras críticas</li>
          <li>Definición de uno o múltiples isocentros (hasta más de 30)</li>
          <li>Selección de colimadores (4, 8, 16 mm)</li>
          <li>Optimización de cobertura del tumor y protección de tejidos sanos</li>
          <li>Verificación exhaustiva del plan</li>
        </ul>

        <p><strong>5. Tratamiento:</strong></p>
        <ul>
          <li>Duración: 15 minutos a 4 horas según complejidad</li>
          <li>Paciente despierto, sin dolor</li>
          <li>Comunicación continua con el equipo</li>
          <li>Irradiación automática secuencial</li>
          <li>Monitorización constante por video y audio</li>
        </ul>

        <p><strong>6. Post-tratamiento:</strong></p>
        <ul>
          <li>Retirada del marco (alivio inmediato)</li>
          <li>Observación 2-4 horas</li>
          <li>Alta ambulatoria el mismo día</li>
          <li>Actividades normales al día siguiente</li>
          <li>Seguimiento con imágenes periódicas</li>
        </ul>

        <h3>Dosis típicas según patología</h3>
        <ul>
          <li><strong>Metástasis cerebrales:</strong> 18-24 Gy dosis única</li>
          <li><strong>Schwannomas vestibulares:</strong> 12-13 Gy (preserva audición en 50-70%)</li>
          <li><strong>Meningiomas:</strong> 12-16 Gy</li>
          <li><strong>MAVs:</strong> 18-25 Gy (según tamaño y localización)</li>
          <li><strong>Neuralgia del trigémino:</strong> 70-90 Gy en el nervio</li>
        </ul>

        <h3>Ventajas del Gamma Knife</h3>
        <ul>
          <li><strong>Precisión sin igual:</strong> 0.15-0.3 mm de exactitud</li>
          <li><strong>Gradiente de dosis extremo:</strong> Caída muy rápida fuera del tumor</li>
          <li><strong>Tratamiento ambulatorio:</strong> Alta el mismo día</li>
          <li><strong>No invasivo:</strong> Sin incisiones ni anestesia general</li>
          <li><strong>Riesgo mínimo:</strong> Morbimortalidad menor del 1%</li>
          <li><strong>Aplicable a todas las edades:</strong> Desde niños hasta ancianos</li>
          <li><strong>Resultados probados:</strong> Más de 60 años de experiencia mundial</li>
        </ul>

        <h3>Efectos secundarios</h3>
        <p><strong>Inmediatos (día del tratamiento):</strong></p>
        <ul>
          <li>Molestias leves por el marco (resuelve al retirarlo)</li>
          <li>Cefalea leve (común, responde bien a analgésicos)</li>
          <li>Náuseas ocasionales</li>
        </ul>

        <p><strong>Agudos (días a semanas):</strong></p>
        <ul>
          <li>Fatiga transitoria</li>
          <li>Cefalea intermitente</li>
          <li>Generalmente muy bien tolerado</li>
        </ul>

        <p><strong>Tardíos (meses):</strong></p>
        <ul>
          <li>Edema perilesional (10-30%, tratable con corticoides)</li>
          <li>Radionecrosis (5-10%, a veces requiere tratamiento)</li>
          <li>Déficits neurológicos específicos (menos del 5%, depende de localización)</li>
        </ul>

        <h3>Resultados clínicos</h3>
        <ul>
          <li><strong>Metástasis:</strong> Control local 85-95% a 1 año</li>
          <li><strong>Schwannomas:</strong> Control tumoral 95%, preservación auditiva 50-70%</li>
          <li><strong>Meningiomas:</strong> Control 90-95% a 5 años</li>
          <li><strong>MAVs:</strong> Obliteración completa 70-85% a 3 años</li>
          <li><strong>Neuralgia trigémino:</strong> Alivio del dolor 75-90%</li>
        </ul>

        <h3>Protección radiológica</h3>
        <ul>
          <li><strong>192 fuentes de Co-60:</strong> Siempre activas, actividad total muy alta</li>
          <li><strong>Blindaje extremo:</strong> Más de 1 metro de hormigón + múltiples capas de plomo</li>
          <li><strong>Fuentes retraídas:</strong> Cuando no se usa, fuentes en posición blindada</li>
          <li><strong>Sistema fail-safe:</strong> Automático, impide exposiciones accidentales</li>
          <li><strong>Exposición del personal:</strong> Menor de 1 mSv/año (muy por debajo de límites)</li>
        </ul>

        <h3>Equipo multidisciplinar</h3>
        <ul>
          <li><strong>Neurocirujanos:</strong> Colocación de marco, indicación quirúrgica</li>
          <li><strong>Oncólogos radioterápicos:</strong> Planificación dosimétrica, seguimiento</li>
          <li><strong>Neurorradiólogos:</strong> Interpretación de imágenes, delimitación</li>
          <li><strong>Radiofísicos médicos:</strong> Planificación especializada, control de calidad</li>
          <li><strong>Técnicos Gamma Knife:</strong> Formación específica en operación del sistema</li>
          <li><strong>Personal de enfermería:</strong> Preparación, monitorización, cuidados post-tratamiento</li>
        </ul>

        <h3>Control de calidad</h3>
        <ul>
          <li><strong>Diario:</strong> Verificación de sistemas de seguridad</li>
          <li><strong>Mensual:</strong> Dosimetría de verificación, precisión mecánica</li>
          <li><strong>Anual:</strong> Calibración completa, verificación de blindajes</li>
          <li><strong>Cada recambio de fuentes:</strong> Calibración absoluta (cada 5-7 años)</li>
        </ul>

        <h3>Consideraciones especiales</h3>
        <ul>
          <li><strong>Contraindicaciones:</strong> Muy pocas (embarazo, imposibilidad de permanecer inmóvil)</li>
          <li><strong>Alternativas:</strong> Cirugía convencional, LINAC con radiocirugía, observación</li>
          <li><strong>Limitaciones de tamaño:</strong> Mejor para lesiones menores de 3-3.5 cm</li>
          <li><strong>Localización:</strong> Exclusivamente intracraneal</li>
        </ul>

        <h3>Innovaciones</h3>
        <ul>
          <li><strong>Gamma Knife Icon:</strong> Permite fraccionamiento con máscara (sin marco)</li>
          <li><strong>Integración con RM:</strong> Mejor delimitación de tumores</li>
          <li><strong>Planificación automatizada:</strong> Inteligencia artificial para optimización</li>
        </ul>
      </section>

      {/* ===================== EQUIPO ESPECÍFICO ===================== */}
      <section>
        <h2>Equipo de la Unidad Gamma</h2>
        
        <div className="zona-info-card zona-4" style={{ marginBottom: '1rem' }}>
          <h3>Gamma Knife</h3>
          <p>
            Sistema especializado de radiocirugía cerebral con 192 fuentes de Cobalto-60. 
            Precisión submilimétrica para tratamiento de lesiones intracraneales en sesión única.
          </p>
          <button onClick={() => navigate('/zonas/gammaknife')}>
            Ver información detallada →
          </button>
        </div>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ManualGammaKnife.pdf" target="_blank" rel="noopener noreferrer">📄 Manual de Gamma Knife</a></li>
          <li><a href="/docs/ProtocolosGammaKnife.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Tratamiento</a></li>
          <li><a href="/docs/RadiocirugiaCerebral.pdf" target="_blank" rel="noopener noreferrer">📄 Radiocirugía Cerebral</a></li>
          <li><a href="/docs/SeguridadGammaKnife.pdf" target="_blank" rel="noopener noreferrer">📄 Seguridad y Protección Radiológica</a></li>
          <li><a href="/docs/PlanificacionGammaPlan.pdf" target="_blank" rel="noopener noreferrer">📄 Planificación con GammaPlan</a></li>
        </ul>
      </section>
    </div>
  );
};

export default UnidadGamma;
