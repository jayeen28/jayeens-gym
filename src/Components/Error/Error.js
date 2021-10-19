import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className="error-page">
            <h1>404 Error</h1>
            <h4>No page found</h4>
            <Link to="/home">Go back to home page</Link>
        </div>
    );
};

export default Error;