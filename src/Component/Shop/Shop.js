import React from 'react';
import './Shop.css'
import shop1 from '../../images/shop1.jpg'
import shop2 from '../../images/shop2.jpg'
import shop3 from '../../images/shop3.jpg'
import shop4 from '../../images/shop4.jpg'
import shop5 from '../../images/shop5.jpg'
import shop6 from '../../images/shop6.jpg'

import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Shop = () => {
    const designShow = {
        width: '18rem'
    }
    return (
        <div>
            <div className="shop">
                <h1 className="datas">Welcome Our Shop</h1>
            </div>



            <div className="container">
            <div className="row">
            <div className="col-lg-4 mb-5 mt-5 col-sm-12 image-card ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={shop1} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                                <h4>price: $80</h4>
                                <h3>
                                Hand Sanitizer</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>





                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={shop2} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                            <h4>price: $80</h4>
                                <h3>
                                Liquid Sanitizer</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>



                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={shop3} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                            <h4>price: $80</h4>
                                <h3>
                                Sanitizer Gel</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>



                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={shop4} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                            <h4>price: $70</h4>
                                <h3>
                                Vitamin D3</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>



                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={shop5} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                            <h4>price: $60</h4>
                                <h3>
                                Vitamin B2</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>


                    <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
                        <div className="card" style={designShow}>
                            <img className="image-design" src={shop2} class="card-img-top" alt="..." />
                            <div class="card-body body-designs">
                            <h4>price: $80</h4>
                                <h3>
                                Vitamin C+</h3>


                                <Link>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link>
                            </div>


                        </div>
                    </div>

            </div>
            
        </div>
        <Footer></Footer>
            
        </div>
    );
};

export default Shop;