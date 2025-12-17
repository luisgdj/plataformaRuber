import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const Ecografia = () => {
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

      <h1>Ecografía</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-info" data-icon="✅">
            <div>
              <strong>Sin radiación ionizante</strong>
              Técnica segura que no utiliza rayos X ni radiación, ideal para embarazadas y niños.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🧴">
            <div>
              <strong>Uso de gel conductor</strong>
              Aplicar gel de ultrasonidos para garantizar buen contacto entre transductor y piel.
            </div>
          </li>
          <li className="alerta-info" data-icon="🧼">
            <div>
              <strong>Higiene del transductor</strong>
              Limpiar y desinfectar el transductor entre pacientes según protocolo.
            </div>
          </li>
          <li className="alerta-restringido" data-icon="📋">
            <div>
              <strong>Privacidad del paciente</strong>
              Respetar la intimidad durante exploraciones ginecológicas y obstétricas.
            </div>
          </li>
          <li className="alerta-info" data-icon="🩺">
            <div>
              <strong>Preparación específica</strong>
              Algunos estudios requieren vejiga llena o ayuno previo.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          La ecografía o ultrasonografía es una técnica de imagen no invasiva que utiliza ondas 
          sonoras de alta frecuencia (ultrasonidos) para generar imágenes en tiempo real de 
          estructuras internas del cuerpo. Es una de las técnicas más seguras y versátiles 
          de la medicina moderna.
        </p>

        <h3>Funcionamiento básico</h3>
        <p>
          Un transductor (sonda) emite ondas de ultrasonido que penetran en el cuerpo. Cuando 
          estas ondas encuentran diferentes tejidos, parte de la energía se refleja de vuelta 
          al transductor (eco). El equipo procesa estos ecos y los convierte en imágenes en 
          tiempo real que muestran la anatomía interna.
        </p>

        <h3>Ventajas de la ecografía</h3>
        <ul>
          <li><strong>Sin radiación ionizante:</strong> Completamente segura para embarazadas y niños</li>
          <li><strong>Tiempo real:</strong> Permite visualizar movimientos (latido cardíaco, flujo sanguíneo)</li>
          <li><strong>Portátil:</strong> Equipos disponibles desde dispositivos de mano hasta sistemas completos</li>
          <li><strong>No invasiva:</strong> No requiere preparaciones complejas en la mayoría de casos</li>
          <li><strong>Coste-efectiva:</strong> Menor coste comparado con TAC o RM</li>
          <li><strong>Guía de procedimientos:</strong> Útil para biopsias y punciones</li>
        </ul>

        <h3>Aplicaciones clínicas principales</h3>
        <ul>
          <li><strong>Ecografía obstétrica:</strong> Seguimiento del embarazo, evaluación fetal</li>
          <li><strong>Ecografía abdominal:</strong> Hígado, vesícula, páncreas, riñones, bazo</li>
          <li><strong>Ecografía pélvica:</strong> Útero, ovarios, próstata, vejiga</li>
          <li><strong>Ecografía tiroidea:</strong> Evaluación de nódulos tiroideos</li>
          <li><strong>Ecocardiografía:</strong> Estudio del corazón y válvulas cardíacas</li>
          <li><strong>Ecografía musculoesquelética:</strong> Tendones, músculos, articulaciones</li>
          <li><strong>Ecografía vascular:</strong> Doppler para evaluar flujo sanguíneo</li>
        </ul>

        <h3>Tipos de ecografía</h3>
        <p>
          Existen diferentes modalidades según la aplicación:
        </p>
        <ul>
          <li><strong>Ecografía 2D (modo B):</strong> Imagen bidimensional en escala de grises</li>
          <li><strong>Ecografía 3D:</strong> Reconstrucción tridimensional de estructuras</li>
          <li><strong>Ecografía 4D:</strong> 3D en tiempo real, muy utilizada en obstetricia</li>
          <li><strong>Doppler color:</strong> Visualiza dirección y velocidad del flujo sanguíneo</li>
          <li><strong>Doppler pulsado:</strong> Medición precisa de velocidades en un punto específico</li>
          <li><strong>Elastografía:</strong> Evalúa la rigidez de los tejidos</li>
        </ul>

        <h3>Preparación del paciente</h3>
        <p>
          La preparación varía según el tipo de estudio:
        </p>
        <ul>
          <li><strong>Ecografía abdominal:</strong> Ayuno de 6-8 horas para mejorar visualización</li>
          <li><strong>Ecografía pélvica:</strong> Vejiga llena (beber 1 litro de agua 1 hora antes)</li>
          <li><strong>Ecografía obstétrica:</strong> No requiere preparación especial en la mayoría de casos</li>
          <li><strong>Ecografía musculoesquelética:</strong> No requiere preparación</li>
        </ul>

        <h3>Técnica de exploración</h3>
        <p>
          Para obtener imágenes de calidad, el ecografista debe:
        </p>
        <ul>
          <li>Aplicar gel conductor generosamente para eliminar aire entre transductor y piel</li>
          <li>Elegir el transductor adecuado según la región y profundidad a estudiar</li>
          <li>Posicionar al paciente de forma óptima para cada estudio</li>
          <li>Realizar múltiples planos de exploración (longitudinal, transversal, oblicuo)</li>
          <li>Ajustar parámetros técnicos (ganancia, foco, profundidad)</li>
          <li>Documentar hallazgos mediante imágenes y clips de vídeo</li>
        </ul>

        <h3>Control de infecciones</h3>
        <p>
          La higiene y desinfección son fundamentales:
        </p>
        <ul>
          <li><strong>Transductores de superficie:</strong> Limpieza con desinfectante de bajo nivel entre pacientes</li>
          <li><strong>Transductores intracavitarios:</strong> (transvaginales, transrectales) desinfección de alto nivel</li>
          <li><strong>Gel de ultrasonidos:</strong> Utilizar envases individuales o gel estéril según procedimiento</li>
          <li><strong>Fundas protectoras:</strong> Obligatorias para estudios intracavitarios</li>
        </ul>

        <h3>Limitaciones de la ecografía</h3>
        <p>
          Aunque muy versátil, la ecografía tiene algunas limitaciones:
        </p>
        <ul>
          <li>Dificultad para penetrar hueso y aire (pulmones, gas intestinal)</li>
          <li>Calidad de imagen dependiente de la habilidad del operador</li>
          <li>Ventana acústica limitada en pacientes obesos</li>
          <li>No sustituye a otras técnicas en ciertos diagnósticos</li>
        </ul>

        <h3>Roles del personal</h3>
        <ul>
          <li><strong>Ecografistas/Técnicos:</strong> Realización de exploraciones y obtención de imágenes</li>
          <li><strong>Radiólogos/Médicos:</strong> Interpretación de imágenes e informes diagnósticos</li>
          <li><strong>Personal de enfermería:</strong> Asistencia en procedimientos guiados por ecografía</li>
        </ul>

        <h3>Mantenimiento del equipo</h3>
        <ul>
          <li>Limpieza y desinfección de transductores según protocolo</li>
          <li>Verificación de cables y conectores</li>
          <li>Calibración periódica con fantomas de control de calidad</li>
          <li>Revisión técnica anual por personal especializado</li>
          <li>Actualización de software cuando esté disponible</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloEcografia.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Ecografía</a></li>
          <li><a href="/docs/DesinfeccionTransductores.pdf" target="_blank" rel="noopener noreferrer">📄 Guía de Desinfección de Transductores</a></li>
          <li><a href="/docs/ControlCalidadEcografia.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Calidad en Ecografía</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Ecografia;
