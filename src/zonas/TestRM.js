import React, { useState } from "react";
import "../styles/TestRM.css";
import axios from "axios";

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
    if (corregido) return;
    setSelecciones((prev) => {
      if (!multiple) return { ...prev, [id]: [opcion] };

      const actuales = prev[id] || [];
      return actuales.includes(opcion)
        ? { ...prev, [id]: actuales.filter((o) => o !== opcion) }
        : { ...prev, [id]: [...actuales, opcion] };
    });
  };

  const corregirTest = async () => {
    let puntos = 0;

    preguntas.forEach((p) => {
      const seleccion = selecciones[p.id] || [];
      const correctas = [...p.respuesta].sort();
      const elegidas = [...seleccion].sort();

      if (JSON.stringify(correctas) === JSON.stringify(elegidas)) {
        puntos++;
      }
    });

    setPuntuacion(puntos);
    setCorregido(true);

    // Guardar en backend
    try {
      const token = localStorage.getItem("token");
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const payload = JSON.parse(atob(token.split(".")[1]));

      await axios.post(
        `${API_URL}/api/test/guardar`,
        {
          id_usuario: payload.id,
          nombre_test: "Resonancia Magnética",
          puntuacion: puntos
        },
        { headers: { Authorization: token } }
      );
    } catch (error) {
      console.error("Error guardando puntuación:", error);
    }
  };

  const esCorrecta = (p, opcion) => {
    return p.respuesta.includes(opcion);
  };

  const esSeleccionada = (id, opcion) => {
    return selecciones[id]?.includes(opcion);
  };

  return (
    <div className="test-container">
      <h2>Test interactivo</h2>

      {preguntas.map((p) => (
        <div key={p.id} className="pregunta">
          <p className="texto-pregunta">{p.pregunta}</p>

          <div className="opciones">
            {p.opciones.map((opcion) => {
              let clase = "opcion-btn";

              if (corregido) {
                if (esSeleccionada(p.id, opcion) && esCorrecta(p, opcion))
                  clase += " correcta";

                if (esSeleccionada(p.id, opcion) && !esCorrecta(p, opcion))
                  clase += " incorrecta";

                if (!esSeleccionada(p.id, opcion) && esCorrecta(p, opcion))
                  clase += " correcta-oculta";
              } else {
                if (esSeleccionada(p.id, opcion)) clase += " seleccionada";
              }

              return (
                <button
                  key={opcion}
                  className={clase}
                  onClick={() => handleSelect(p.id, opcion, p.multiple)}
                  disabled={corregido}
                >
                  {opcion}

                  {corregido && esSeleccionada(p.id, opcion) && esCorrecta(p, opcion) && (
                    <span className="icono correcto">✓</span>
                  )}

                  {corregido && esSeleccionada(p.id, opcion) && !esCorrecta(p, opcion) && (
                    <span className="icono incorrecto">✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {corregido && (
            <p className="respuesta-correcta">
              ✔ Respuesta correcta: <strong>{p.respuesta.join(", ")}</strong>
            </p>
          )}
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
