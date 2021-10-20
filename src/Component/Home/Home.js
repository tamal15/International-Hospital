import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import ServiceData from './ServiceData';
// import './ServiceData'
import blog1 from '../../images/article1.jpg'
import blog2 from '../../images/article2.jpg'
import blog3 from '../../images/article3.jpg'
import medical from '../../images/image-11.png'

const Home = () => {
    const designShow = {
        width: '18rem'
    }
    // const [service, setService] = useState([])
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>

            <div>
                <Banner></Banner>
            </div>
            <div className="container">

                <div className="row">
                    {
                        service.map(services => <ServiceData
                            services={services}
                        >

                        </ServiceData>)
                    }
                </div>

            </div>



            {/* our medical  */}

            <div className="container designs mt-5">
            <div className="row">
                <div className="col-lg-6">
                  <h5 className="">Our Medical</h5>
                  <h3>We're setting Standards in Research what's more, Clinical Care.
</h3>
                <p>We provide the most full medical services, so every person could have the pportunity o receive qualitative medical help.</p>
                   <button className="bg-dark banner text-white p-2 m-2">Get an Visit</button>
                </div>
                <div className="col-lg-6 image-slide">
                      <img src={medical} alt="" />
                </div>

            </div>

        </div>




            {/* our medical end  */}

            <div className="container">
                <h5 className="mt-5 text-danger">Our Blog</h5>
                <h3 className="text-info">Recent Articles and News</h3>
                <div className="row">
                    {/* <div className="photo"> */}
                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={blog1} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
                                What is The Success rate of a root canel?</h3>


                             
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={blog2} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
                                How to handle your kids mystery ailments?</h3>

                            </div>


                        </div>
                    </div>




                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={blog3} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h3>
                                How to help the cardiology department</h3>

                            </div>


                        </div>
                    </div>




                    




                      
                    {/* </div> */}
                </div>
            </div>

         <Footer></Footer>

        </div>
    );
};

export default Home;