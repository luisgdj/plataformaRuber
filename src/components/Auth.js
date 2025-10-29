import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css'

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';

    try {
      const res = await axios.post(`http://localhost:5000${url}`, formData);

      if (isLogin) {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          onLogin(); // Actualiza estado en App.js
          navigate('/'); // ✅ Redirige al mapa
        } else {
          alert('No se recibió token. Revisa el backend.');
        }
      } else {
        alert('Registro exitoso. Ahora inicia sesión.');
        setIsLogin(true);
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Error en la autenticación');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Entrar' : 'Registrarse'}</button>
      </form>
      <p>
        {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Regístrate' : 'Inicia sesión'}
        </button>
      </p>
    </div>
  );
};

export default Auth;