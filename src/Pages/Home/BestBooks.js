import React from 'react';
import best from '../../images/best.png';
import appointment from '../../images/appointment.png';

const BestBooks = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-80px] max-w-md' src={best} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Best Book</h3>
                <h2 className='text-3xl text-white'>Booking Best Book Today</h2>
                <p className='text-white'>A room without books is like a body without a soul Good friends, good books, and a sleepy conscience: this is the ideal life.</p>
                
            </div>
        </section>
    );
};

export default BestBooks;