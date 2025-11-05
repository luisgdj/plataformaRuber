import { db } from '../config/db.js';
import jwt from 'jsonwebtoken';

// Registro con nombre, apellidos y DNI
export const registerUser = async (req, res) => {
  try {
    const { nombre, apellidos, dni } = req.body;
    if (!nombre || !apellidos || !dni) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Comprobar si el DNI ya está registrado
    const [exists] = await db.execute('SELECT * FROM users WHERE dni = ?', [dni]);
    if (exists.length > 0) {
      return res.status(400).json({ message: 'El DNI ya está registrado' });
    }

    // Insertar nuevo usuario
    await db.execute(
      'INSERT INTO users (nombre, apellidos, dni) VALUES (?, ?, ?)',
      [nombre, apellidos, dni]
    );

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error en registerUser:', error.message);
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

// Login con nombre, apellidos y DNI
export const loginUser = async (req, res) => {
  try {
    const { nombre, apellidos, dni } = req.body;

    if (!nombre || !apellidos || !dni)
      return res.status(400).json({ message: 'Faltan datos para iniciar sesión' });

    const [rows] = await db.execute(
      'SELECT * FROM users WHERE nombre = ? AND apellidos = ? AND dni = ?',
      [nombre, apellidos, dni]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado o datos incorrectos' });
    }

    const user = rows[0];

    // Generar token JWT
    const token = jwt.sign(
      { id: user.id, nombre: user.nombre, apellidos: user.apellidos, dni: user.dni },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({
      token,
      user: { id: user.id, nombre: user.nombre, apellidos: user.apellidos, dni: user.dni },
    });
  } catch (error) {
    console.error('Error en loginUser:', error.message);
    res.status(500).json({ message: 'Error en el login', error: error.message });
  }
};

// Ruta protegida
export const protectedRoute = (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token requerido' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    res.json({ message: 'Acceso permitido', user: decoded });
  });
};