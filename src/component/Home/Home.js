import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Hajj from '../Hajj/Hajj';
import Contact from '../Contact/Contact'
import Umrah from '../Umrah/Umrah';
import Inbound from '../Inbound/Inbound';
import Outbound from '../Outbound/Outbound';
import Slider from '../Slider/Slider';


const Home = () => {
    const loadData = useLoaderData();
    return (
        <div className='lg:pb-12'>
            <Hero></Hero>
            <Slider></Slider>
            <Services></Services>
            <Hajj loadData={loadData}></Hajj>
            <Umrah loadData={loadData}></Umrah>
            <Inbound loadData={loadData}></Inbound>
            <Outbound loadData={loadData}></Outbound>
            <Contact></Contact>
        </div>
    );
};

export default Home;