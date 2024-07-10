import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PublicRoute = ({ children }) => {
    const user = useAuth();

    console.log(user.token)

    if (!user || !user.token) {
        return children;
    }

    return <Navigate to="/profile" />;
};

export default PublicRoute;
