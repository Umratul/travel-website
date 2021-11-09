import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Banner from './Banner/Banner';

import Questions from './Questions/Questions';
import Service from './Service/Service';
import Feedback from './Feedback/Feedback';


const Home = () => {

    const {user} = useAuth();

    const [services, setServices] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5000/services')
                .then(res => res.json())
                .then(data => setServices(data));
        }, [])
    const sliceService = services.slice(0, 6);
    return (
        <div id="home">
            <Banner></Banner>
            <div>
                <h1 className="text-primary fst-italic p-3">Popular Destinations</h1>
                
            <div className="service-container">
                {
                    sliceService.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                    }
                </div>
                
            </div>
            <Questions></Questions>
            <Feedback></Feedback>

        </div>
    );
};

export default Home;