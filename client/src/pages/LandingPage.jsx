// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

// Import your images (adjust the paths as needed)
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const LandingPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to Odyssey, a platform for renting and leasing items</h1>
            <div style={styles.carouselContainer}>
                <Carousel 
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={true}
                    interval={3000} // 3-second interval between slides
                >
                    <div>
                        <img src={image1} alt="Image 1" />
                    </div>
                    <div>
                        <img src={image2} alt="Image 2" />
                    </div>
                    <div>
                        <img src={image3} alt="Image 3" />
                    </div>
                </Carousel>
            </div>
            <div style={styles.linksContainer}>
                <Link to="/browse-items" style={styles.link}>Browse Items</Link>
                <Link to="/list-items" style={styles.link}>List Items</Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f8f8',
    },
    heading: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px',
    },
    carouselContainer: {
        width: '50%', // Make the carousel wide
        height: '50%', // Let height be auto-adjusted
        maxWidth: '1200px', // Set a maximum width for larger screens
        marginBottom: '30px',
    },
    carouselImage: {
        width: '50%', // Ensure the image takes full width
        height: '50%', // Set a fixed height for the images
        objectFit: 'cover', // Ensure images cover the carousel container without distortion
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '30%',
    },
    link: {
        textDecoration: 'none',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    }
};

export default LandingPage;
