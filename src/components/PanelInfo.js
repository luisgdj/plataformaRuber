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

  // Separar partes de la zona
  const partes = zona.split(' - ');
  const nombreZona = partes[partes.length - 1]; // Último segmento

  // Construir nombre del departamento (sin repetir la zona)
  let nombreDepartamento = '';
  if (partes.length === 3) {
    nombreDepartamento = `${partes[1]} (${partes[0]})`;
  } else if (partes.length === 2) {
    nombreDepartamento = `${partes[0]}`;
  }

  // Mapeo de rutas personalizadas
  const rutasZona = {
    'Resonancia Magnética (RM)': '/zonas/resonancia-magnetica',
    'Radiología convencional': '/zonas/radiologia-convencional',
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

  const nombresExtendidos = {
    'SPECT-TAC': 'Tomografía Computarizada por Emisión de Fotón Único (SPECT-TAC)',
    'PET-TAC': 'Tomografía por Emisión de Positrones (PET-TAC)',
  };

  const ruta = rutasZona[nombreZona];
  const nombreVisible = nombresExtendidos[nombreZona] || nombreZona;

  // Si el usuario ha elegido "test" y está en RM, mostramos el test dentro del panel
  if (tipo === 'test' && nombreZona === 'Resonancia Magnética (RM)') {
    return (
      <div className="panel-info">
        <h2>{nombreVisible}</h2>

        {nombreDepartamento && (
          <p className="panel-departamento">
            <strong>Departamento:</strong> {nombreDepartamento}
          </p>
        )}

        <p className="panel-intro">
          Test interactivo de seguridad en resonancia magnética.
          Responde a las preguntas y tu puntuación quedará registrada.
        </p>

        {/* 🔥 Aquí se muestra el test */}
        <TestRM />
      </div>
    );
  }

  // Si el tipo es test pero la zona aún no tiene uno definido
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
          <button onClick={() => navigate(ruta)}>
            Ir a la página de la zona
          </button>
        )}
      </div>
    );
  }

  // Vista general (alertas / texto / vídeo) – por ahora mensaje genérico
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
          Esta zona contiene información especializada. Puedes acceder a su página
          personalizada para ver vídeos, protocolos, alertas y más.
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