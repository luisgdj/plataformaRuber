import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const Quirofanos = () => {
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

      <h1>Quirófanos</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de acceso restringido</strong>
              Solo personal quirúrgico autorizado. Estrictos protocolos de asepsia.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="🦠">
            <div>
              <strong>Zona estéril</strong>
              Cumplimiento obligatorio de técnicas de asepsia y antisepsia.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="👔">
            <div>
              <strong>Vestuario quirúrgico</strong>
              Uso obligatorio de pijama quirúrgico, gorro, mascarilla y calzas.
            </div>
          </li>
          <li className="alerta-info" data-icon="🌡️">
            <div>
              <strong>Control ambiental</strong>
              Temperatura, humedad y presión positiva controladas constantemente.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Emergencias quirúrgicas</strong>
              Conocer ubicación de carro de paradas y protocolos de código azul.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          El área quirúrgica es un entorno altamente especializado diseñado para realizar 
          procedimientos quirúrgicos con los máximos estándares de seguridad, asepsia y 
          tecnología. Incluye quirófanos equipados con la última tecnología médica y sistemas 
          de soporte vital avanzados.
        </p>

        <h3>Estructura del área quirúrgica</h3>
        <p>
          El bloque quirúrgico se divide en zonas según el nivel de restricción:
        </p>
        <ul>
          <li><strong>Zona negra:</strong> Acceso libre, vestuarios</li>
          <li><strong>Zona gris:</strong> Circulación restringida, pasillos</li>
          <li><strong>Zona blanca:</strong> Máxima restricción, quirófanos y lavabos quirúrgicos</li>
        </ul>

        <h3>Equipamiento quirúrgico</h3>
        <p>
          Cada quirófano dispone de:
        </p>
        <ul>
          <li><strong>Mesa quirúrgica:</strong> Ajustable en múltiples posiciones</li>
          <li><strong>Lámpara cialítica:</strong> Iluminación sin sombras del campo quirúrgico</li>
          <li><strong>Torre de laparoscopia:</strong> Para cirugía mínimamente invasiva</li>
          <li><strong>Monitores multiparamétricos:</strong> Vigilancia continua del paciente</li>
          <li><strong>Equipos de anestesia:</strong> Ventiladores, vaporizadores, monitores</li>
          <li><strong>Bisturí eléctrico:</strong> Para corte y coagulación</li>
          <li><strong>Sistemas de aspiración:</strong> Para evacuación de fluidos</li>
          <li><strong>Arco de fluoroscopia:</strong> En quirófanos de traumatología</li>
        </ul>

        <h3>Asepsia y antisepsia</h3>
        <p>
          Protocolos fundamentales para prevenir infecciones:
        </p>
        <ul>
          <li><strong>Lavado quirúrgico de manos:</strong> Procedimiento estandarizado antes de cada intervención</li>
          <li><strong>Colocación de bata y guantes estériles:</strong> Técnica aséptica estricta</li>
          <li><strong>Preparación del campo quirúrgico:</strong> Antisepsia de la zona a intervenir</li>
          <li><strong>Paños estériles:</strong> Delimitación del campo quirúrgico</li>
          <li><strong>Tráfico limitado:</strong> Minimizar entradas y salidas durante cirugía</li>
        </ul>

        <h3>Control ambiental</h3>
        <p>
          Los quirófanos mantienen condiciones ambientales específicas:
        </p>
        <ul>
          <li><strong>Temperatura:</strong> 18-24°C según tipo de cirugía</li>
          <li><strong>Humedad:</strong> 30-60% para confort y reducir electricidad estática</li>
          <li><strong>Presión positiva:</strong> Evita entrada de aire no filtrado</li>
          <li><strong>Filtración HEPA:</strong> Remoción del 99.97% de partículas</li>
          <li><strong>Renovación de aire:</strong> 15-25 cambios por hora</li>
        </ul>

        <h3>Equipo quirúrgico</h3>
        <p>
          Personal que participa en una intervención quirúrgica:
        </p>
        <ul>
          <li><strong>Cirujano principal:</strong> Dirige y realiza el procedimiento</li>
          <li><strong>Cirujanos ayudantes:</strong> Asisten en la intervención</li>
          <li><strong>Anestesiólogo:</strong> Manejo anestésico y vigilancia del paciente</li>
          <li><strong>Enfermera circulante:</strong> Coordina actividades fuera del campo estéril</li>
          <li><strong>Enfermera instrumentista:</strong> Maneja instrumental dentro del campo estéril</li>
          <li><strong>Técnico de anestesia:</strong> Apoya al anestesiólogo</li>
          <li><strong>Auxiliares de enfermería:</strong> Apoyo logístico</li>
        </ul>

        <h3>Tipos de cirugía</h3>
        <p>
          Clasificación según varios criterios:
        </p>
        <ul>
          <li><strong>Por urgencia:</strong> Electiva, urgente, emergente</li>
          <li><strong>Por propósito:</strong> Diagnóstica, curativa, paliativa, reconstructiva</li>
          <li><strong>Por grado de invasión:</strong> Mayor, menor, mínimamente invasiva</li>
          <li><strong>Por especialidad:</strong> General, traumatología, cardiovascular, neurocirugía, etc.</li>
        </ul>

        <h3>Seguridad del paciente</h3>
        <p>
          Protocolos universales de seguridad quirúrgica:
        </p>
        <ul>
          <li><strong>Lista de verificación de la OMS:</strong> Check-list de seguridad quirúrgica</li>
          <li><strong>Tres fases:</strong> Antes de la inducción anestésica, antes de la incisión, antes de que el paciente salga</li>
          <li><strong>Identificación del paciente:</strong> Al menos dos identificadores</li>
          <li><strong>Marcaje del sitio quirúrgico:</strong> Especialmente en cirugías lateralizadas</li>
          <li><strong>Confirmación del procedimiento:</strong> Verificación con todo el equipo</li>
          <li><strong>Conteo de instrumental:</strong> Antes y después de la cirugía</li>
          <li><strong>Prevención de trombosis:</strong> Medidas profilácticas</li>
          <li><strong>Antibiótico profiláctico:</strong> Administración en tiempo adecuado</li>
        </ul>

        <h3>Reanimación postquirúrgica (URPA)</h3>
        <p>
          Área adyacente a quirófanos para recuperación inmediata:
        </p>
        <ul>
          <li>Monitorización intensiva tras anestesia</li>
          <li>Control del dolor postoperatorio</li>
          <li>Vigilancia de complicaciones inmediatas</li>
          <li>Estabilización antes del traslado a planta</li>
        </ul>

        <h3>Gestión de residuos</h3>
        <p>
          Clasificación y manejo adecuado de residuos:
        </p>
        <ul>
          <li><strong>Residuos biosanitarios:</strong> Especiales, contenedores específicos</li>
          <li><strong>Material punzante:</strong> Contenedores rígidos</li>
          <li><strong>Tejidos y muestras:</strong> Según protocolo anatomía patológica</li>
          <li><strong>Residuos químicos:</strong> Manejo específico</li>
        </ul>

        <h3>Prevención de riesgos laborales</h3>
        <p>
          Medidas de protección del personal:
        </p>
        <ul>
          <li>Precauciones universales con fluidos corporales</li>
          <li>Manejo seguro de instrumental punzante</li>
          <li>Protección contra agentes anestésicos</li>
          <li>Ergonomía en posicionamiento durante cirugías largas</li>
          <li>Protección radiológica en uso de fluoroscopia</li>
        </ul>

        <h3>Limpieza y desinfección</h3>
        <ul>
          <li><strong>Entre cirugías:</strong> Limpieza de superficies, eliminación de residuos</li>
          <li><strong>Fin del día:</strong> Limpieza exhaustiva de todo el quirófano</li>
          <li><strong>Limpieza terminal:</strong> Periódica, incluye techos y paredes</li>
          <li><strong>Cultivos ambientales:</strong> Monitorización microbiológica periódica</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloQuirofano.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Quirófano</a></li>
          <li><a href="/docs/SeguridadQuirurgica.pdf" target="_blank" rel="noopener noreferrer">📄 Lista de Verificación Quirúrgica OMS</a></li>
          <li><a href="/docs/AsepsiaAntisepsia.pdf" target="_blank" rel="noopener noreferrer">📄 Manual de Asepsia y Antisepsia</a></li>
          <li><a href="/docs/ControlInfecciones.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Infecciones en Área Quirúrgica</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Quirofanos;
