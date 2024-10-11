// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import LandingPage from './pages/LandingPage';
import ListItemsPage from './pages/ListItemsPage';
import BrowseItemsPage from './pages/BrowseItemsPage';
import StorePage from './pages/StorePage';
import Cart from './pages/Cart';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/list-items" element={<ListItemsPage />} />
                <Route path="/browse-items" element={<BrowseItemsPage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
