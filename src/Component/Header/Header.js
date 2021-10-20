import React from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';

import useFirebase from '../../hooks/UseFirebase';
import logo1 from '../../images/log.jpg';



// import slider1 from '../../images/slider1.jpg';
// import slider2 from '../../images/slider2.jpg';
// import slider3 from '../../images/slider3.jpg';
import './Header.css';
// import { Carousel } from 'react-bootstrap';
// import img from '../'

const Header = () => {
  const {user,logout}=useAuth()
    return (
        <div>
            
       
            <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
            <div class="container">
              <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">  <img src={logo1} alt="" width="50" height="49" class="d-inline-block align-text-top "/>
                <span class="ms-3 ">Internation Hospital</span></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse "  id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="#home">Home</a> */}
                    <Link className="nav" to="/home">Home</Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="#cow1">Cow</a> */}
                   {
                     user.email?<button className="log" onClick={logout}>Logout</button>:
                     <Link className="nav" to="/login">Login</Link>
                   }
                  </li>
                  <h6 className="use"> {user.displayName} </h6>
                  <li class="nav-item">
                  <Link className="nav" to="/about">About</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav" to="/department">Department</Link>
                  </li>
                  {/* <li class="nav-item">
                  <Link className="nav" to="/service">Services</Link>
                  </li> */}

<li class="nav-item dropdown drop-button">
          <Link class="nav-link dropdown-toggle drops-buttons" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/service">Service</Link></li>
            <li><Link class="dropdown-item" to="/shop">Our Shop</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>

                  <li class="nav-item">
                  <Link className="nav" to="/contact">Contact</Link>
                   </li>
                 
                
                </ul>
               
              </div>
            </div>
          </nav>


    
       {/* carousel design  */}

    



        </div>
    );
};

export default Header;