import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BestBooks from './BestBooks';
import Info from './Info';
import OurBooks from './OurBooks';
import Services from './Services';
import Testimonials from './Testiomanals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Info></Info>
            <OurBooks></OurBooks>
            <BestBooks></BestBooks>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;