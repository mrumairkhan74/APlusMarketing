import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Property from '../pages/Property';
import Register from '../pages/Register';
import Login from '../pages/Login';
import CreatePropertyPage from '../pages/property/CreatePropertyPage';
import PropertyDetailById from '../pages/property/PropertyDetailById';
import WishlistPage from '../pages/WishlistPage';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute'; // 🔒 import wrapper
import Update from '../pages/Update';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Property />} />
            <Route path="/property/:id" element={<PropertyDetailById />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 🔒 Protected Routes */}
            <Route
                path="/wishlist"
                element={
                    <ProtectedRoute>
                        <WishlistPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/createProperty"
                element={
                    <ProtectedRoute>
                        <CreatePropertyPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/update/:id" element={
                <ProtectedRoute>
                    {<Update />}
                </ProtectedRoute>
            }
            />
        </Routes>
    );
};

export default AppRoutes;
