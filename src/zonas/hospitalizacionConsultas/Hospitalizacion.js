import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const Hospitalizacion = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      <div className="header-zona">
        <button onClick={() => navigate('/')} className="btn-volver-mapa">
          ← Volver al mapa
        </button>
      </div>

      <h1>Hospitalización</h1><br />

      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona de pacientes ingresados</strong>
              Respetar horarios de visita. Intimidad del paciente prioritaria.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="🦠">
            <div>
              <strong>Prevención de infecciones</strong>
              Higiene de manos obligatoria. Aislamiento según precauciones.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🛏️">
            <div>
              <strong>Prevención de caídas</strong>
              Barandillas elevadas. Sistemas de llamada accesibles.
            </div>
          </li>
          <li className="alerta-info" data-icon="👨‍⚕️">
            <div>
              <strong>Rondas médicas</strong>
              Visita diaria del equipo médico. Comunicación con familia.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Emergencias en planta</strong>
              Carro de paradas disponible. Equipo de respuesta rápida.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          Las plantas de Hospitalización son áreas donde los pacientes permanecen ingresados 
          para recibir tratamiento médico y cuidados de enfermería. Organizadas por especialidades 
          médicas y quirúrgicas.
        </p>

        <h3>Organización de plantas</h3>
        <ul>
          <li><strong>Medicina interna:</strong> Patologías médicas complejas</li>
          <li><strong>Cirugía general:</strong> Postoperatorio de cirugías programadas</li>
          <li><strong>Traumatología y ortopedia:</strong> Fracturas, cirugía ortopédica</li>
          <li><strong>Cardiología:</strong> Patología cardíaca no crítica</li>
          <li><strong>Neurología:</strong> ACV, epilepsia, patología neurológica</li>
          <li><strong>Oncología:</strong> Tratamientos oncológicos, quimioterapia</li>
          <li><strong>Pediatría:</strong> Ingreso de niños</li>
        </ul>

        <h3>Equipo de hospitalización</h3>
        <ul>
          <li><strong>Médico responsable:</strong> Atiende al paciente durante el ingreso</li>
          <li><strong>Supervisor de enfermería:</strong> Coordina cuidados de enfermería</li>
          <li><strong>Enfermeras:</strong> Administran tratamientos, monitorización</li>
          <li><strong>Auxiliares de enfermería:</strong> Cuidados básicos, higiene</li>
          <li><strong>Celadores:</strong> Traslados, movilización</li>
        </ul>

        <h3>Cuidados de enfermería</h3>
        <ul>
          <li>Administración de medicación</li>
          <li>Curas y cambios de apósitos</li>
          <li>Control de constantes vitales</li>
          <li>Manejo de vías venosas y sondajes</li>
          <li>Educación sanitaria al paciente y familia</li>
        </ul>

        <h3>Seguridad del paciente</h3>
        <ul>
          <li><strong>Identificación:</strong> Pulsera identificativa</li>
          <li><strong>Prevención de caídas:</strong> Valoración del riesgo</li>
          <li><strong>Prevención de UPP:</strong> Cambios posturales, colchones especiales</li>
          <li><strong>Conciliación de medicación:</strong> Al ingreso y alta</li>
        </ul>
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocolosHospitalizacion.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Hospitalización</a></li>
          <li><a href="/docs/CuidadosEnfermeria.pdf" target="_blank" rel="noopener noreferrer">📄 Cuidados de Enfermería</a></li>
          <li><a href="/docs/PrevencionCaidas.pdf" target="_blank" rel="noopener noreferrer">📄 Prevención de Caídas</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Hospitalizacion;
