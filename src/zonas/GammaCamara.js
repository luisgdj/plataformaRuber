import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ZonaInteractiva.css';

const GammaCamara = () => {
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

      <h1>Gamma Cámara</h1><br />

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas importantes</h2>
        <ul className="alertas-lista">
          <li className="alerta-restringido" data-icon="🔒">
            <div>
              <strong>Zona controlada</strong>
              Acceso restringido a personal autorizado. Uso de radiofármacos.
            </div>
          </li>
          <li className="alerta-peligro" data-icon="☢️">
            <div>
              <strong>Material radiactivo</strong>
              Manipulación de radiofármacos. Seguir protocolos de protección radiológica.
            </div>
          </li>
          <li className="alerta-cuidado" data-icon="📏">
            <div>
              <strong>Dosimetría obligatoria</strong>
              Todo el personal expuesto debe llevar dosímetro personal actualizado.
            </div>
          </li>
          <li className="alerta-info" data-icon="🗑️">
            <div>
              <strong>Gestión de residuos</strong>
              Seguir protocolo específico para residuos radiactivos.
            </div>
          </li>
          <li className="alerta-emergencia" data-icon="🚨">
            <div>
              <strong>Kit de derrames</strong>
              Conocer ubicación y procedimiento de actuación ante derrames de material radiactivo.
            </div>
          </li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>
          La gamma cámara es un equipo de medicina nuclear que detecta y registra la radiación 
          gamma emitida por radiofármacos administrados al paciente. Permite obtener imágenes 
          funcionales que muestran la actividad metabólica y fisiológica de órganos y tejidos, 
          complementando la información anatómica de otras técnicas de imagen.
        </p>

        <h3>Funcionamiento básico</h3>
        <p>
          Se administra al paciente un radiofármaco (trazador) que se distribuye en el organismo 
          según su afinidad por determinados tejidos u órganos. El trazador emite radiación gamma 
          que es detectada por los cristales de centelleo de la gamma cámara. La información se 
          procesa para generar imágenes que reflejan la distribución y concentración del trazador.
        </p>

        <h3>Componentes principales</h3>
        <ul>
          <li><strong>Cristal de centelleo:</strong> Generalmente yoduro de sodio (NaI) activado con talio</li>
          <li><strong>Colimador:</strong> Estructura de plomo con múltiples orificios que define la dirección de los fotones</li>
          <li><strong>Fotomultiplicadores:</strong> Convierten la luz en señales eléctricas</li>
          <li><strong>Sistema de procesamiento:</strong> Analiza y procesa las señales para generar imágenes</li>
        </ul>

        <h3>Aplicaciones clínicas principales</h3>
        <ul>
          <li><strong>Gammagrafía ósea:</strong> Detección de metástasis, fracturas, infecciones óseas</li>
          <li><strong>Gammagrafía tiroidea:</strong> Evaluación de función tiroidea, nódulos</li>
          <li><strong>Gammagrafía renal:</strong> Función y perfusión renal, obstrucciones</li>
          <li><strong>Gammagrafía pulmonar:</strong> Diagnóstico de tromboembolismo pulmonar</li>
          <li><strong>Gammagrafía cardíaca:</strong> Perfusión miocárdica, viabilidad del músculo cardíaco</li>
          <li><strong>Gammagrafía de paratiroides:</strong> Localización de adenomas paratiroideos</li>
          <li><strong>Linfogammagrafía:</strong> Estudio del drenaje linfático, detección de ganglio centinela</li>
        </ul>

        <h3>Radiofármacos más utilizados</h3>
        <ul>
          <li><strong>Tc-99m (Tecnecio-99m):</strong> El más utilizado, vida media de 6 horas</li>
          <li><strong>I-123 (Yodo-123):</strong> Estudios de tiroides</li>
          <li><strong>Tl-201 (Talio-201):</strong> Perfusión miocárdica</li>
          <li><strong>Ga-67 (Galio-67):</strong> Procesos inflamatorios e infecciones</li>
          <li><strong>In-111 (Indio-111):</strong> Estudios de leucocitos marcados</li>
        </ul>

        <h3>Tipos de adquisición</h3>
        <ul>
          <li><strong>Imagen estática:</strong> Adquisición en una posición fija durante un tiempo determinado</li>
          <li><strong>Imagen dinámica:</strong> Serie de imágenes secuenciales para estudiar procesos temporales</li>
          <li><strong>Imagen whole-body:</strong> Barrido de cuerpo completo</li>
          <li><strong>Imagen tomográfica (SPECT):</strong> Adquisición en múltiples ángulos para reconstrucción 3D</li>
        </ul>

        <h3>Preparación del paciente</h3>
        <p>
          Varía según el tipo de estudio:
        </p>
        <ul>
          <li>Verificar que no esté embarazada o en periodo de lactancia</li>
          <li>Suspender medicación interferente según protocolo (ej: yodo para estudios tiroideos)</li>
          <li>Ayuno si es necesario (algunos estudios de perfusión miocárdica)</li>
          <li>Hidratación adecuada para facilitar eliminación del trazador</li>
          <li>Retirar objetos metálicos que puedan causar artefactos</li>
          <li>Explicar el procedimiento y tiempo de espera tras administración</li>
        </ul>

        <h3>Protección radiológica</h3>
        <p>
          El personal de medicina nuclear debe seguir estrictos protocolos de protección:
        </p>
        <ul>
          <li><strong>Tiempo:</strong> Minimizar el tiempo de exposición a fuentes radiactivas</li>
          <li><strong>Distancia:</strong> Mantener la máxima distancia posible de las fuentes</li>
          <li><strong>Blindaje:</strong> Utilizar mamparas plomadas, jeringas blindadas, contenedores apropiados</li>
          <li><strong>Dosimetría personal:</strong> Uso obligatorio de dosímetro de solapa y anillo</li>
          <li><strong>Monitorización de áreas:</strong> Control regular de contaminación superficial</li>
        </ul>

        <h3>Administración de radiofármacos</h3>
        <p>
          Procedimiento crítico que requiere:
        </p>
        <ul>
          <li>Verificación de identidad del paciente (doble chequeo)</li>
          <li>Confirmación de actividad y radiofármaco correcto</li>
          <li>Canalización de vía venosa adecuada</li>
          <li>Administración con jeringas blindadas</li>
          <li>Registro de hora, actividad administrada y vía</li>
          <li>Observación del paciente tras administración</li>
        </ul>

        <h3>Gestión de residuos radiactivos</h3>
        <ul>
          <li>Clasificar residuos según vida media del radioisótopo</li>
          <li>Almacenar en contenedores específicos blindados</li>
          <li>Etiquetar con símbolo de radiactividad, fecha y actividad</li>
          <li>Mantener en zona de decaimiento hasta niveles seguros</li>
          <li>Seguir normativa local para eliminación final</li>
        </ul>

        <h3>Manejo de derrames radiactivos</h3>
        <p>
          Protocolo de actuación inmediata:
        </p>
        <ul>
          <li>Alertar al personal, delimitar área contaminada</li>
          <li>Equiparse con guantes, bata, protectores de zapatos</li>
          <li>Absorber líquido con material absorbente desde exterior hacia centro</li>
          <li>Depositar material contaminado en contenedor apropiado</li>
          <li>Medir niveles de contaminación residual</li>
          <li>Documentar el incidente según protocolo</li>
        </ul>

        <h3>Control de calidad</h3>
        <p>
          Programa de control de calidad riguroso:
        </p>
        <ul>
          <li><strong>Diario:</strong> Uniformidad del cristal, verificación visual</li>
          <li><strong>Semanal:</strong> Resolución espacial, linealidad</li>
          <li><strong>Mensual:</strong> Sensibilidad del sistema</li>
          <li><strong>Anual:</strong> Revisión completa por servicio técnico</li>
          <li>Calibración de activímetros (medidor de dosis)</li>
          <li>Verificación de blindajes y señalización</li>
        </ul>

        <h3>Roles del personal</h3>
        <ul>
          <li><strong>Médicos nucleares:</strong> Prescripción de estudios, administración de radiofármacos, interpretación</li>
          <li><strong>Técnicos en medicina nuclear:</strong> Preparación de radiofármacos, adquisición de imágenes</li>
          <li><strong>Radiofarmacéuticos:</strong> Preparación y control de calidad de radiofármacos</li>
          <li><strong>Personal de enfermería:</strong> Canalización venosa, atención al paciente</li>
          <li><strong>Radiofísicos:</strong> Control de calidad, protección radiológica, cálculo de dosis</li>
        </ul>

        <h3>Consideraciones especiales</h3>
        <ul>
          <li><strong>Embarazo y lactancia:</strong> Contraindicado salvo indicación vital, suspender lactancia según radioisótopo</li>
          <li><strong>Pacientes pediátricos:</strong> Ajustar dosis según peso, requieren mayor atención</li>
          <li><strong>Pacientes hospitalizados:</strong> Considerar precauciones con fluidos corporales radiactivos</li>
          <li><strong>Alérgicos:</strong> Aunque raro, pueden presentarse reacciones a componentes del radiofármaco</li>
        </ul>
      </section>

      {/* ===================== DOCUMENTACIÓN ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloGammaCamara.pdf" target="_blank" rel="noopener noreferrer">📄 Protocolos de Gamma Cámara</a></li>
          <li><a href="/docs/ProteccionRadiologicaMN.pdf" target="_blank" rel="noopener noreferrer">📄 Protección Radiológica en Medicina Nuclear</a></li>
          <li><a href="/docs/ManejoDerramesRadiactivos.pdf" target="_blank" rel="noopener noreferrer">📄 Manejo de Derrames Radiactivos</a></li>
          <li><a href="/docs/GestionResiduosRadiactivos.pdf" target="_blank" rel="noopener noreferrer">📄 Gestión de Residuos Radiactivos</a></li>
        </ul>
      </section>
    </div>
  );
};

export default GammaCamara;
