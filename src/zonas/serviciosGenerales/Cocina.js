import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ZonaInteractiva.css';

const Cocina = () => {
  const navigate = useNavigate();

  return (
    <div className="zona-interactiva">
      <div className="header-zona">
        <button onClick={() => navigate('/')} className="btn-volver-mapa">
          ← Volver al mapa
        </button>
      </div>

      <h1>Cocina Hospitalaria</h1><br />

      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Acceso restringido</strong>
              Solo personal de cocina con uniforme y formación en manipulación de alimentos.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="🔥">
            <div>
              <strong>Riesgo de quemaduras</strong>
              Equipos de cocción a altas temperaturas. Uso de EPIs (guantes térmicos).
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="🧊">
            <div>
              <strong>Cadena de frío</strong>
              Control estricto de temperaturas. Refrigeración menor de 4°C, congelación menor de -18°C.
            </div>
          </li>
          <li className="alerta-info" data-icon="🧼">
            <div>
              <strong>Higiene alimentaria</strong>
              Lavado de manos frecuente. Separación de alimentos crudos y cocinados.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="⚠️">
            <div>
              <strong>Alergias e intolerancias</strong>
              Verificar dietas especiales. Evitar contaminación cruzada con alérgenos.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Información general</h2>
        <p>
          La Cocina Hospitalaria es responsable de la elaboración y distribución de alimentos 
          para pacientes, personal y visitantes. Debe garantizar la seguridad alimentaria y 
          adaptarse a las necesidades nutricionales específicas de los pacientes.
        </p>

        <h3>Tipos de dietas</h3>
        <ul>
          <li><strong>Dieta basal:</strong> Normal, sin restricciones</li>
          <li><strong>Dieta blanda:</strong> Post-cirugía, problemas digestivos</li>
          <li><strong>Dieta líquida:</strong> Pre/post-operatorio, disfagia</li>
          <li><strong>Dieta diabética:</strong> Control de carbohidratos</li>
          <li><strong>Dieta hiposódica:</strong> Bajo contenido en sal</li>
          <li><strong>Dieta hipocalórica:</strong> Control de peso</li>
          <li><strong>Dieta sin gluten:</strong> Celíacos</li>
          <li><strong>Dietas terapéuticas específicas:</strong> Según patología</li>
        </ul>

        <h3>Seguridad alimentaria - Sistema APPCC</h3>
        <p>
          Análisis de Peligros y Puntos de Control Críticos:
        </p>
        <ul>
          <li><strong>Recepción:</strong> Verificación de temperatura y calidad</li>
          <li><strong>Almacenamiento:</strong> Separación y temperaturas adecuadas</li>
          <li><strong>Preparación:</strong> Higiene, separación crudo/cocido</li>
          <li><strong>Cocción:</strong> Temperatura interna mínima 75°C</li>
          <li><strong>Mantenimiento:</strong> Caliente mayor de 65°C, frío menor de 4°C</li>
          <li><strong>Servicio:</strong> Tiempo máximo 2 horas desde elaboración</li>
        </ul>

        <h3>Higiene del personal</h3>
        <ul>
          <li>Uniformidad limpia y exclusiva para cocina</li>
          <li>Gorro que cubra todo el cabello</li>
          <li>Lavado de manos frecuente (antes de manipular, después de usar el baño)</li>
          <li>Uñas cortas, sin esmalte ni joyas</li>
          <li>Certificado de salud actualizado</li>
          <li>No trabajar con síntomas gastrointestinales</li>
        </ul>

        <h3>Áreas de la cocina</h3>
        <ul>
          <li><strong>Zona sucia:</strong> Recepción, almacén, lavado de vajilla</li>
          <li><strong>Zona limpia:</strong> Preparación, cocción, emplatado</li>
          <li><strong>Cámaras frigoríficas:</strong> Refrigeración y congelación</li>
          <li><strong>Zona de distribución:</strong> Carros térmicos para plantas</li>
        </ul>

        <h3>Control de calidad</h3>
        <ul>
          <li>Registro de temperaturas diario</li>
          <li>Análisis microbiológicos periódicos</li>
          <li>Muestras testigo (guardar 72 horas)</li>
          <li>Auditorías de seguridad alimentaria</li>
          <li>Encuestas de satisfacción de pacientes</li>
        </ul>
      </section>

      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ManualCocina.pdf" target="_blank" rel="noopener noreferrer">📄 Manual de Cocina Hospitalaria</a></li>
          <li><a href="/docs/SistemaAPPCC.pdf" target="_blank" rel="noopener noreferrer">📄 Sistema APPCC</a></li>
          <li><a href="/docs/ManipuladorAlimentos.pdf" target="_blank" rel="noopener noreferrer">📄 Manipulador de Alimentos</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Cocina;
