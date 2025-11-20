import express from "express";
import { guardarResultado, guardarHistorial, obtenerResultados } from "../controllers/testController.js";

const router = express.Router();

router.post("/guardar", guardarResultado);
router.post("/historial", guardarHistorial);
router.get("/resultados/:id_usuario", obtenerResultados);

export default router;