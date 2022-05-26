import React from 'react';
import Banner from './Banner';
import BestBooks from './BestBooks';
import Info from './Info';
import OurBooks from './OurBooks';
import Testimonials from './Testiomanals';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <OurBooks></OurBooks>
            <BestBooks></BestBooks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;