import React from 'react';

const ServiceOrder = ({service}) => {
    const{_id,name,price,img,available,quantity}=service;


    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Price:{price}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default ServiceOrder;