import React, { useReducer, useState } from 'react';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';
import {useLocation,useHistory} from 'react-router-dom';
// import useFirebase from '../../hooks/UseFirebase';
// import '../../hooks/useEmailPassword/useEmailPassword'
import './Login.css'
// import useEmailPassword from '../../hooks/useEmailPassword/useEmailPassword';

const Login = () => {
    const{GoogleLogin,handleSignInUser,user}=useAuth()
    // const {handleFrom,handleEmail,handlePassword,error,isLogin,toogleLogin,handleUpdate}=useEmailPassword()

    const location=useLocation()
    const history=useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect_uri=location.state?.from || '/home'

    const handleGoogle=()=>{
        GoogleLogin()
        .then(result=>{
            history.push(redirect_uri)
        })
    }

  
    const handleLogin = e => {
        e.preventDefault()
      
        handleSignInUser(email, password)
          .then(result => {
            history.push(redirect_uri)
        })
         .catch(err=>alert(err.message))
      }

      console.log(user)
  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
    return (
//         <div>
//             <div className="login-col">
//                 <form action="" onSubmit={handleFrom}>
//                 <h1 className="my-5 text-info">{isLogin
//        ? 'Login' : 'Register'}</h1>
//                    {!isLogin && 
//                      <input onBlur={handleUpdate} type="text" placeholder="Name" required />
//                      }
//                     <input onBlur={handleEmail} type="text" placeholder="email address" required />
//                     <input onBlur={handlePassword}  type="password" placeholder="enter your password" required />
//                     <br/>
   
//                     <div className="row mb-3">
//     <div className="col-sm-10 offset-sm-2">
//       <div className="form-check">
//         <input className="form-check checks" onChange={toogleLogin} type="checkbox" id="gridCheck1" placeholder="email address"/>
//         <label className="form-check-label" htmlFor="gridCheck1">
//         <span className="registers"> Already Register</span>
           
//          </label>
      
//       </div>
//     </div>
//   </div>
//   <br/>
//                     {error}
//                     <br/>
//                     <button  type="submit" className="hero-btn red-btn">{isLogin ? 'Login' : 'Register'}</button>
//                     <br/>
//                     <br/>
//                     <Link to="/register">Please register</Link>
//                     <br/>
//                     <br/>
//                     <button className="googles" onClick={handleGoogle}>google</button>
//                 </form>
//             </div>
//         </div>














    // this is the log un part deign 


    <div className=' mx-auto  p-5 m-5 background-design'>
    <h2 className='text-2xl font-bold'>Please Login</h2>
    <form onSubmit={handleLogin} className='text-left my-5'>
      <div>
        <label htmlFor='email' className='emails'>
          Email:
        </label>
        <br />
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleEmail}
          required
          className=' outline-none px-3 py-2 '
        />
      </div>
      <div className='mt-2'>
        <label htmlFor='password' className='emails'>
          Password:
        </label>
        <br />
        <input
          type='password'
          name='passowrd'
          id='password'
          onChange={handlePassword}
          required
          className='text-md outline-none px-3 py-2 '
        />
      </div>
      <button
        type='submit'
        className='bg-dark text-white px-4 py-2  mt-3 w-full'
      >
        Login
      </button>
    </form>
    <br />
    <p>
      New User?{' '}
      <button
        className='text-blue'
        onClick={() => history.push('/register')}
      >
        Register
      </button>{' '}
    </p>
   <br/>

    <button className="googles" onClick={handleGoogle}>google</button>


   
  </div>



    );




    
};

export default Login;