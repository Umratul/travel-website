import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    
    return (
        <div>
            <h2 className="bg-info m-5 p-3">Booked for <span className="text-primary">{service.name}</span></h2>
            
        </div>
    );

};

export default Booking;