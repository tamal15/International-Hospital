import React from 'react';
// import img1 from '../../images/slider1.jpg'
import './About.css'
import image1 from '../../../src/images/doctor1.jpg'
import image2 from '../../../src/images/doctor2.jpg'
import image3 from '../../../src/images/doctor3.jpg'
import Footer from '../Footer/Footer'

const About = () => {
    const designShow = {
        width: '18rem'
    }
    return (
        <div>

            <div className="about">
                <h3 className="datas">About</h3>

            </div>

            <div>
                <h1 className="mt-5 text-info">Our Dedicated Doctors Team.</h1>
                <div className="row container">
                    <div className="col-lg-4 mb-5 mt-5 col-sm-12  ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={image1} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>Syed Khan</h3>
                                {/* <p class="card-text">{description}.</p> */}


                            </div>


                        </div>
                    </div>



                    <div className="col-lg-4 mb-5 mt-5 col-sm-12  ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={image2} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>Akash Khan</h3>
                                {/* <p class="card-text">{description}.</p> */}


                            </div>


                        </div>
                    </div>


                    <div className="col-lg-4 mb-5 mt-5 col-sm-12  ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={image3} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>Amir Khan</h3>
                                {/* <p class="card-text">{description}.</p> */}


                            </div>


                        </div>
                    </div>

                </div>
            </div>




            {/* appoinment  */}

            <section id="abouts us" className="abouts-us">
                <h1>Appointment</h1>



                <div className="row">
                    <div className="abouts-col">
                        <div>
                            <i class="fas fa-home"></i>
                            <span>
                                <h6>Need a Doctor for Check-up?</h6>
                                <h4>Just Make an Appointment
                                    and You’re Done!</h4>
                                <h3>Opening Hours</h3>
                            </span>

                        </div>

                        <div>
                            <i className="fas fa-home"></i>
                            <span>
                                <div className="d-flex">
                                    <h5>Monday-Thursday</h5>
                                    <h5 className="about-flex">06:00-20:00</h5>
                                    <hr />
                                </div>

                                <div className="d-flex bottoms">
                                    <h5>Saturday-Thursday</h5>
                                    <h5 className="about-flex">09:00-18:00</h5>
                                    <hr />
                                </div>
                                <div className="d-flex bottoms">
                                    <h5>Sunday-Thursday</h5>
                                    <h5 className="about-flex">10:00-18:00</h5>
                                    <hr />
                                </div>
                            </span>



                        </div>









                    </div>


                    <div className="abouts-col">
                        <form action="">
                            <input type="text" placeholder="enter your name" required />
                            <input type="text" placeholder="email address" required />
                            <input type="text" placeholder="subject" required />
                            <input type="text" placeholder="message" required />
                            <button type="submit" className="hero-btn red-btn">Send Message</button>
                        </form>
                    </div>


                </div>


                {/* form  */}



            </section>





          <Footer></Footer>

        </div>
    );
};

export default About;