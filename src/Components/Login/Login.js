import React from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import './Login.css';
import search from '../images/search.png';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }else {
    firebase.app();
    }


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });

        };

    

    // google sign in with firebase auth.
    const googleHandler = ( ) => {
      const google = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
      .signInWithPopup(google)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var {displayName, email, photoURL} = result.user;
        const newUserInfo = {name:displayName, email, photoURL, google:true};
        setLoggedInUser(newUserInfo);
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage)
      });
    }

 
    return (
        <div className='container'>
            <div className='bg-dark mt-3 rounded mb-3'>
                <Header></Header>
            </div>
            <div className='row'>
                <div className="col-3"></div>
                <div className="col-6">

                    <div className='form-style'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Create an account</h5>
                            <input name="name" ref={register({ required: true })} placeholder='Name' className='form-control mt-4'/>
                            {errors.name && <span className='text-danger'>Name is required</span>}
                            <br/>

                            <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='UserName or Email' className='form-control'/>
                            {errors.email && <span className='text-danger'>Email is required</span>}
                            <br/>

                            <input type='password' name="password" ref={register({ required: true, min: 6, pattern: /\d{1}/ })} placeholder='Password' className='form-control'/>
                            {errors.password && <span className='text-danger'>Password is required</span>}
                            <small><em style={{color:'gray', padding:'5px'}}>Minmun length 6 with character and number</em></small>
                            <br/><br/>

                            <input type='password' name="confirmPassword" ref={register({ required: true, min: 6, pattern: /\d{1}/ })} placeholder='Confirm Password' className='form-control'/>
                            {errors.confirmPassword && <span className='text-danger'>Confirm Password is required</span>}
                            <small><em style={{color:'gray', padding:'5px'}}>Minmun length 6 with character and number</em></small>
                            <br/><br/>
                            
                            <input type="submit" value='Create an account' className='btn btn-success w-100'/>

                            <p className='text-center mt-3'>Already have an account ? 
                            <a href="">Login</a> </p>
                        </form>
                    </div>
            
                </div>
                <div className="col-3"></div>
            </div>
            <div className='row'>
                <div className="col-3"></div>
                <div className="col-6 mb-5">
                    <p className='text-center mt-3'>--------------- or ---------------</p>
                    <div onClick={googleHandler} className="google-sign w-75"><img src={search} alt=""/> Continue with Google</div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
};

export default Login;