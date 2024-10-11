// src/pages/SignInPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignIn = (e) => {
        e.preventDefault();
        // Retrieve user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setMessage('Sign in successful!');
            navigate('/landing'); // Redirect to homepage upon successful sign-in
        } else {
            setMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSignIn}>
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
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignInPage;