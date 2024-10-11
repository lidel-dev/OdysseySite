// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import StorePage from './pages/StorePage';
import ItemPage from './pages/ItemPage';
import Cart from './pages/Cart';

// A protected route component
const ProtectedRoute = ({ children, isAuthenticated }) => {
    return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

const App = () => {
    // State to manage authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to handle login
    const login = () => {
        setIsAuthenticated(true);
    };

    // Function to handle logout
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/sign-up" element={<SignUpPage login={login} />} />
                <Route path="/sign-in" element={<SignInPage login={login} />} />
       

                {/* Protect the LandingPage route */}
                <Route 
                    path="/landing" 
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <LandingPage logout={logout} />
                        </ProtectedRoute>
                    } 
                />
                         {/* Apparel and ListItems Page Routes */}
                         <Route path="/store" element={<StorePage />} />
                         <Route path="/list-items" element={<ListItems />} />
                         <Route path="/browse-items" element={<BrowseItems />} />
                         <Route path="/item/:id" element={<ItemPage />} />
                         <Route path="/cart" element={<Cart />} />
                {/* Redirect to LandingPage after successful login or signup */}
                <Route path="/" element={<Navigate to={isAuthenticated ? "/landing" : "/sign-in"} />} />
            </Routes>
        </Router>
    );
};

export default App;
