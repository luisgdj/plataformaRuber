import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    dni: ''
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
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="dni"
            placeholder="DNI"
            value={formData.dni}
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