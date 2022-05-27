import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const{_id,name,price,img,available,quantity}=service;
    const navigate = useNavigate();
    
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
            <img src={img} alt="" />
            <h2> <span className="text-2xl">Bookname: </span> {name}</h2>
            <p>Price:{price}</p>
        <p>quantity: {quantity}</p>
            <p>available: {available}</p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>

        </div>
    </div>
    );
};

export default Service;