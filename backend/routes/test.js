import express from 'express';
const router = express.Router();

// GET /api/test/estado/:id_usuario/:nombre_test
router.get('/estado/:id_usuario/:nombre_test', verificarToken, async (req, res) => {
  try {
    const { id_usuario, nombre_test } = req.params;
    
    console.log('🔍 [BACKEND] Verificando test:', { id_usuario, nombre_test });
    
    // Buscar en resultados_test
    const query = `
      SELECT puntuacion, fecha 
      FROM resultados_test 
      WHERE id_usuario = ? AND nombre_test = ? 
      LIMIT 1
    `;
    
    const [resultados] = await connection.query(query, [id_usuario, nombre_test]);
    
    console.log('📊 [BACKEND] Resultados:', resultados);
    
    if (resultados.length > 0) {
      console.log('✅ [BACKEND] Test completado');
      res.json({
        completado: true,
        puntuacion: resultados[0].puntuacion,
        fecha: resultados[0].fecha
      });
    } else {
      console.log('⏳ [BACKEND] Test pendiente');
      res.json({
        completado: false
      });
    }
  } catch (error) {
    console.error('❌ [BACKEND] Error:', error);
    res.status(500).json({ 
      error: 'Error en el servidor',
      mensaje: error.message 
    });
  }
});
export default router;
