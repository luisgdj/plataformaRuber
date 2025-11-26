import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/TestFormat.css";

const preguntas = [
  {
    id: 1,
    pregunta: "¿Qué campo de la resonancia magnética está siempre encendido?",
    opciones: [
      "El cambio de radiofrecuencia",
      "La luz del escáner",
      "El campo magnético estático",
      "El campo de gradientes"
    ],
    respuesta: ["El campo magnético estático"],
    multiple: false
  },
  {
    id: 2,
    pregunta: "¿El imán está siempre encendido?",
    opciones: ["Sí", "No"],
    respuesta: ["Sí"],
    multiple: false
  },
  {
    id: 3,
    pregunta:
      "¿Qué zona descrita por el ACR corresponde a la sala donde está el imán?",
    opciones: ["Zona 1", "Zona 4", "Zona de control", "Zona técnica"],
    respuesta: ["Zona 4"],
    multiple: false
  },
  {
    id: 4,
    pregunta: "Antes de entrar a la sala de RM debes…",
    opciones: [
      "Preguntar si hace frío",
      "Guardar tus pertenencias metálicas",
      "Tomarte la tensión",
      "Firmar un permiso especial todos los días"
    ],
    respuesta: ["Guardar tus pertenencias metálicas"],
    multiple: false
  },
  {
    id: 5,
    pregunta: "¿Cuál es la medida más sencilla para protegerse del ruido durante una RM?",
    opciones: [
      "Poner almohadas alrededor de la cabeza del paciente",
      "Bajar el volumen del sistema de RM",
      "Utilizar tapones desechables de espuma"
    ],
    respuesta: ["Utilizar tapones desechables de espuma"],
    multiple: false
  },
  {
    id: 6,
    pregunta: "Un 'quench' es…",
    opciones: [
      "Un apagado de emergencia del imán",
      "Un error de software",
      "Una vibración normal del escáner",
      "Un tipo de extintor"
    ],
    respuesta: ["Un apagado de emergencia del imán"],
    multiple: false
  },
  {
    id: 7,
    pregunta: "Escoge tres objetos que NUNCA deben entrar a la sala de RM:",
    opciones: [
      "Tijeras",
      "Silla de ruedas etiquetada como 'MR Safe'",
      "Oxígeno portátil de acero",
      "Tarjeta bancaria"
    ],
    respuesta: ["Tijeras", "Oxígeno portátil de acero", "Tarjeta bancaria"],
    multiple: true
  },
  {
    id: 8,
    pregunta: "¿Quién puede autorizar la entrada a la sala del imán (Zona 4)?",
    opciones: [
      "Cualquier persona con uniforme del hospital",
      "Cualquier adulto",
      "Personal entrenado en seguridad RM"
    ],
    respuesta: ["Personal entrenado en seguridad RM"],
    multiple: false
  },
  {
    id: 9,
    pregunta:
      "¿Cuál es el mayor riesgo al entrar con objetos metálicos ferromagnéticos a la sala de RM?",
    opciones: [
      "Que se rompan",
      "Que hagan interferencias",
      "Que sean atraídos violentamente por el imán",
      "Que hagan ruido"
    ],
    respuesta: ["Que sean atraídos violentamente por el imán"],
    multiple: false
  },
  {
    id: 10,
    pregunta: "Escoge dos objetos que NUNCA deben entrar a la sala de RM:",
    opciones: [
      "Grapas metálicas de quirófano",
      "Ropa térmica o leggins deportivos",
      "Termómetro digital",
      "Monitor de constantes vitales con etiqueta MR Conditional"
    ],
    respuesta: ["Grapas metálicas de quirófano", "Ropa térmica o leggins deportivos"],
    multiple: true
  },
  {
    id: 11,
    pregunta: "¿Qué etiqueta indica que un objeto NO puede entrar en la sala de RM?",
    opciones: ["MR Safe", "MR Conditional", "MR Friendly", "MR Unsafe"],
    respuesta: ["MR Unsafe"],
    multiple: false
  },
  {
    id: 12,
    pregunta: "¿Qué debe hacer un usuario con implante metálico no verificado?",
    opciones: [
      "Entrar solo a Zona 2",
      "Entrar a Zona 4 si no hay paciente",
      "No entrar nunca en el entorno de MR",
      "Tocar el imán para ver si hay atracción"
    ],
    respuesta: ["No entrar nunca en el entorno de MR"],
    multiple: false
  },
  {
    id: 13,
    pregunta: "¿Para qué sirve la 'Parada de emergencia'?",
    opciones: [
      "Para apagar el imán",
      "Para detener la mesa o el sistema eléctrico sin quench",
      "Para bloquear la puerta",
      "Para desconectar el aire acondicionado"
    ],
    respuesta: ["Para detener la mesa o el sistema eléctrico sin quench"],
    multiple: false
  }
];

const TestRM = () => {
  const navigate = useNavigate();
  const [selecciones, setSelecciones] = useState({});
  const [corregido, setCorregido] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  const handleSelect = (id, opcion, multiple) => {
    if (corregido) return;

    setSelecciones((prev) => {
      if (!multiple) return { ...prev, [id]: [opcion] };

      const prevSel = prev[id] || [];
      return prevSel.includes(opcion)
        ? { ...prev, [id]: prevSel.filter((o) => o !== opcion) }
        : { ...prev, [id]: [...prevSel, opcion] };
    });
  };

  const corregirTest = async () => {
    let puntos = 0;

    preguntas.forEach((p) => {
      const seleccionadas = selecciones[p.id] || [];
      const correctas = [...p.respuesta].sort();
      const elegidas = [...seleccionadas].sort();

      if (JSON.stringify(correctas) === JSON.stringify(elegidas)) puntos++;
    });

    setPuntuacion(puntos);
    setCorregido(true);

    try {
      const token = localStorage.getItem("token");
      const payload = JSON.parse(atob(token.split(".")[1]));
      const id_usuario = payload.id;
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

      await axios.post(
        `${API_URL}/api/test/guardar`,
        {
          id_usuario,
          nombre_test: "Resonancia Magnética",
          puntuacion: puntos
        },
        { headers: { Authorization: token } }
      );

      await axios.post(
        `${API_URL}/api/test/historial`,
        {
          id_usuario,
          nombre_test: "Resonancia Magnética",
          puntuacion: puntos,
          respuestas: selecciones
        },
        { headers: { Authorization: token } }
      );
    } catch (error) {
      console.error("Error guardando historial:", error);
    }
  };

  return (
    <div className="test-container">
      {/* BOTÓN DE VOLVER */}
      <div className="test-header">
        <button 
          onClick={() => navigate('/zonas/resonancia-magnetica')}
          className="btn-volver"
        >
          ← Volver a Resonancia Magnética
        </button>
      </div>

      <h2>Test de Resonancia Magnética</h2>
      <p className="test-descripcion">
        Completa este test para evaluar tus conocimientos sobre seguridad 
        en instalaciones de Resonancia Magnética.
      </p>

      {preguntas.map((p) => {
        const seleccionadas = selecciones[p.id] || [];
        const correctas = p.respuesta;
        const esCorrecta =
          JSON.stringify([...seleccionadas].sort()) ===
          JSON.stringify([...correctas].sort());

        return (
          <div key={p.id} className="pregunta">
            <p className="texto-pregunta">{p.pregunta}</p>

            <div className="opciones">
              {p.opciones.map((opcion) => {
                const seleccionada = seleccionadas.includes(opcion);

                return (
                  <button
                    key={opcion}
                    className={`opcion-btn 
                      ${!corregido && seleccionada ? "seleccionada" : ""}
                      ${corregido && seleccionada && esCorrecta ? "correcta" : ""}
                      ${corregido && seleccionada && !esCorrecta ? "incorrecta" : ""}
                      ${corregido && !seleccionada && esCorrecta ? "correcta-oculta" : ""}
                    `}
                    onClick={() => handleSelect(p.id, opcion, p.multiple)}
                    disabled={corregido}
                  >
                    {opcion}

                    {corregido && seleccionada && esCorrecta && (
                      <span className="tick">✓</span>
                    )}

                    {corregido && seleccionada && !esCorrecta && (
                      <span className="cross">✗</span>
                    )}
                  </button>
                );
              })}
            </div>

            {corregido && !esCorrecta && (
              <p className="respuesta-correcta">
                ✓ Respuesta correcta: <strong>{correctas.join(", ")}</strong>
              </p>
            )}
          </div>
        );
      })}

      {!corregido && (
        <button className="corregir-btn" onClick={corregirTest}>
          Corregir test
        </button>
      )}

      {corregido && (
        <div className="resultado">
          <h3>Resultado final</h3>
          <p>
            Tu puntuación es <strong>{puntuacion}</strong> / {preguntas.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default TestRM;
