import React, { useContext, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const loggedInUser = useContext(UserContext);
    const {name, email, photoURL, google, signUp} = loggedInUser[0];


    let signIn = false;
    if(google || signUp){
        signIn = true;
    }

    const history = useHistory();
    const redirect = () => {
        history.push('/home');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/home'><h1>Sundarban eXpress</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link active nav-hover" aria-current="page" to='/home'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white nav-hover" to='/destination/1'>Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white nav-hover" to='/blog'>Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white nav-hover" to='/contact' >Contact</Link>
                    </li>
                    {
                        signIn ? <h5 className='user-name mt-2 ml-2' onClick={redirect()}>{name}</h5> : <Link to='/login'><button className="btn btn-warning btn-sm pl-3 pr-3" >Sign In</button></Link>
                    }
                </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;