// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/city.jpg'; // Adjust the path to your logo image
import './HomePage.css'; 

const HomePage = () => {
    return (
        <div className="container">
            <img src={logo} alt="Logo" style={styles.logo} />
            <div className="glitch" data-text="ODYSSEY">ODYSSEY</div>
            <div className="glow">ODYSSEY</div>
            <p className="subtitle">RENT ANYTHING®</p>
            <div className="scanlines"></div>
            <div style={styles.buttonContainer}>
                <Link to="/sign-up" style={styles.button}>Sign Up</Link>
                <Link to="/sign-in" style={styles.button}>Sign In</Link>
            </div>
        </div>
    );
};

const styles = {
    logo: {
        position: 'absolute',
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -45%)', // Adjust positioning
        width: '1600px', // Adjust size as needed
        zIndex: 0, // Behind other elements
    },
    buttonContainer: {
        marginTop: '20px',
        zIndex: 1, // Above the logo
    },
    button: {
        position: 'relative',
        alignItems: 'center',
        display: 'inline-block',
        margin: '10px',
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
};

export default HomePage;
