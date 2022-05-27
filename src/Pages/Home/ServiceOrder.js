import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';
import Loading from '../Shared/Loading';


const ServiceOrder = () => {
    const { serviceId } = useParams();
    
    const [service, setService] = useState({});
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event =>{
      event.preventDefault();
      const booking = {
        displayname:user.displayName,
        email:user.email,
        service: service.name,
        serviceId: serviceId,
        price: service.price,
        quantity: event.target.quantity.value,
        phone: event.target.phone.value
    }
    
    if (loading) {
      return <Loading></Loading>
  }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
  })
      .then(res => res.json())
      .then(data => {
        toast('Your order is booked!!!');
        event.target.reset();
        
      })

    }

    useEffect( () =>{
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));

    }, [])

    return (
       <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='w-32' src={service.img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Product Detail</h2>
    <h2>Name: {service.name}</h2>
    <p>Price:{service.price}</p>
    <p>quantity:{service.quantity}</p>
    <p>Available:{service.available}</p>
  </div>
</div>
  <div className='my-4'>
  <h3 className="font-bold text-center text-lg text-secondary ">Booking for:{service.name}  </h3>
  <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>                
       <input type="text" name="displayname" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
        <input type="email" name="email" disabled value={user?.email || ''}  className="input input-bordered w-full max-w-xs" />
        <input type="text" name="name" disabled value={service.name}  className="input input-bordered w-full max-w-xs" />
        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered w-full max-w-xs" />
        <input type="text" name="price" value={service.price} className="input input-bordered w-full max-w-xs" />
        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
      </form>
  </div>
           </div>
    );
};

export default ServiceOrder;