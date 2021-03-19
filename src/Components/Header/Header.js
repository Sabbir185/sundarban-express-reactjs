import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h1>Sundarban eXpress</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Destination</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#" >Contact</a>
                    </li>
                    <button className="btn btn-warning btn-sm pl-3 pr-3" >Sign In</button>
                </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;