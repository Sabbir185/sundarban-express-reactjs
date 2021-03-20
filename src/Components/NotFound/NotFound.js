import React from 'react';
import Header from './../Header/Header';
import './NotFound.css';

const NotFound = () => {

    return (
        <div className='container'>
            <div className='bg-dark mt-3 rounded mb-3'>
                <Header></Header>
            </div>
            <div className='NotFoundStyle'>
                <h1>Not Found</h1>
                <h4>Wrong Route</h4>
                <h4 className='wrong'>X</h4>
            </div>
        </div>
    );
};

export default NotFound;