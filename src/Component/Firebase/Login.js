import React, { useReducer } from 'react';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';
import {useLocation,useHistory, Link} from 'react-router-dom';
// import useFirebase from '../../hooks/UseFirebase';
// import '../../hooks/useEmailPassword/useEmailPassword'
import './Login.css'
import useEmailPassword from '../../hooks/useEmailPassword/useEmailPassword';

const Login = () => {
    const{GoogleLogin}=useAuth()
    const {handleFrom,handleEmail,handlePassword,error,isLogin,toogleLogin,handleUpdate}=useEmailPassword()

    const location=useLocation()
    const history=useHistory()
    const redirect_uri=location.state?.from || '/home'

    const handleGoogle=()=>{
        GoogleLogin()
        .then(result=>{
            history.push(redirect_uri)
        })
    }
    return (
        <div>
            <div className="contact-col">
                <form action="" onSubmit={handleFrom}>
                <h1 className="my-5 text-info">{isLogin
       ? 'Login' : 'Register'}</h1>
                   {!isLogin && 
                     <input onBlur={handleUpdate} type="text" placeholder="Name" required />
                     }
                    <input onBlur={handleEmail} type="text" placeholder="email address" required />
                    <input onBlur={handlePassword}  type="password" placeholder="enter your password" required />
                    <br/>
   
                    <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check checks" onChange={toogleLogin} type="checkbox" id="gridCheck1" placeholder="email address"/>
        <label className="form-check-label" htmlFor="gridCheck1">
        <span className="registers"> Already Register</span>
           
         </label>
      
      </div>
    </div>
  </div>
  <br/>
                    {error}
                    <br/>
                    <button  type="submit" className="hero-btn red-btn">{isLogin ? 'Login' : 'Register'}</button>
                    <br/>
                    <br/>
                    <Link to="/register">Please register</Link>
                    <br/>
                    <br/>
                    <button className="googles" onClick={handleGoogle}>google</button>
                </form>
            </div>
        </div>
    );




    
};

export default Login;