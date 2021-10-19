import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceData.css'
// import {Link} from 'react-router-dom'

const ServiceData = (props) => {
    const {id, name, image, description } = props.services;
    const designShow = {
        width: '18rem'
    }
    return (
        <div className="col-lg-4 mb-5 mt-5 col-sm-12  ">
            <div className="card" style={designShow}>
                <img className="image-design" src={image} class="card-img-top" alt="..." />
                <div class="card-body body-designs">
                    <h3>{name}</h3>
                    <p class="card-text">{description}.</p>
                    <Link to={`/serviceDetails/${id}`}>
                    <button className="button">Details Now</button>
                    </Link>
                   {/* <Link to={`/serviceDetails/${id}`}>
                   <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
                   </Link> */}
                </div>


            </div>
        </div>
    );
};

export default ServiceData;