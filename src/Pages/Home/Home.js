import React from 'react';
import Banner from './Banner';
import BestBooks from './BestBooks';
import Info from './Info';
import OurBooks from './OurBooks';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <OurBooks></OurBooks>
            <BestBooks></BestBooks>
        </div>
    );
};

export default Home;