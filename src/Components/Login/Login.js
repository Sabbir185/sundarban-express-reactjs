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
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }else {
    firebase.app();
    }


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [toggle, setToggle] = useState(0);
    const [account, setAccount] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
       if(toggle==0 && data.email && data.password){
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                var user = userCredential.user;
                updateName(data.name);
                
                const userInfo = {...account};
                userInfo.error = '';
                userInfo.success = true;
                setAccount(userInfo);
            })
            .catch((error) => {
                const errorMessage = error.message;

                const userInfo = {...account};
                userInfo.error = errorMessage;
                userInfo.success = false;
                setAccount(userInfo);
            });
        }

        if(toggle!=0 && data.email && data.password){
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                const {displayName, email, photoURL} = userCredential.user;
                const userSignUpInfo = {name:displayName, email, photoURL, signUp:true};
                setLoggedInUser(userSignUpInfo);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }
    };

    const updateName = (name) =>{
        var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name,
        }).then(function() {
          // Update successful.
        }).catch(function(error) {
          // An error happened.
        });
    }

    

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
        history.replace(from);
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage)
      });
    }

    console.log(account)
    return (
        <div className='container'>
            <div className='bg-dark mt-3 rounded mb-3'>
                <Header></Header>
            </div>

            <div className='error-msg text-center'>
                <h4 className='text-danger mb-3'>{account.error}</h4>
                { account.success && <h4 className='text-success mb-3'>Account created successful ! Please login</h4>}
            </div>

            <div className='row'>
                <div className="col-3"></div>
                <div className="col-6">

                    <div className='form-style'>
                        { toggle == 0 ? <form onSubmit={handleSubmit(onSubmit)}>
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

                            <p className='text-center mt-3'>Already have an account ? <button onClick={()=>setToggle(toggle+1)}className='btn btn-success btn-sm'>Login</button></p>
                        </form>
                        :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='UserName or Email' className='form-control'/>
                            {errors.email && <span className='text-danger'>Email is required</span>}
                            <br/>

                            <input type='password' name="password" ref={register({ required: true, min: 6, pattern: /\d{1}/ })} placeholder='Password' className='form-control'/>
                            {errors.password && <span className='text-danger'>Password is required</span>}
                            <small><em style={{color:'gray', padding:'5px'}}>Minmun length 6 with character and number</em></small>
                            <br/>
                            <br/>
                            <input type="submit" value='Login' className='btn btn-success w-100'/>
                        </form>
                        }
                        
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