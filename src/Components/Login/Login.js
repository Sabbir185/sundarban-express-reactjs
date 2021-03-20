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
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isUserSignIn: false,
      name:'',
      email:'',
      password:'',
      photo:'',
      error:'',
      success: false
    })

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => setUser(data);
  
    // context api
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  

  
    // user input
    // handle submit
    const handlePassEmail = (event) => {
      // user sign up
      if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUserName(user.name);
            console.log(res)
        })
          .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
          });
      }
  
      // old user sign in
      if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then( res => {
          const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            // history.replace(from);
            // console.log('sign in info ', res.user);
        })
        .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
        });
      }
      event.preventDefault();
    }
  
  
  
    const updateUserName = (name) =>{
      var user = firebase.auth().currentUser;
  
      user.updateProfile({
        displayName: name,
      }).then(function() {
        // console.log('user name updated successful');
      }).catch(function(error) {
        // console.log(error);
      });
    }

//  console.log(user)

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
                            
                            <input type="submit" onClick={handlePassEmail} value='Create an account' className='btn btn-success w-100'/>

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
                    <div className="google-sign w-75"><img src={search} alt=""/> Continue with Google</div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
};

export default Login;