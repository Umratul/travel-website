import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id ,name, price, duration,img,body } = service;
    return (
        <div className="service ">
            <img src={img} alt="" />
            <h3 className="fst-italic text-primary">{name}</h3>
            <h5>Price: ${price}</h5>
            <h5>Duration: {duration}</h5>
            <p>{body}</p>
            
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-info fw-bold text-primaryn p-2 mb-3">Book for {name.toUpperCase()}</button>
            </Link>
        </div>
    );
};

export default Service;