'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('/api/register', userData);

      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Register;
