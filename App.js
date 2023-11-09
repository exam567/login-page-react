// App.js
import React, { useState } from 'react';
import './App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>or login with</p>

        <div className="social-login-options">
          <a href="#google-login" className="google-login">
            <i className="fab fa-google"></i> Sign up with Google
          </a>
          <a href="#facebook-login" className="facebook-login">
            <i className="fab fa-facebook"></i> Sign up with Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

