import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ children}) => {
    const user = useAuth();
    const location = useLocation()

    if (!user.token || !user)
        return <Navigate to="/login" state={{from : location}} />

    return children
};

export default PrivateRoute;
