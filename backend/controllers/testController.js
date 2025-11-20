import { db } from "../config/db.js";

// ---------------------------------------------------------
// Guardar resultado del test (última puntuación del usuario)
// ---------------------------------------------------------
export const guardarResultado = async (req, res) => {
  try {
    const { id_usuario, nombre_test, puntuacion } = req.body;

    if (!id_usuario || !nombre_test || puntuacion === undefined) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    await db.execute(
      "INSERT INTO resultados_test (id_usuario, nombre_test, puntuacion) VALUES (?, ?, ?)",
      [id_usuario, nombre_test, puntuacion]
    );

    res.json({ message: "Resultado guardado correctamente" });
  } catch (error) {
    console.error("Error guardando resultado:", error.message);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// ---------------------------------------------------------
// Obtener resultados generales del usuario
// ---------------------------------------------------------
export const obtenerResultados = async (req, res) => {
  try {
    const { id_usuario } = req.params;

    const [rows] = await db.execute(
      "SELECT * FROM resultados_test WHERE id_usuario = ? ORDER BY fecha DESC",
      [id_usuario]
    );

    res.json(rows);
  } catch (error) {
    console.error("Error obteniendo resultados:", error.message);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// ---------------------------------------------------------
// Guardar historial detallado del test (respuestas una por una)
// ---------------------------------------------------------
export const guardarHistorial = async (req, res) => {
  try {
    const { id_usuario, nombre_test, puntuacion, respuestas } = req.body;

    if (!id_usuario || !nombre_test || puntuacion === undefined || !respuestas) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    await db.execute(
      "INSERT INTO historial_test (id_usuario, nombre_test, puntuacion, respuestas) VALUES (?, ?, ?, ?)",
      [id_usuario, nombre_test, puntuacion, JSON.stringify(respuestas)]
    );

    res.json({ message: "Historial guardado correctamente" });
  } catch (error) {
    console.error("Error guardando historial:", error.message);
    res.status(500).json({ message: "Error guardando historial" });
  }
};