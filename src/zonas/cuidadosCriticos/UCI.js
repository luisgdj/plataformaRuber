import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const UCI = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      <div className="header-zona">
        <button onClick={() => navigate('/')} className="btn-volver-mapa">
          ← Volver al mapa
        </button>
      </div>

      <h1>Unidad de Cuidados Intensivos (UCI)</h1><br />

      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso muy restringido</strong>
              Solo personal autorizado. Pacientes críticos requieren ambiente controlado.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="🦠">
            <div>
              <strong>Control de infecciones</strong>
              Estrictas medidas de higiene. Lavado de manos obligatorio antes y después.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🩺">
            <div>
              <strong>Monitorización continua</strong>
              Alarmas constantes. Respuesta inmediata a cambios en estado del paciente.
            </div>
          </li>
          <li className="alerta-info" data-icon="👨‍⚕️">
            <div>
              <strong>Ratio enfermera/paciente</strong>
              Alta dedicación. Generalmente 1 enfermera por cada 1-2 pacientes.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Código azul</strong>
              Equipo de reanimación siempre disponible. Conocer protocolo de PCR.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          La Unidad de Cuidados Intensivos (UCI) es un área especializada del hospital destinada 
          al manejo de pacientes en estado crítico que requieren monitorización y soporte vital 
          continuo. Cuenta con tecnología avanzada y personal altamente cualificado disponible 24/7.
        </p>

        <h3>Criterios de ingreso en UCI</h3>
        <ul>
          <li><strong>Fallo respiratorio:</strong> Necesidad de ventilación mecánica</li>
          <li><strong>Shock:</strong> Circulatorio, séptico, cardiogénico</li>
          <li><strong>Postoperatorio complejo:</strong> Cirugía cardiovascular, trasplantes</li>
          <li><strong>Alteración neurológica grave:</strong> TCE, ACV, coma</li>
          <li><strong>Fallo multiorgánico:</strong> Afectación de dos o más sistemas</li>
          <li><strong>Monitorización invasiva:</strong> Control hemodinámico estrecho</li>
        </ul>

        <h3>Equipamiento UCI</h3>
        <ul>
          <li><strong>Monitor multiparamétrico:</strong> ECG, PA, FC, SpO2, PVC, PIC</li>
          <li><strong>Ventilador mecánico:</strong> Soporte respiratorio avanzado</li>
          <li><strong>Bombas de infusión:</strong> Administración precisa de fármacos</li>
          <li><strong>Sistemas de depuración extrarrenal:</strong> Hemodiálisis continua</li>
          <li><strong>Carro de paradas:</strong> Equipamiento de reanimación</li>
          <li><strong>Ecógrafo:</strong> Evaluación a pie de cama</li>
          <li><strong>Dispositivos de acceso vascular:</strong> Catéteres centrales, arteriales</li>
        </ul>

        <h3>Monitorización invasiva</h3>
        <ul>
          <li><strong>Catéter arterial:</strong> Presión arterial continua, gasometrías frecuentes</li>
          <li><strong>Catéter venoso central:</strong> Administración de fármacos, medición de PVC</li>
          <li><strong>Catéter de Swan-Ganz:</strong> Parámetros hemodinámicos avanzados</li>
          <li><strong>Sensor de PIC:</strong> Presión intracraneal en lesiones cerebrales</li>
          <li><strong>Catéter epidural:</strong> Analgesia postoperatoria</li>
        </ul>

        <h3>Ventilación mecánica</h3>
        <p>Modalidades de soporte respiratorio:</p>
        <ul>
          <li><strong>Ventilación invasiva:</strong> A través de tubo endotraqueal o traqueostomía</li>
          <li><strong>Ventilación no invasiva (VNI):</strong> Mascarilla facial o nasal</li>
          <li><strong>Modos ventilatorios:</strong> Controlado, asistido-controlado, SIMV, presión soporte</li>
          <li><strong>Parámetros:</strong> FiO2, PEEP, volumen tidal, frecuencia respiratoria</li>
        </ul>

        <h3>Sedación y analgesia</h3>
        <ul>
          <li><strong>Escalas de valoración:</strong> Ramsay, RASS, BPS</li>
          <li><strong>Sedantes:</strong> Propofol, midazolam, dexmedetomidina</li>
          <li><strong>Analgésicos:</strong> Opioides (fentanilo, morfina, remifentanilo)</li>
          <li><strong>Bloqueantes neuromusculares:</strong> En casos específicos</li>
          <li><strong>Despertar diario:</strong> Evaluación neurológica</li>
        </ul>

        <h3>Prevención de complicaciones</h3>
        <ul>
          <li><strong>Neumonía asociada a ventilación:</strong> Bundle de prevención</li>
          <li><strong>Infección por catéter:</strong> Técnica aséptica, cuidados diarios</li>
          <li><strong>Úlceras por presión:</strong> Cambios posturales, superficies especiales</li>
          <li><strong>Trombosis venosa profunda:</strong> Profilaxis farmacológica y mecánica</li>
          <li><strong>Delirium:</strong> Movilización precoz, orientación, reducir sedación</li>
        </ul>

        <h3>Equipo multidisciplinar UCI</h3>
        <ul>
          <li><strong>Médicos intensivistas:</strong> Disponibilidad 24/7</li>
          <li><strong>Enfermería especializada:</strong> Formación en cuidados críticos</li>
          <li><strong>Auxiliares de enfermería:</strong> Apoyo en cuidados básicos</li>
          <li><strong>Fisioterapeutas:</strong> Movilización precoz, fisioterapia respiratoria</li>
          <li><strong>Farmacéuticos clínicos:</strong> Optimización de tratamientos</li>
          <li><strong>Nutricionistas:</strong> Soporte nutricional especializado</li>
          <li><strong>Psicólogos:</strong> Apoyo a pacientes y familiares</li>
        </ul>

        <h3>Atención a la familia</h3>
        <ul>
          <li><strong>Horarios de visita:</strong> Flexibles, política de puertas abiertas</li>
          <li><strong>Información médica:</strong> Comunicación diaria con familia</li>
          <li><strong>Sala de espera:</strong> Espacio cómodo para familiares</li>
          <li><strong>Apoyo psicológico:</strong> Disponible para familiares</li>
        </ul>

        <h3>Control de calidad</h3>
        <ul>
          <li>Indicadores de resultados (mortalidad, estancia media)</li>
          <li>Indicadores de proceso (cumplimiento bundles)</li>
          <li>Reuniones de morbimortalidad</li>
          <li>Formación continua del personal</li>
        </ul>
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocolosUCI.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de UCI</a></li>
          <li><a href="/docs/VentilacionMecanica.pdf" target="_blank" rel="noopener noreferrer">📄 Ventilación Mecánica</a></li>
          <li><a href="/docs/SedacionAnalgesia.pdf" target="_blank" rel="noopener noreferrer">📄 Sedación y Analgesia</a></li>
          <li><a href="/docs/PrevencionInfeccionesUCI.pdf" target="_blank" rel="noopener noreferrer">📄 Prevención de Infecciones</a></li>
        </ul>
      </section>
    </div>
  );
};

export default UCI;
