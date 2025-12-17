import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const GammaKnife = () => {
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

      <h1>Gamma Knife</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso extremadamente restringido</strong>
              Solo personal autorizado y paciente preparado. Zona de máxima seguridad.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Fuentes de Cobalto-60 permanentes</strong>
              192 fuentes radiactivas siempre activas. Blindaje masivo con múltiples capas.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🧠">
            <div>
              <strong>Precisión extrema requerida</strong>
              No mover equipos ni mobiliario. Cualquier cambio puede afectar alineación submilimétrica.
            </div>
          </li>
          <li className="alerta-info" data-icon="🔋">
            <div>
              <strong>Sistema mecánico/hidráulico</strong>
              Sin componentes electrónicos en área de tratamiento. Mantener distancia de fuentes cuando expuestas.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Emergencias</strong>
              Seguir instrucciones del técnico responsable. Nunca intentar intervenir en el sistema mecánico.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          Gamma Knife es el sistema de referencia mundial para radiocirugía intracraneal. Desarrollado 
          específicamente para tratamiento de lesiones cerebrales, utiliza 192 fuentes de Cobalto-60 
          que convergen con precisión submilimétrica en un punto focal, permitiendo tratar tumores y 
          malformaciones vasculares del cerebro en una sola sesión ambulatoria, sin incisiones quirúrgicas.
        </p>

        <h3>Principio fundamental</h3>
        <p>
          Gamma Knife se basa en el principio de "convergencia": múltiples haces de radiación gamma 
          de baja intensidad individual convergen en un punto focal común (isocentro). Cada haz por 
          separado es inofensivo para el tejido cerebral que atraviesa, pero en el punto donde todos 
          convergen, la dosis acumulada es lo suficientemente alta para destruir el tejido objetivo.
        </p>

        <h3>Componentes del sistema</h3>
        <ul>
          <li><strong>Unidad de radiación:</strong> Hemisferio con 192 fuentes de Co-60 distribuidas uniformemente</li>
          <li><strong>Sistema de blindaje:</strong> Múltiples capas de plomo y acero, peso total mayor de 20 toneladas</li>
          <li><strong>Colimadores:</strong> Helmets con 192 canales (4, 8, 16 mm según modelo) que focalizan los haces</li>
          <li><strong>Marco estereotáctico:</strong> Sistema rígido fijado al cráneo con 4 tornillos (o máscara en modelos recientes)</li>
          <li><strong>Sistema de posicionamiento:</strong> Coordenadas XYZ con precisión de 0.1 mm</li>
          <li><strong>Sistema de imagen:</strong> Integración con RM/TC para planificación</li>
        </ul>

        <h3>Indicaciones principales</h3>
        <p><strong>TUMORES:</strong></p>
        <ul>
          <li>Metástasis cerebrales (1-15 lesiones)</li>
          <li>Schwannomas vestibulares (neurinomas del acústico)</li>
          <li>Meningiomas en localizaciones difíciles</li>
          <li>Adenomas hipofisarios</li>
          <li>Tumores gliales de bajo grado</li>
        </ul>

        <p><strong>MALFORMACIONES VASCULARES:</strong></p>
        <ul>
          <li>MAVs (Malformaciones arteriovenosas)</li>
          <li>Cavernomas con hemorragias recurrentes</li>
        </ul>

        <p><strong>TRASTORNOS FUNCIONALES:</strong></p>
        <ul>
          <li>Neuralgia del trigémino refractaria</li>
          <li>Epilepsia con foco bien definido</li>
        </ul>

        <h3>Proceso de tratamiento</h3>
        <p><strong>1. Colocación del marco:</strong></p>
        <ul>
          <li>Anestesia local en 4 puntos</li>
          <li>Fijación con 4 tornillos al cráneo</li>
          <li>Alternativa: máscara termoplástica (Gamma Knife Icon)</li>
        </ul>

        <p><strong>2. Adquisición de imágenes:</strong></p>
        <ul>
          <li>RM de alta resolución con sistema de localización</li>
          <li>TAC o angiografía si necesario</li>
        </ul>

        <p><strong>3. Planificación dosimétrica:</strong></p>
        <ul>
          <li>Delimitación precisa del tumor y estructuras críticas</li>
          <li>Definición de isocentros (1 a mas de 30)</li>
          <li>Selección de colimador (4, 8, 16 mm)</li>
          <li>Optimización de cobertura y protección</li>
        </ul>

        <p><strong>4. Tratamiento:</strong></p>
        <ul>
          <li>Duración: 15 minutos a 4 horas</li>
          <li>Paciente despierto, sin dolor</li>
          <li>Monitorización continua</li>
          <li>Irradiación automática secuencial</li>
        </ul>

        <p><strong>5. Post-tratamiento:</strong></p>
        <ul>
          <li>Retirada del marco</li>
          <li>Alta ambulatoria (2-4 horas)</li>
          <li>Actividades normales al día siguiente</li>
        </ul>

        <h3>Dosis típicas</h3>
        <ul>
          <li><strong>Metástasis:</strong> 18-24 Gy dosis única</li>
          <li><strong>Schwannomas vestibulares:</strong> 12-13 Gy</li>
          <li><strong>Meningiomas:</strong> 12-16 Gy</li>
          <li><strong>MAVs:</strong> 18-25 Gy</li>
          <li><strong>Neuralgia del trigémino:</strong> 70-90 Gy</li>
        </ul>

        <h3>Ventajas</h3>
        <ul>
          <li>Precisión submilimétrica (0.15-0.3 mm)</li>
          <li>Gradiente de dosis extremadamente rápido</li>
          <li>Sesión única ambulatoria</li>
          <li>Sin incisiones quirúrgicas</li>
          <li>Riesgo mínimo (menor del 1% morbimortalidad)</li>
          <li>Aplicable en pacientes de cualquier edad</li>
        </ul>

        <h3>Protección radiológica</h3>
        <ul>
          <li>192 fuentes de Co-60 siempre activas</li>
          <li>Blindaje masivo (mas de 1 metro hormigón + plomo)</li>
          <li>Fuentes retraídas cuando no se usa</li>
          <li>Sistema fail-safe automático</li>
          <li>Exposición del personal menor a1 mSv/año</li>
        </ul>

        <h3>Efectos secundarios</h3>
        <p><strong>Agudos:</strong></p>
        <ul>
          <li>Cefalea leve (común)</li>
          <li>Náuseas ocasionales</li>
          <li>Fatiga</li>
        </ul>

        <p><strong>Tardíos:</strong></p>
        <ul>
          <li>Edema perilesional (10-30%)</li>
          <li>Radionecrosis (5-10%)</li>
          <li>Déficits específicos según localización (menos de 5%)</li>
        </ul>

        <h3>Resultados clínicos</h3>
        <ul>
          <li><strong>Metástasis:</strong> Control local 85-95% a 1 año</li>
          <li><strong>Schwannomas:</strong> Control 95%, preservación auditiva 50-70%</li>
          <li><strong>Meningiomas:</strong> Control 90-95% a 5 años</li>
          <li><strong>MAVs:</strong> Obliteración 70-85% a 3 años</li>
          <li><strong>Neuralgia trigémino:</strong> Alivio 75-90%</li>
        </ul>

        <h3>Roles del equipo</h3>
        <ul>
          <li><strong>Neurocirujanos:</strong> Colocación de marco, indicación</li>
          <li><strong>Oncólogos radioterápicos:</strong> Planificación, seguimiento</li>
          <li><strong>Neurorradiólogos:</strong> Interpretación de imágenes</li>
          <li><strong>Radiofísicos:</strong> Planificación especializada, control de calidad</li>
          <li><strong>Técnicos Gamma Knife:</strong> Operación del sistema</li>
          <li><strong>Enfermería:</strong> Preparación y monitorización</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloGammaKnife.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos Gamma Knife</a></li>
          <li><a href="/docs/RadiocirugiaCerebral.pdf" target="_blank" rel="noopener noreferrer">📄 Radiocirugía Cerebral</a></li>
          <li><a href="/docs/SeguridadGammaKnife.pdf" target="_blank" rel="noopener noreferrer">📄 Seguridad y Protección Radiológica</a></li>
          <li><a href="/docs/PlanificacionGammaPlan.pdf" target="_blank" rel="noopener noreferrer">📄 Planificación con GammaPlan</a></li>
        </ul>
      </section>
    </div>
  );
};

export default GammaKnife;
