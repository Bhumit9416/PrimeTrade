import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage(error.response.data.message || 'Registration failed.'); // Show API error message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={onChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>} {/* Show success/error messages */}
    </div>
  );
};

export default RegisterPage;