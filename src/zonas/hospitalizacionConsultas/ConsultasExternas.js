import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const ConsultasExternas = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      <div className="header-zona">
        <button onClick={() => navigate('/')} className="btn-volver-mapa">
          ← Volver al mapa
        </button>
      </div>

      <h1>Consultas Externas</h1><br />

      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-info" data-icon="📅">
            <div>
              <strong>Sistema de citas</strong>
              Atención con cita previa. Puntualidad recomendada.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🦠">
            <div>
              <strong>Higiene y prevención</strong>
              Uso de mascarilla si síntomas respiratorios.
            </div>
          </li>
          <li className="alerta-info" data-icon="📋">
            <div>
              <strong>Documentación</strong>
              Llevar informes previos, analíticas, pruebas de imagen.
            </div>
          </li>
          <li className="alerta-info" data-icon="💳">
            <div>
              <strong>Tarjeta sanitaria</strong>
              Presentar tarjeta sanitaria o seguro médico.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          Las Consultas Externas son áreas donde los especialistas atienden a pacientes 
          ambulatorios, es decir, que no requieren ingreso hospitalario. Incluyen consultas 
          de primera vez, revisiones y seguimiento de patologías crónicas.
        </p>

        <h3>Especialidades disponibles</h3>
        <ul>
          <li>Medicina interna</li>
          <li>Cardiología</li>
          <li>Traumatología</li>
          <li>Oftalmología</li>
          <li>Dermatología</li>
          <li>Otorrinolaringología (ORL)</li>
          <li>Urología</li>
          <li>Ginecología y obstetricia</li>
          <li>Digestivo</li>
          <li>Neumología</li>
          <li>Entre otras especialidades</li>
        </ul>

        <h3>Proceso de atención</h3>
        <ul>
          <li><strong>Admisión:</strong> Presentación en mostrador con cita previa</li>
          <li><strong>Sala de espera:</strong> Hasta ser llamado por el especialista</li>
          <li><strong>Consulta médica:</strong> Evaluación, diagnóstico, tratamiento</li>
          <li><strong>Pruebas complementarias:</strong> Si necesarias (analíticas, imagen)</li>
          <li><strong>Prescripción:</strong> Recetas, informes, nuevas citas</li>
        </ul>

        <h3>Derechos del paciente</h3>
        <ul>
          <li>Información sobre su enfermedad</li>
          <li>Consentimiento informado</li>
          <li>Confidencialidad</li>
          <li>Acceso a su historia clínica</li>
          <li>Segunda opinión médica</li>
        </ul>
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/GuiaConsultasExternas.pdf" target="_blank" rel="noopener noreferrer">📄 Guía de Consultas Externas</a></li>
          <li><a href="/docs/DerechosPaciente.pdf" target="_blank" rel="noopener noreferrer">📄 Derechos del Paciente</a></li>
        </ul>
      </section>
    </div>
  );
};

export default ConsultasExternas;
