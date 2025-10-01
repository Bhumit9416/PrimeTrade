import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', formData);
      localStorage.setItem('token', data.token); // Store JWT
      setMessage('Login successful!');
      navigate('/dashboard'); // Redirect to protected dashboard
    } catch (error) {
      setMessage(error.response.data.message || 'Login failed.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={onChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;