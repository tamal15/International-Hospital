import React from 'react';

const DepartsDetails = (props) => {
    const {image,name}=props.departments;
    const designShow = {
        width: '18rem'
    }
    return (
        <div className="col-lg-4 mb-5 mt-5 col-sm-12 ">
        <div className="card" style={designShow}>
            <img className="image-design" src={image} class="card-img-top" alt="..." />
            <div class="card-body body-designs">
                <h3>{name}</h3>
            
               
               {/* <Link to={`/serviceDetails/${id}`}>
               <button className="button"> <i class="fas fa-arrow-circle-right"></i>Details Now</button>
               </Link> */}
            </div>


        </div>
    </div>
    );
};

export default DepartsDetails;