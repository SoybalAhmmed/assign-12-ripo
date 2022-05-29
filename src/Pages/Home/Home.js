import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BestBooks from './BestBooks';
import BusinessSummery from './BusinessSummery';
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
            <BusinessSummery></BusinessSummery>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;