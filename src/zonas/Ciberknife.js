import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const Ciberknife = () => {
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

      <h1>CyberKnife</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de ultra-alta precisión</strong>
              Solo personal altamente especializado. Tratamientos de máxima complejidad.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Radiación de alta precisión</strong>
              Haces de 6 MV con precisión submilimétrica. Dosis ablativas.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🤖">
            <div>
              <strong>Sistema robótico autónomo</strong>
              Brazo robótico con 6 grados de libertad. Movimientos automáticos complejos.
            </div>
          </li>
          <li className="alerta-info" data-icon="📡">
            <div>
              <strong>Seguimiento en tiempo real</strong>
              Tracking continuo del tumor incluso con movimiento respiratorio.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Paradas de emergencia múltiples</strong>
              Sistema de emergencia detiene robot inmediatamente. No interferir con brazos robóticos en movimiento.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          CyberKnife es un sistema avanzado de radiocirugía estereotáctica que combina un acelerador 
          lineal compacto montado en un brazo robótico con sistemas de imagen y seguimiento en tiempo 
          real. Permite administrar dosis ablativas de radiación con precisión submilimétrica a tumores 
          en cualquier parte del cuerpo, incluso en movimiento, sin necesidad de marcos estereotácticos 
          invasivos.
        </p>

        <h3>Diferencias clave con LINAC convencional</h3>
        <ul>
          <li><strong>Sin gantry fijo:</strong> Brazo robótico con total libertad de movimiento</li>
          <li><strong>Sin marco estereotáctico:</strong> Utiliza máscaras termoplásticas o seguimiento sin contacto</li>
          <li><strong>Tracking en tiempo real:</strong> Compensa movimientos respiratorios y del paciente</li>
          <li><strong>Múltiples haces no-coplanares:</strong> Cientos de ángulos de entrada diferentes</li>
          <li><strong>Sin colimadores multi-láminas:</strong> Colimadores fijos circulares o cónicos</li>
          <li><strong>Tratamiento fraccionado sin reposicionamiento invasivo:</strong> 1-5 sesiones típicamente</li>
        </ul>

        <h3>Componentes tecnológicos</h3>
        <ul>
          <li><strong>Acelerador lineal compacto:</strong> 6 MV, montado en brazo robótico industrial modificado</li>
          <li><strong>Brazo robótico KUKA:</strong> 6 grados de libertad, posiciona el haz desde mas de1200 posiciones posibles</li>
          <li><strong>Sistemas de imagen:</strong> 2 detectores de rayos X ortogonales montados en el techo</li>
          <li><strong>Sistema de seguimiento (tracking):</strong> Sincronización con movimiento respiratorio</li>
          <li><strong>Colimadores:</strong> Múltiples tamaños fijos (5-60 mm) o sistema IRIS de apertura variable</li>
          <li><strong>Camilla robótica:</strong> 6 grados de libertad para posicionamiento fino del paciente</li>
        </ul>

        <h3>Sistemas de tracking</h3>
        <p>
          CyberKnife utiliza diferentes métodos para localizar y seguir el tumor:
        </p>
        <ul>
          <li><strong>Tracking óseo (Xsight Spine):</strong> Seguimiento basado en anatomía ósea visible (columna, cráneo)</li>
          <li><strong>Tracking con fiduciales:</strong> Marcadores metálicos implantados cerca del tumor</li>
          <li><strong>Tracking sin fiduciales (Xsight Lung):</strong> Seguimiento directo del tumor pulmonar</li>
          <li><strong>Synchrony:</strong> Modelo predictivo del movimiento respiratorio en tiempo real</li>
        </ul>

        <h3>Indicaciones principales</h3>
        <p><strong>Sistema Nervioso Central:</strong></p>
        <ul>
          <li>Metástasis cerebrales (1-10 lesiones)</li>
          <li>Tumores cerebrales benignos (meningiomas, schwannomas)</li>
          <li>Malformaciones arteriovenosas (MAVs)</li>
          <li>Neuralgias del trigémino refractarias</li>
          <li>Tumores de base de cráneo</li>
          <li>Tumores espinales (intramedulares, extramedulares)</li>
        </ul>

        <p><strong>Cuerpo (SBRT):</strong></p>
        <ul>
          <li>Cáncer de pulmón en estadio temprano inoperable</li>
          <li>Metástasis pulmonares oligometastásicas</li>
          <li>Tumores hepáticos primarios y metástasis</li>
          <li>Cáncer de páncreas localizado</li>
          <li>Cáncer de próstata localizado</li>
          <li>Metástasis vertebrales con compresión medular</li>
          <li>Tumores renales pequeños</li>
        </ul>

        <h3>Proceso de tratamiento con CyberKnife</h3>
        <p><strong>1. Implantación de fiduciales (si necesario):</strong></p>
        <ul>
          <li>Procedimiento mínimamente invasivo (endoscopia, punción)</li>
          <li>3-6 marcadores de oro cerca del tumor</li>
          <li>Esperar 7-10 días para estabilización e identificación en TC</li>
        </ul>

        <p><strong>2. Simulación (TC de planificación):</strong></p>
        <ul>
          <li>TAC de alta resolución con inmovilizador</li>
          <li>TC 4D si tumor se mueve con respiración</li>
          <li>Fusión con RM o PET si necesario</li>
          <li>Sin necesidad de marco invasivo (vs Gamma Knife)</li>
        </ul>

        <p><strong>3. Planificación dosimétrica:</strong></p>
        <ul>
          <li>Delimitación precisa del tumor y órganos de riesgo</li>
          <li>Planificación inversa: software optimiza distribución de haces</li>
          <li>Típicamente 100-300 haces desde diferentes ángulos</li>
          <li>Isodosis conformadas al tumor con caída rápida fuera</li>
          <li>Verificación exhaustiva del plan</li>
        </ul>

        <p><strong>4. Tratamiento:</strong></p>
        <ul>
          <li><strong>Duración:</strong> 30-90 minutos por sesión (más largo que LINAC)</li>
          <li><strong>Posicionamiento:</strong> Paciente en camilla, inmovilizador aplicado</li>
          <li><strong>Imágenes iniciales:</strong> Radiografías ortogonales para alineación</li>
          <li><strong>Ajuste automático:</strong> Sistema calcula y ejecuta correcciones</li>
          <li><strong>Tracking continuo:</strong> Imágenes cada 30-60 segundos durante tratamiento</li>
          <li><strong>Irradiación secuencial:</strong> Robot se mueve entre nodos, administra dosis</li>
          <li><strong>Compensación de movimiento:</strong> Ajuste en tiempo real si tracking activado</li>
        </ul>

        <h3>Ventajas del CyberKnife</h3>
        <ul>
          <li><strong>Precisión extrema:</strong> Exactitud submilimétrica (±0.5 mm)</li>
          <li><strong>No invasivo:</strong> Sin marco estereotáctico atornillado al cráneo</li>
          <li><strong>Compensa movimiento:</strong> Trata tumores móviles (pulmón, hígado)</li>
          <li><strong>Fraccionamiento flexible:</strong> 1-5 sesiones según localización</li>
          <li><strong>Acceso a cualquier ángulo:</strong> mas de 1000 posiciones de haz posibles</li>
          <li><strong>Planificación conformal:</strong> Dosis muy ajustada a formas irregulares</li>
          <li><strong>Tratamiento ambulatorio:</strong> Sin ingreso hospitalario</li>
          <li><strong>Mínimos efectos secundarios:</strong> Protección de tejidos sanos</li>
        </ul>

        <h3>Limitaciones</h3>
        <ul>
          <li>Sesiones largas (puede ser difícil para algunos pacientes)</li>
          <li>Requiere inmovilización estricta</li>
          <li>Puede necesitar implantación de fiduciales</li>
          <li>No apto para tumores muy grandes (mayor de 5-6 cm)</li>
          <li>Requiere personal altamente especializado</li>
          <li>Coste elevado de adquisición y mantenimiento</li>
        </ul>

        <h3>Comparación con otras técnicas</h3>
        <p><strong>CyberKnife vs Gamma Knife:</strong></p>
        <ul>
          <li><strong>CyberKnife:</strong> Todo el cuerpo, múltiples sesiones, sin marco invasivo</li>
          <li><strong>Gamma Knife:</strong> Solo cerebro, sesión única, marco atornillado (o máscara)</li>
        </ul>

        <p><strong>CyberKnife vs LINAC con SBRT:</strong></p>
        <ul>
          <li><strong>CyberKnife:</strong> Tracking en tiempo real, más ángulos, precisión superior</li>
          <li><strong>LINAC SBRT:</strong> Tratamientos más rápidos, menor coste</li>
        </ul>

        <h3>Esquemas de fraccionamiento típicos</h3>
        <ul>
          <li><strong>Cerebro (metástasis, benignos):</strong> Dosis única 15-25 Gy</li>
          <li><strong>Columna:</strong> 1-5 fracciones, 12-24 Gy dosis única o 24-35 Gy en 3-5 fracciones</li>
          <li><strong>Pulmón:</strong> 3-5 fracciones, 45-60 Gy total</li>
          <li><strong>Hígado:</strong> 3-5 fracciones, 30-60 Gy total</li>
          <li><strong>Próstata:</strong> 5 fracciones, 36.25-40 Gy total</li>
        </ul>

        <h3>Control de calidad específico</h3>
        <ul>
          <li><strong>Diario:</strong> Alineación del brazo robótico, prueba de tracking</li>
          <li><strong>Mensual:</strong> Precisión del sistema de localización, dosimetría end-to-end</li>
          <li><strong>Anual:</strong> Calibración absoluta, mecánica completa del robot</li>
          <li><strong>Específico del paciente:</strong> Simulación del tratamiento con phantom antes de la primera sesión</li>
        </ul>

        <h3>Efectos secundarios y complicaciones</h3>
        <p>
          Generalmente mínimos dada la precisión, pero pueden incluir:
        </p>
        <ul>
          <li><strong>Agudos:</strong> Fatiga, náuseas leves, cefalea (tratamientos cerebrales)</li>
          <li><strong>Específicos por localización:</strong>
            <ul>
              <li>Cerebro: Edema (tratable con corticoides), raramente radionecrosis</li>
              <li>Pulmón: Neumonitis por radiación (5-15%)</li>
              <li>Hígado: Elevación transitoria de enzimas</li>
              <li>Columna: Dolor transitorio, raramente mielopatía</li>
            </ul>
          </li>
        </ul>

        <h3>Seguridad del sistema robótico</h3>
        <ul>
          <li><strong>Zona de seguridad:</strong> Sensores detectan entrada en espacio del robot</li>
          <li><strong>Paradas de emergencia:</strong> Múltiples botones accesibles</li>
          <li><strong>Colisión:</strong> Software previene impacto robot-paciente-camilla</li>
          <li><strong>Redundancia:</strong> Sistemas duplicados de control y seguridad</li>
          <li><strong>Monitorización continua:</strong> Audio, vídeo, signos vitales</li>
        </ul>

        <h3>Roles del equipo CyberKnife</h3>
        <ul>
          <li><strong>Oncólogos radioterápicos:</strong> Indicación, delimitación de volúmenes, seguimiento</li>
          <li><strong>Radiofísicos médicos:</strong> Planificación especializada, control de calidad</li>
          <li><strong>Técnicos CyberKnife:</strong> Formación específica en sistema robótico y tracking</li>
          <li><strong>Personal de enfermería:</strong> Preparación del paciente, monitorización</li>
          <li><strong>Radiólogos intervencionistas:</strong> Implantación de fiduciales</li>
        </ul>

        <h3>Resultados clínicos</h3>
        <p>
          CyberKnife ha demostrado excelentes resultados en:
        </p>
        <ul>
          <li><strong>Metástasis cerebrales:</strong> Control local mayor del 90% a 1 año</li>
          <li><strong>Cáncer de pulmón T1:</strong> Control local mayor del 90%, alternativa a cirugía</li>
          <li><strong>Tumores espinales:</strong> Descompresión efectiva, control del dolor</li>
          <li><strong>Cáncer de próstata:</strong> Resultados comparables a cirugía, menos efectos secundarios</li>
        </ul>

        <h3>Consideraciones para el personal</h3>
        <ul>
          <li>Durante tratamiento, sala completamente vacía excepto paciente</li>
          <li>Sesiones largas: paciente debe estar cómodo y poder permanecer inmóvil</li>
          <li>Comunicación constante con paciente vía intercomunicador</li>
          <li>En emergencia, usar parada de emergencia (robot se detiene inmediatamente)</li>
          <li>No interferir con espacio de trabajo del robot durante operación</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloCyberKnife.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos CyberKnife</a></li>
          <li><a href="/docs/SeguridadSistemaRobotico.pdf" target="_blank" rel="noopener noreferrer">📄 Seguridad del Sistema Robótico</a></li>
          <li><a href="/docs/TrackingTumoral.pdf" target="_blank" rel="noopener noreferrer">📄 Sistemas de Tracking</a></li>
          <li><a href="/docs/PlanificacionCyberKnife.pdf" target="_blank" rel="noopener noreferrer">📄 Planificación Dosimétrica</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Ciberknife;
