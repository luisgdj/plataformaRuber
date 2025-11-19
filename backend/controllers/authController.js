import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../config/db.js';

// Registro con correo y contraseña
export const registerUser = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    if (!correo || !contraseña) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Comprobar si el correo ya está registrado
    const [exists] = await db.execute('SELECT * FROM users WHERE correo = ?', [correo]);
    if (exists.length > 0) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Insertar usuario
    await db.execute(
      'INSERT INTO users (correo, `contraseña`) VALUES (?, ?)',
      [correo, hashedPassword]
    );

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error en registerUser:', error.message);
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

// Login con correo y contraseña
export const loginUser = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    if (!correo || !contraseña)
      return res.status(400).json({ message: 'Correo y contraseña obligatorios' });

    // Buscar usuario por correo
    const [rows] = await db.execute('SELECT * FROM users WHERE correo = ?', [correo]);
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const user = rows[0];

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(contraseña, user["contraseña"]);
    if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

    // Generar token
    const token = jwt.sign(
      { id: user.id, correo: user.correo },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({
      token,
      user: { id: user.id, correo: user.correo }
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