import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@') || password.length < 8 || password !== repeatPassword) {
      alert('Invalid input or passwords do not match');
      return;
    }
    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
      .then(res => {
    if (!res.ok) {
      return res.text().then(text => { throw new Error(text); });  // Get text if not JSON
    }
    return res.json();
  })
  .then(data => {
    alert('Signup successful (stubbed)');
    navigate('/home');  // Redirect to home page
  })
  .catch(err => {
    console.error('Fetch error:', err);
    alert('Signup failed: ' + err.message);
  });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required placeholder="Password" />
      <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} minLength={8} required placeholder="Repeat Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;