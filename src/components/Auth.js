import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Ahora solo tiene correo y contraseña
  const [formData, setFormData] = useState({
    correo: '',
    contraseña: ''
  });

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';

    try {
      const res = await axios.post(`${API_URL}${url}`, formData);

      if (isLogin) {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          onLogin();
          navigate('/');
        } else {
          alert('No se recibió token.');
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
    <div className="auth-page">
      <div className="auth-card">
        <img
          src="/logo.svg"
          alt="Logo Hospital Ruber Internacional"
          className="auth-logo"
        />

        <h2>{isLogin ? "Iniciar sesión" : "Registrarse"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {isLogin ? "Entrar" : "Registrarse"}
          </button>
        </form>

        <p>
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <button
            type="button"
            className="switch-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Regístrate" : "Inicia sesión"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;