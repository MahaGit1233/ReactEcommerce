import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token');

    const [token, setToken] = useState(initialToken);

    const userLogin = !!token;

    const loginHandler = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const authContext = {
        token: token,
        isLoggedIn: userLogin,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;