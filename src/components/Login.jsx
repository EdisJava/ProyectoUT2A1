import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/authSlice';

function Login() {
  const [data, setData] = useState({ user: '', passwd: '' });
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const isVerifiedUser = async () => {
    try {
      const response = await fetch('http://localhost:3030/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: data.user, password: data.passwd }),
      });
      const result = await response.json();

      if (result.data && result.data.length > 0) {
        const user = result.data[0];
        dispatch(authActions.login({ name: user.nombre, rol: user.rol }));
        navigate('/home');
      } else {
        setMessage('Usuario o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al verificar el usuario:', error);
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="user"
        placeholder="Usuario"
        value={data.user}
        onChange={handleChange}
      />
      <input
        type="password"
        name="passwd"
        placeholder="Contraseña"
        value={data.passwd}
        onChange={handleChange}
      />
      <button onClick={isVerifiedUser}>Acceder</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;