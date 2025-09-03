import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@") || password.length < 8) {
            alert("Please enter a valid email and a password with at least 8 characters.");
            return
        }
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                alert('Login successful (stubbed)');
                navigate('/home');  // Redirect to home page
            })
            .catch(err => {
                console.error('Fetch error:', err);
                alert('Login failed: ' + err.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
