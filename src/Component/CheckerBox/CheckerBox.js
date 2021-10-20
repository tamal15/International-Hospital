import React from 'react';
import './CheckerBox.css'
import check1 from '../../images/checker1.jpg'
import check2 from '../../images/checker2.jpg'
import check3 from '../../images/checker3.jpg'
import Footer from '../Footer/Footer';

const CheckerBox = () => {
    return (
        <div>
            <div className="checkbox">
                <h1 className="datas">Checkerboard</h1>

            </div>

            <div className="container designs mt-5">
            <div className="row">
                <div className="col-lg-6 image-slide">
                <img src={check1} alt="" />
                
                 
                </div>
                <div className="col-lg-6 image-slide">
                <h5 className="">Our Checkerboard</h5>
                  <h3>We're setting Standards in Research what's more, Clinical Care.
</h3>
                <p>We provide the most full medical services, so every person could have the pportunity o receive qualitative medical help.</p>
                <button className="bg-dark banner text-white p-2 m-2">Read More</button>
                </div>

            </div>

        </div>


        
        <div className="container designs mt-5">
            <div className="row">
                <div className="col-lg-6">
                  <h5 className="">Our Checkerboard</h5>
                  <h3>Preparing for an ECG Tips From
Our Diagnosticians.
</h3>
                <p>We provide the Suspendisse potenti. Quisque risus sem, volutpat a sapien et, mattis condimentum est. Suspendisse .</p>
                   <button className="bg-dark banner text-white p-2 m-2">Read More</button>
                </div>
                <div className="col-lg-6 image-slide">
                      <img src={check2} alt="" />
                </div>

            </div>

        </div>



        <div className="container designs mt-5 mb-5">
            <div className="row">
                <div className="col-lg-6 image-slide">
                <img src={check3} alt="" />
                
                 
                </div>
                <div className="col-lg-6 image-slide">
                <h5 className="">Our Checkerboard</h5>
                  <h3>Diagnostic Services for Efficient
Results Picking Right?

</h3>
                <p>Suspendisse potenti. Quisque risus sem, volutpat a sapien et, mattis condimentum est.</p>
                <button className="bg-dark banner text-white p-2 m-2">Read More</button>
                </div>

            </div>

        </div>




<Footer></Footer>
            
        </div>
    );
};

export default CheckerBox;