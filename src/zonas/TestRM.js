import React, { useState } from "react";
import axios from "axios";
import "../styles/TestRM.css";

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
    pregunta:
      "¿Qué zona descrita por el ACR corresponde a la sala donde está el imán?",
    opciones: ["Zona 1", "Zona 4", "Zona de control", "Zona técnica"],
    respuesta: ["Zona 4"],
    multiple: false
  },
  {
    id: 3,
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
    id: 4,
    pregunta:
      "¿Cuál es la medida más sencilla para protegerse del ruido durante una RM?",
    opciones: [
      "Poner almohadas alrededor de la cabeza del paciente",
      "Bajar el volumen del sistema de RM",
      "Utilizar tapones desechables de espuma"
    ],
    respuesta: ["Utilizar tapones desechables de espuma"],
    multiple: false
  },
  {
    id: 5,
    pregunta: "Un “quench” es…",
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
    id: 6,
    pregunta: "Escoge los dos objetos que NUNCA deben entrar a la sala de RM:",
        opciones: [
      "Tijeras de titanio",
      "Silla de ruedas etiquetada como “MR Safe”",
      "Oxígeno portátil de acero",
      "Tarjeta bancaria"
    ],
    respuesta: ["Oxígeno portátil de acero", "Tarjeta bancaria"],
    multiple: true
  }
];

const TestRM = () => {
  const [selecciones, setSelecciones] = useState({});
  const [corregido, setCorregido] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  const handleSelect = (id, opcion, multiple) => {
    setSelecciones((prev) => {
      if (!multiple) {
        return { ...prev, [id]: [opcion] };
      }

      const actuales = prev[id] || [];
      if (actuales.includes(opcion)) {
        return { ...prev, [id]: actuales.filter((o) => o !== opcion) };
      } else {
        return { ...prev, [id]: [...actuales, opcion] };
      }
    });
  };

  const corregirTest = async () => {
    let puntos = 0;

    preguntas.forEach((p) => {
      const seleccionadas = selecciones[p.id] || [];
      const correctas = p.respuesta;

      if (
        JSON.stringify([...correctas].sort()) ===
        JSON.stringify([...seleccionadas].sort())
      ) {
        puntos++;
      }
    });

    setPuntuacion(puntos);
    setCorregido(true);

    // 🔥 GUARDAR PUNTUACIÓN EN BACKEND
    try {
      const token = localStorage.getItem("token");
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

      // Extraer id_usuario del token
      const payload = JSON.parse(atob(token.split(".")[1]));
      const id_usuario = payload.id;

      await axios.post(
        `${API_URL}/api/test/guardar`,
        {
          id_usuario,
          nombre_test: "Resonancia Magnética",
          puntuacion: puntos
        },
        { headers: { Authorization: token } }
      );

      console.log("Puntuación guardada correctamente");
    } catch (error) {
      console.error("Error guardando puntuación:", error);
    }
  };

  return (
    <div className="test-container">
      <h2>Test interactivo</h2>

      {preguntas.map((p) => (
        <div key={p.id} className="pregunta">
          <p className="texto-pregunta">{p.pregunta}</p>

          <div className="opciones">
            {p.opciones.map((opcion) => (
              <button
                key={opcion}
                className={`opcion-btn ${
                  selecciones[p.id]?.includes(opcion) ? "seleccionada" : ""
                }`}
                onClick={() => handleSelect(p.id, opcion, p.multiple)}
                disabled={corregido}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      ))}

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