import React from 'react';

import depart1 from '../../../src/images/depart1.jpg'
import depart2 from '../../../src/images/depart2.jpg'
import depart3 from '../../../src/images/depart3.jpg'
import depart4 from '../../../src/images/depart4.jpg'
import depart5 from '../../../src/images/depart5.jpg'
import depart6 from '../../../src/images/depart6.jpg'
import './Departments.css'

const Departments = () => {
    const designShow = {
        width: '18rem'
    }
    return (
        <div>
            <div className="department">
                <h1 className="datas">Departments</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={depart1} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
                                    Cardiology Department</h3>


                                {/* <Link to={`/serviceDetails/${id}`}>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link> */}
                            </div>


                        </div>
                    </div>



                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={depart2} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
                                    Neurology Department</h3>


                                {/* <Link to={`/serviceDetails/${id}`}>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link> */}
                            </div>


                        </div>
                    </div>





                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={depart3} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>Urology Department</h3>


                                {/* <Link to={`/serviceDetails/${id}`}>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link> */}
                            </div>


                        </div>
                    </div>



                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={depart4} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
Gynecological</h3>


                                {/* <Link to={`/serviceDetails/${id}`}>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link> */}
                            </div>


                        </div>
                    </div>


                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={depart5} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
Pediatrical</h3>


                                {/* <Link to={`/serviceDetails/${id}`}>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link> */}
                            </div>


                        </div>
                    </div>



                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={depart6} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
Laboratory</h3>


                                {/* <Link to={`/serviceDetails/${id}`}>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link> */}
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Departments;