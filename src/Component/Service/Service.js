import React, { useEffect, useState } from 'react';
// import React from 'react';
import service1 from '../../../src/images/service/service1.jpg'
import service2 from '../../../src/images/service/service3.jpg'
import service3 from '../../../src/images/service/service4.jpg'
import './Service.css'
import slide from '../../images/slider2.jpg'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import '../../Component/Footer/Footer'

const Service = () => {
    const designShow = {
        width: '18rem'
    }
    return (
      <div>
          <div className="service-banner">
              <h1 className="datas">Services </h1>
          </div>


          <div className="container services-style">
            <div className="row">
            <div className="col-lg-4 mb-5 mt-5 col-sm-12  ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={service1} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
                                Health Check</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>





                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={service2} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
                                Operation Theater</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>



                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={service3} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
                                Pharmacy Support</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>

            </div>
            
        </div>

        <div className="container designs mt-5 services-style">
            <div className="row">
                <div className="col-lg-6">
                  <h5 className="">EED A DOCTOR FOR CHECK-UP?</h5>
                  <h3>Just Make an Appointment
                   and You’re Done!</h3>
                   <h6>Get Your Quote or Call:</h6>
                   <h6>02773464748</h6>
                   <button className="bg-dark banner text-white p-2 m-2">Get an Appointent</button>
                </div>
                <div className="col-lg-6 image-slide">
                      <img src={slide} alt="" />
                </div>

            </div>

        </div>
        <Footer className=""></Footer>
      </div>
      
    );
};

export default Service;