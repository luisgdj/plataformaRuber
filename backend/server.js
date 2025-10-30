import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api', authRoutes);

// Escuchar en todas las interfaces
app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${process.env.PORT}`);
});