import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import ServiceData from './ServiceData';
// import './ServiceData'

const Home = () => {
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

         <Footer></Footer>

        </div>
    );
};

export default Home;