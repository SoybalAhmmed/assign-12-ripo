import React from 'react';

const Service = ({service}) => {
    const{_id,name,price,img,available,quantity}=service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body text-center">
            <img src={img} alt="" />
            <h2> <span className="text-2xl">Bookname: </span> {name}</h2>
            <p>Price:{price}</p>
        <p>quantity: {quantity}</p>
            <p>available: {available}</p>
           
        </div>
    </div>
    );
};

export default Service;