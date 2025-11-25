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
      </div>
    );
  }

  return (
    <div className="panel-info">
      <h2>{nombreVisible}</h2>

      {nombreDepartamento && (
        <p className="panel-departamento">
          <strong>Departamento:</strong> {nombreDepartamento}
        </p>
      )}

      <p>
        Has seleccionado la zona de <strong>{nombreVisible}</strong>
        <br /> <br />
        Accede a su página personalizada para consultar alertas de seguridad, 
        vídeos formativos, protocolos y procedimientos detallados.
      </p>

      {ruta && (
        <button onClick={() => navigate(ruta)}>
          Ir a la página de la zona
        </button>
      )}
    </div>
  );
};

export default PanelInfo;
