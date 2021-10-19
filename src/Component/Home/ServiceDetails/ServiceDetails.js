import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'


const ServiceDetails = () => {
    const designShow = {
        width: '18rem'
    }
    let { id } = useParams()


    const [store, setStore] = useState([])
    const [single,setSingle]=useState({})

    useEffect(() => {

        fetch('/service.json')
            .then(res => res.json())
            .then(data => setStore(data));
    }, [id])

    useEffect(() => {

        const values = store.find((people) => people.id === id);
        setSingle(values)
        console.log(values)
    }, [store])
    // useEffect(()=>{
    //  const value= store.find(people=>people.id === id)
    //  console.log(value)
    // },[store])

    return (
        <div className="container details">
                        <div className="card details" style={designShow}>
                <img className="image-design" src={single?.image} class="card-img-top" alt="..." />
                <div class="card-body body-designs">
                    <h3>{single?.name}</h3>
                    <p class="card-text">{single?.description}.</p>
                    <Link to={`/serviceDetails/${id}`}>
                    <button className="button">Details Now</button>
                    </Link>
                </div>


            </div>


        </div>
    );
};

export default ServiceDetails;