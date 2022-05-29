import React from 'react';
import chair from '../../images/chair.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Book House info!</h1>
      <p className="py-6">A room without books is like a body without a soul Good friends, good books, and a sleepy conscience: this is the ideal life.</p>
      <button className="btn btn-primary uppercase">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;