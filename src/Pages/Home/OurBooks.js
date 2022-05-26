import React from 'react';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import OurBook from './OurBook';

const OurBooks = () => {
    const ourbooks = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h2 className='text-primary   text-xl font-bold'>Our Books</h2>
            <h3 className='text-4xl'>We provide Books</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    ourbooks.map(ourbook =><OurBook
                        key={ourbook._id}
                        ourbook={ourbook}
                    ></OurBook>)
                }
            </div>
        </div>
    );
};

export default OurBooks;