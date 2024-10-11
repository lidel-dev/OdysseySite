// src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const userData = { email, password };
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        setMessage('User registered successfully!');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Sign Up</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSignUp}>
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Create Account</button>
                <Link to="/sign-in">Sign In</Link>
            </form>
        </div>
    );
};

export default SignUpPage;
