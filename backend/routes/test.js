import express from "express";
import { guardarResultado, obtenerResultados } from "../controllers/testController.js";

const router = express.Router();

router.post("/guardar", guardarResultado);
router.get("/resultados/:id_usuario", obtenerResultados);

export default router;