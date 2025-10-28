import React from 'react';
import '../styles/PanelInfo.css';
import { useNavigate } from 'react-router-dom';

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
    "Resonancia Magnética (RM)": "/zonas/resonancia-magnetica",
    "Radiología convencional": "/zonas/radiologia-convencional",
    "Tomografía Axial Computarizada (TAC)": "/zonas/tac",
    "Ecografía": "/zonas/ecografia",
    "Mamografía": "/zonas/mamografia",
    "Gamma cámara": "/zonas/gamma-camara",
    "SPECT-TAC": "/zonas/spect-tac",
    "PET-TAC": "/zonas/pet-tac",
    "Acelerador lineal": "/zonas/acelerador-lineal",
    "Ciberknife": "/zonas/ciberknife"
    // Añade más si lo necesitas
  };

  const nombresExtendidos = {
    "SPECT-TAC": "Tomografía Computarizada por Emisión de Fotón Único (SPECT-TAC)",
    "PET-TAC": "Tomografía por Emisión de Positrones (PET-TAC)"
  };

  const ruta = rutasZona[nombreZona];
  const nombreVisible = nombresExtendidos[nombreZona] || nombreZona;

  return (
    <div className="panel-info">
      <h2>{nombreVisible}</h2>

      {nombreDepartamento && (
        <p className="panel-departamento">
          <strong>Departamento:</strong> {nombreDepartamento}
        </p>
      )}

      <p>Esta zona contiene información especializada. Puedes acceder a su página personalizada para ver vídeos, protocolos, alertas y más.</p>

      {ruta && (
        <button onClick={() => navigate(ruta)}>
          Ir a la página de la zona
        </button>
      )}
    </div>
  );
};

export default PanelInfo;
