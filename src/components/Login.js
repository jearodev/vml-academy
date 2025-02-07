import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = 'Clavered1!'; // Cambia esta contraseña por la que desees usar
    if (password === correctPassword) {
      onLogin();
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div className='login'>
      <h2>Acceso Privado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Introduce tu contraseña'
        />
        <button type='submit'>Entrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
