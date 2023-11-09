import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import "./error.css"

const Error = () => {
    return (
        <div className='error'>
            <h1>Error</h1>
            <Spinner/>
        </div>
    );
};

export default Error;