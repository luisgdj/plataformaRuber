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

  // Partes de la zona (categoria - subcat - zona)
  const partes = zona.split(' - ');
  const nombreZona = partes[partes.length - 1];

  let nombreDepartamento = '';
  if (partes.length === 3) {
    nombreDepartamento = `${partes[1]} (${partes[0]})`;
  } else if (partes.length === 2) {
    nombreDepartamento = partes[0];
  }

  // Departamentos con sus salas
  const departamentosConSalas = {
    'Diagnóstico por imagen': {
      salas: ['Resonancia Magnética (RM)', 'Radiología Convencional', 'Tomografía Axial Computarizada (TAC)', 'Mamografía', 'Ecografía'],
      ruta: null
    },
    'Instalaciones radiactivas': {
      salas: ['Acelerador lineal', 'Ciberknife', 'SPECT-TAC', 'PET-TAC', 'Gamma Knife'],
      ruta: null
    },
    'Área quirúrgica': {
      salas: ['Quirófanos', 'Intervencionismo y Hemodinámica', 'Esterilización'],
      ruta: null
    },
    'Cuidados críticos': {
      salas: ['Unidad de Cuidados Intensivos (UCI)', 'Urgencias'],
      ruta: null
    },
    'Área de farmacia y laboratorios': {
      salas: ['Laboratorios clínicos', 'Farmacia hospitalaria'],
      ruta: null
    },
    'Hospitalización y consultas': {
      salas: ['Habitaciones', 'Consultas externas'],
      ruta: null
    },
    'Servicios generales': {
      salas: ['Cocina'],
      ruta: null
    }
  };

  // Subcategorías con sus salas
  const subcategoriasConSalas = {
    'Resonancia Magnética (RM)': {
      salas: ['Resonancia Magnética (RM)'],
      ruta: '/zonas/resonancia-magnetica'
    },
    'Radiodiagnóstico (RX, TAC, Mamografía)': {
      salas: ['Radiología Convencional', 'Tomografía Axial Computarizada (TAC)', 'Mamografía'],
      ruta: '/zonas/radiodiagnostico'
    },
    'Medicina nuclear': {
      salas: ['SPECT-TAC', 'PET-TAC'],
      ruta: '/zonas/medicina-nuclear'
    },
    'Oncología radioterápica': {
      salas: ['Acelerador lineal', 'Ciberknife'],
      ruta: '/zonas/oncologia-radioterapica'
    },
    'Unidad gamma': {
      salas: ['Gamma Knife'],
      ruta: '/zonas/unidad-gamma'
    },
    'Quirófanos': {
      salas: ['Quirófanos', 'Reanimación postquirúrgica (URPA)'],
      ruta: '/zonas/quirofanos'
    },
    'Intervencionismo y Hemodinámica': {
      salas: ['Intervencionismo y Hemodinámica'],
      ruta: '/zonas/intervencionismo-hemodinamica'
    },
    'Esterilización': {
      salas: ['Esterilización central'],
      ruta: '/zonas/esterilizacion'
    },
    'Unidad de Cuidados Intensivos (UCI)': {
      salas: ['Unidad de Cuidados Intensivos (UCI)'],
      ruta: '/zonas/uci'
    },
    'Urgencias': {
      salas: ['Urgencias'],
      ruta: '/zonas/urgencias'
    },
    'Laboratorios clínicos': {
      salas: ['Bioquímica', 'Microbiología', 'Hematología'],
      ruta: '/zonas/laboratorios-clinicos'
    },
    'Farmacia hospitalaria': {
      salas: ['Farmacia hospitalaria', 'Banco de sangre'],
      ruta: '/zonas/farmacia-hospitalaria'
    },
    'Habitaciones': {
      salas: ['Habitaciones', 'Controles de enfermería', 'Áreas de aislamiento'],
      ruta: '/zonas/hospitalizacion'
    },
    'Consultas externas': {
      salas: ['Consultas externas'],
      ruta: '/zonas/consultas-externas'
    },
    'Cocina': {
      salas: ['Cocina'],
      ruta: '/zonas/cocina'
    }
  };
  
  // Salas específicas con página propia (las que no son subcategorías)
  const salasConPagina = {
    'Resonancia Magnética (RM)': '/zonas/resonancia-magnetica',
    'Radiodiagnóstico (RX, TAC, Mamografía)': '/zonas/radiodiagnostico',
    'Oncología radioterápica': '/zonas/oncologia-radioterapica',
    'Medicina nuclear': '/zonas/medicina-nuclear',
    'Unidad gamma': '/zonas/unidad-gamma',
    'Quirófanos': '/zonas/quirofanos',
    'Intervencionismo y Hemodinámica': '/zonas/intervencionismo-hemodinamica',
    'Esterilización': '/zonas/esterilizacion',
    'Unidad de Cuidados Intensivos (UCI)': '/zonas/uci',
    'Urgencias': '/zonas/urgencias',
    'Laboratorios clínicos': '/zonas/laboratorios-clinicos',
    'Farmacia hospitalaria': '/zonas/farmacia-hospitalaria',
    'Habitaciones': '/zonas/hospitalizacion',
    'Consultas externas': '/zonas/consultas-externas',
    'Cocina': '/zonas/cocina'
  };

  const nombreVisible = nombreZona;
  
  // Verificar si es departamento, subcategoría o sala
  const esDepartamento = departamentosConSalas[nombreVisible];
  const esSubcategoria = subcategoriasConSalas[nombreVisible];
  const rutaSala = salasConPagina[nombreZona];

  // ============================================
  // VISTA PARA DEPARTAMENTOS PRINCIPALES
  // ============================================
  if (esDepartamento) {
    const { salas } = esDepartamento;
    
    return (
      <div className="panel-info">
        <h2>{nombreVisible}</h2>

        {salas.length > 0 ? (
          <>
            <p>
              Esta zona incluye las siguientes salas:
              <ul className="panel-lista-salas">
                {salas.map((sala, index) => (
                  <li key={index}>{sala}</li>
                ))}
              </ul>
              <br />
              Para más información de cada zona, consulta las páginas específicas.
              <div className="panel-acciones">
                <p>Selecciona una sala específica del mapa o del menú lateral para acceder a su información.</p>
              </div>
            </p>
          </>
        ) : (
          <p>Este departamento aún no tiene salas específicas definidas.</p>
        )}
      </div>
    );
  }

  // ============================================
  // VISTA PARA SUBCATEGORÍAS
  // ============================================
  if (esSubcategoria) {
    const { salas, ruta } = esSubcategoria;
    
    return (
      <div className="panel-info">
        <h2>{nombreVisible}</h2>

        {nombreDepartamento && (
          <p className="panel-departamento">
            <strong>Departamento:</strong> {nombreDepartamento}
          </p>
        )}

        {salas.length > 0 && (
          <>
            <p>Esta zona incluye las zonas de:
              <ul className="panel-lista-salas">
                {salas.map((sala, index) => (
                  <li key={index}>{sala}</li>
                ))}
              </ul>
            </p>
          </>
        )}

        {ruta ? (
          <>
            <p>
              Accede a su página personalizada para consultar información relevante y su formación asociada.
            </p>
            <button onClick={() => navigate(ruta)}>
              Ir a la página de la zona
            </button>
          </>
        ) : (
          <div className="panel-acciones">
            <p><strong>Selecciona una sala específica del mapa o del menú lateral para acceder a su información.</strong></p>
          </div>
        )}
      </div>
    );
  }

  // ============================================
  // VISTA PARA SALAS ESPECÍFICAS
  // ============================================
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
        <p>
          Para más información sobre esta zona, consulta la página de su departamento ({nombreDepartamento}).
          <div className="panel-acciones">
            <p>Selecciona el departamento para acceder a su información.</p>
          </div>
        </p>
      </p>
    </div>
  );
};

export default PanelInfo;
