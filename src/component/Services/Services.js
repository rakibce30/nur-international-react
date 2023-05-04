import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    return (
        <section className="max-w-screen-xl mx-auto mb-8 px-8 lg:px-0">
            <h2 className="text-3xl lg:text-4xl font-semibold">Our Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                <Service text={'Hajj'}></Service>
                <Service text={'Hajj'}></Service>
                <Service text={'Hajj'}></Service>
                <Service text={'Hajj'}></Service>
            </div>
        </section>
    );
};

export default Services;