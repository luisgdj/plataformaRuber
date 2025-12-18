import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const Esterilizacion = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      <div className="header-zona">
        <button onClick={() => navigate('/')} className="btn-volver-mapa">
          ← Volver al mapa
        </button>
      </div>

      <h1>Central de Esterilización</h1><br />

      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de procesamiento crítico</strong>
              Acceso restringido a personal especializado en esterilización.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="⚠️">
            <div>
              <strong>Productos químicos peligrosos</strong>
              Manipulación de agentes esterilizantes. Uso de EPIs específicos obligatorio.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🌡️">
            <div>
              <strong>Equipos de alta temperatura</strong>
              Autoclaves operan a temperaturas superiores a 120°C. Riesgo de quemaduras.
            </div>
          </li>
          <li className="alerta-info" data-icon="📋">
            <div>
              <strong>Trazabilidad</strong>
              Registro obligatorio de todos los ciclos de esterilización y material procesado.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Protocolo de fallos</strong>
              Conocer procedimiento ante fallo en ciclos de esterilización o indicadores biológicos positivos.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          La Central de Esterilización es el área responsable del reprocesamiento del material 
          médico-quirúrgico reutilizable. Garantiza que todo el instrumental utilizado en 
          procedimientos invasivos esté libre de microorganismos, siendo fundamental para 
          la prevención de infecciones hospitalarias.
        </p>

        <h3>Circuito del material</h3>
        <ul>
          <li><strong>Zona sucia:</strong> Recepción y limpieza del material contaminado</li>
          <li><strong>Zona limpia:</strong> Secado, revisión, empaquetado</li>
          <li><strong>Zona estéril:</strong> Esterilización, almacenamiento y distribución</li>
        </ul>

        <h3>Métodos de esterilización</h3>
        <ul>
          <li><strong>Vapor saturado (autoclave):</strong> Método de elección, 121-134°C</li>
          <li><strong>Óxido de etileno:</strong> Para material termosensible</li>
          <li><strong>Peróxido de hidrógeno plasma:</strong> Ciclos rápidos, material delicado</li>
          <li><strong>Formaldehído:</strong> Para equipos específicos</li>
        </ul>

        <h3>Control de calidad</h3>
        <ul>
          <li>Indicadores químicos en cada paquete</li>
          <li>Indicadores biológicos semanales</li>
          <li>Registros de cada ciclo de esterilización</li>
          <li>Mantenimiento preventivo de autoclaves</li>
        </ul>
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ManualEsterilizacion.pdf" target="_blank" rel="noopener noreferrer">📄 Manual de Esterilización</a></li>
          <li><a href="/docs/ProtocolosReprocesamiento.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Reprocesamiento</a></li>
          <li><a href="/docs/ControlCalidadEsterilizacion.pdf" target="_blank" rel="noopener noreferrer">📄 Control de Calidad</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Esterilizacion;
