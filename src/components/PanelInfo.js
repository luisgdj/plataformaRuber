import React from 'react';
import '../styles/PanelInfo.css';
import { useNavigate } from 'react-router-dom';
import TestRM from '../zonas/TestRM';

const PanelInfo = ({ zona, tipo }) => {
  const navigate = useNavigate();

  if (!zona) {
    return (
      <div className="panel-info">
        <h2>Selecciona una zona del mapa</h2>
        <p>Haz clic en una categoría o subzona para ver más información.</p>
      </div>
    );
  }

  // Partes de la zona (categoria - subcat - zona)
  const partes = zona.split(' - ');
  const nombreZona = partes[partes.length - 1];

  let nombreDepartamento = '';
  if (partes.length === 3) {
    nombreDepartamento = `${partes[1]} (${partes[0]})`;
  } else if (partes.length === 2) {
    nombreDepartamento = partes[0];
  }

  const rutasZona = {
    'Resonancia Magnética (RM)': '/zonas/resonancia-magnetica',
    'Radiología Convencional': '/zonas/radiologia-convencional',
    'Tomografía Axial Computarizada (TAC)': '/zonas/tac',
    'Ecografía': '/zonas/ecografia',
    'Mamografía': '/zonas/mamografia',
    'Gamma cámara': '/zonas/gamma-camara',
    'SPECT-TAC': '/zonas/spect-tac',
    'PET-TAC': '/zonas/pet-tac',
    'Acelerador lineal': '/zonas/acelerador-lineal',
    'Ciberknife': '/zonas/ciberknife',
    'Gamma Knife': '/zonas/gammaknife',
  };

  const nombreVisible = nombreZona;
  const ruta = rutasZona[nombreZona];

  // --------------------------------------------------------
  //            🔥 TEST INTERACTIVO DE RM
  // --------------------------------------------------------

  const zonaEsRM = nombreZona.toLowerCase().includes("resonancia");

  if (tipo === "test" && zonaEsRM) {
    return (
      <div className="panel-info">
        <h2>{nombreVisible}</h2>

        {nombreDepartamento && (
          <p className="panel-departamento">
            <strong>Departamento:</strong> {nombreDepartamento}
          </p>
        )}

        <p className="panel-intro">
          Test interactivo de seguridad en Resonancia Magnética.
          Responde a las preguntas y tu puntuación quedará registrada.
        </p>

        <TestRM />
      </div>
    );
  }

  // --------------------------------------------------------
  //            🔥 SI ES TEST PERO NO TIENE TEST
  // --------------------------------------------------------

  if (tipo === 'test') {
    return (
      <div className="panel-info">
        <h2>{nombreVisible}</h2>

        {nombreDepartamento && (
          <p className="panel-departamento">
            <strong>Departamento:</strong> {nombreDepartamento}
          </p>
        )}

        <p>
          En esta zona todavía no hay un test interactivo disponible. Puedes acceder a su
          página para consultar alertas, vídeos o documentación.
        </p>

        {ruta && (
          <button onClick={() => navigate(ruta)}>Ir a la página de la zona</button>
        )}
      </div>
    );
  }

  // --------------------------------------------------------
  //            🔥 VISTAS NORMALES
  // --------------------------------------------------------

  return (
    <div className="panel-info">
      <h2>{nombreVisible}</h2>

      {nombreDepartamento && (
        <p className="panel-departamento">
          <strong>Departamento:</strong> {nombreDepartamento}
        </p>
      )}

      {tipo === 'alertas' && (
        <p>
          Has seleccionado <strong>Alertas</strong>. En la página de la zona encontrarás las
          alertas activas y recomendaciones específicas de seguridad.
        </p>
      )}

      {tipo === 'video' && (
        <p>
          Has seleccionado <strong>Vídeo explicativo</strong>. En la página de la zona puedes
          ver el vídeo formativo asociado a este área.
        </p>
      )}

      {tipo === 'texto' && (
        <p>
          Has seleccionado <strong>Texto explicativo</strong>. En la página de la zona tienes
          información detallada sobre procedimientos y buenas prácticas.
        </p>
      )}

      {!['alertas', 'video', 'texto', 'test'].includes(tipo) && (
        <p>
          Esta zona contiene información especializada. Puedes acceder a su página personalizada
          para ver vídeos, protocolos, alertas y más.
        </p>
      )}

      {ruta && (
        <button onClick={() => navigate(ruta)}>
          Ir a la página de la zona
        </button>
      )}
    </div>
  );
};

export default PanelInfo;