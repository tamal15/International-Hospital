import React from 'react';
import useEmailPassword from '../../../hooks/useEmailPassword/useEmailPassword';
import './Register.css'

const Register = () => {
    const {handleFrom,handleEmail,handlePassword,isLogin}=useEmailPassword()
    return (
        <div>
             <div className="contact-col">
                <form action="" onSubmit={handleFrom}>
                    <input onBlur={handlePassword}  type="emal" placeholder="enter your email" required />
                    <input onBlur={handleEmail}  type="text" placeholder="email address" required />
                    {/* <input type="text" placeholder="subject" required />
                    <input type="text" placeholder="message" required /> */}
                    <br/>
                    <button type="submit" className="hero-btn red-btn">{isLogin}Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;