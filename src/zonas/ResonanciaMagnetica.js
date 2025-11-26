// src/zonas/ResonanciaMagnetica.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ZonaInteractiva.css';
import '../styles/Mapa.css';

const ResonanciaMagnetica = () => {
  const navigate = useNavigate();
  const rutaSvg = '/mapas/plantaS1-RM.svg';
  
  // Estado para controlar qué zona está expandida
  const [zonaExpandida, setZonaExpandida] = useState(null);
  
  // Estados para el test
  const [testCompletado, setTestCompletado] = useState(false);
  const [puntuacionTest, setPuntuacionTest] = useState(null);
  const [cargando, setCargando] = useState(true);

  const toggleZona = (zona) => {
    setZonaExpandida(zonaExpandida === zona ? null : zona);
  };

  // Verificar si el usuario ya completó el test
  useEffect(() => {
    const verificarEstadoTest = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setCargando(false);
          return;
        }

        const payload = JSON.parse(atob(token.split('.')[1]));
        const id_usuario = payload.id;
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

        console.log('🔍 [ZONA] Verificando estado del test para usuario:', id_usuario);

        const response = await axios.get(
          `${API_URL}/api/test/estado/${id_usuario}/Resonancia Magnética`,
          { headers: { Authorization: token } }
        );

        console.log('📊 [ZONA] Respuesta del servidor:', response.data);

        if (response.data.completado) {
          console.log('✅ [ZONA] Test ya completado con puntuación:', response.data.puntuacion);
          setTestCompletado(true);
          setPuntuacionTest(response.data.puntuacion);
        } else {
          console.log('⏳ [ZONA] Test pendiente de realizar');
        }
      } catch (error) {
        console.error('❌ [ZONA] Error verificando estado del test:', error);
      } finally {
        setCargando(false);
      }
    };

    verificarEstadoTest();
  }, []);

  // Función para manejar el intento de acceso al test
  const handleAccesoTest = () => {
    if (testCompletado) {
      // BLOQUEAR: No permitir acceso si ya completado
      alert('⚠️ Ya has completado este test\n\nTu puntuación: ' + puntuacionTest + ' / 13\n\nNo puedes volver a realizarlo.');
      console.log('🚫 [ZONA] Acceso bloqueado - Test ya completado');
      return;
    }
    
    // Permitir acceso si no completado
    console.log('✅ [ZONA] Permitiendo acceso al test');
    navigate('/tests/resonancia-magnetica');
  };

  return (
    <div className="zona-interactiva">
      <h1>Resonancia magnética (RM)</h1>
      <p>
        Las instalaciones de Resonancia Magnética se dividen en cuatro zonas de seguridad,
        cada una con niveles de control de acceso y restricciones específicos.
      </p>

      {/* ===================== MAPA ===================== */}
      <section className="mapa-apartado">
        <h2>Zonas de seguridad de Resonancia Magnética</h2>
        <div className="mapa-contenedor-rm">

          <div className="mapa-info-rm">
            <div className="zona-info-card zona-1">
              <h3 onClick={() => toggleZona('zona1')} className="zona-titulo-clickable">
                <span className={`zona-icono ${zonaExpandida === 'zona1' ? 'expandido' : ''}`}>▶</span>
                Zona I: Acceso libre
              </h3>
              {zonaExpandida === 'zona1' && (
                <ul className="zona-contenido-desplegable">
                  <li>Áreas de espera y recepción.</li>
                  <li>Tránsito libre para el público general.</li>
                </ul>
              )}
            </div>

            <div className="zona-info-card zona-2">
              <h3 onClick={() => toggleZona('zona2')} className="zona-titulo-clickable">
                <span className={`zona-icono ${zonaExpandida === 'zona2' ? 'expandido' : ''}`}>▶</span>
                Zona II: Transición
              </h3>
              {zonaExpandida === 'zona2' && (
                <ul className="zona-contenido-desplegable">
                  <li>Supervisada por personal capacitado.</li>
                  <li>Se realiza detección inicial de metales.</li>
                </ul>
              )}
            </div>

            <div className="zona-info-card zona-3">
              <h3 onClick={() => toggleZona('zona3')} className="zona-titulo-clickable">
                <span className={`zona-icono ${zonaExpandida === 'zona3' ? 'expandido' : ''}`}>▶</span>
                Zona III: Acceso restringido
              </h3>
              {zonaExpandida === 'zona3' && (
                <ul className="zona-contenido-desplegable">
                  <li>Solo personal autorizado.</li>
                  <li>Se retiran objetos metálicos.</li>
                </ul>
              )}
            </div>

            <div className="zona-info-card zona-4">
              <h3 onClick={() => toggleZona('zona4')} className="zona-titulo-clickable">
                <span className={`zona-icono ${zonaExpandida === 'zona4' ? 'expandido' : ''}`}>▶</span>
                Zona IV: Sala del imán
              </h3>
              {zonaExpandida === 'zona4' && (
                <ul className="zona-contenido-desplegable">
                  <li>Ubicación del equipo RM.</li>
                  <li>Acceso completamente controlado.</li>
                  <li>Solo personal de RM durante la exploración.</li>
                </ul>
              )}
            </div>
          </div>

          <div className="mapa-visual-rm">
            <img 
              src={rutaSvg}
              alt="Mapa de zonas de seguridad RM"
              className="mapa-imagen-rm"
            />
          </div>

        </div>
      </section>

      {/* ===================== ALERTAS ===================== */}
      <section>
        <h2>Alertas activas</h2>
        <ul className="alertas-lista">
          <li>🔒 <strong>Acceso restringido:</strong> Solo personal formado.</li>
          <li>🧲 <strong>Campo magnético permanente:</strong> Peligro con objetos metálicos.</li>
          <li>❤️ <strong>Implantes:</strong> Avisar si lleva dispositivos médicos.</li>
          <li>🧰 <strong>Equipos de trabajo:</strong> Deben ser MR Safe o MR Conditional.</li>
          <li>🚨 <strong>Emergencias:</strong> Siga indicaciones del técnico.</li>
        </ul>
      </section>

      {/* ===================== INFORMACIÓN ===================== */}
      <section>
        <h2>Información general</h2>
        <p>La resonancia magnética utiliza campos magnéticos y ondas de radio para obtener imágenes detalladas del cuerpo humano.</p>
      </section>

      {/* ===================== VIDEO ===================== */}
      <section>
        <h2>Vídeo explicativo</h2>
        <video controls src="/videos/Resonancia magnética (RM).mp4" />
      </section>

      {/* ===================== DOCUMENTOS ===================== */}
      <section>
        <h2>Documentación</h2>
        <ul className="documentos-lista">
          <li><a href="/docs/ProtocoloSeguridadRM.pdf" target="_blank" rel="noopener noreferrer">Protocolo de Seguridad</a></li>
          <li><a href="/docs/EtiquetadoMaterialesRM.pdf" target="_blank" rel="noopener noreferrer">Etiquetado de Materiales</a></li>
          <li><a href="/docs/ManualSeguridadRM.pdf" target="_blank" rel="noopener noreferrer">Manual de Seguridad</a></li>
        </ul>
      </section>

      {/* ===================== SECCIÓN DE TEST CON BLOQUEO ===================== */}
      <section>
        <h2>Test de conocimientos</h2>
        
        {cargando ? (
          <div className="test-cargando">
            <p>⏳ Cargando estado del test...</p>
          </div>
        ) : testCompletado ? (
          // Test YA completado - BLOQUEAR ACCESO
          <div className="test-completado">
            <div className="test-resultado-card">
              <div className="test-resultado-icono">🔒</div>
              <h3>Test completado</h3>
              <p className="test-puntuacion">
                Puntuación obtenida: <strong>{puntuacionTest} / 13</strong>
              </p>
              <p className="test-mensaje">
                {puntuacionTest >= 10 
                  ? '¡Excelente! Has demostrado un buen conocimiento sobre seguridad en RM.' 
                  : 'Has completado el test. Revisa el material para mejorar tus conocimientos.'}
              </p>
              <div className="test-bloqueado-info">
                <p><strong>⚠️ Este test solo se puede realizar una vez</strong></p>
                <p>Ya no puedes acceder a él para realizarlo de nuevo.</p>
              </div>
            </div>
          </div>
        ) : (
          // Test PENDIENTE - Permitir acceso
          <div className="test-pendiente">
            <p>Evalúa tus conocimientos sobre seguridad en Resonancia Magnética.</p>
            <p className="test-info">
              ⏱️ Duración aproximada: 10-15 minutos<br />
              📝 13 preguntas sobre seguridad en RM<br />
              ⚠️ <strong>Solo podrás realizar el test una vez</strong>
            </p>
            <button 
              onClick={handleAccesoTest}
              className="btn-iniciar-test"
            >
              Iniciar test
            </button>
          </div>
        )}
      </section>

    </div>
  );
};

export default ResonanciaMagnetica;
