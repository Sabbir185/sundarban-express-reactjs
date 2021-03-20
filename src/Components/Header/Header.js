import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    // const {name, password, confirmPassword} = props.userInfo;
    // console.log(props.userInfo)
    // console.log(name, password)

    // let signIn = false;
    // if(password === confirmPassword && password!==''){
    //     signIn = true;
    // }

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
                    {/* {
                        signIn ? <h5>{name}</h5> : <Link to='/login'><button className="btn btn-warning btn-sm pl-3 pr-3" >Sign In</button></Link>
                    } */}
                    <li className="nav-item">
                        <Link to='/login'><button className="btn btn-warning btn-sm pl-3 pr-3" >Sign In</button></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;