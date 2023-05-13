import React from 'react'
import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie'

const cookies = new Cookies();

const ProtectedRoutes = ({children}) => {
   
    if (cookies.get('token') === undefined) {
        return <Navigate to="/users/login" />;
    }
     return children;   
    
}

export default ProtectedRoutes;