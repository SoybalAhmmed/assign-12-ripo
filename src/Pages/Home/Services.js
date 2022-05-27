import React, { useEffect, useState } from 'react';

import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='my-10'>
        <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on </h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                    
                ></Service>)
            }
        </div>
            
        </div>
    );
};

export default Services;