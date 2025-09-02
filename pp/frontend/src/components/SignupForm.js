import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

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
      .then(res => res.json())
      .then(data => {
        alert('Signup successful (stubbed)');
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