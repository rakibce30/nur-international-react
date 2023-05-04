import React from 'react';
import Logo from '../../images/logo.png';
import Phone from '../../images/phone-call.png';
import Location from '../../images/location.png';
import Email from '../../images/email.png';
import Map from '../../images/map.jpg';

const Contact = () => {
    return (
        <section className="max-w-screen-xl mx-auto mt-6 md:mt-12 bg-white lg:rounded-2xl">
            <div className="flex flex-col md:flex-row items-center relative">
                {/* <!-- Hero Image Section --> */}
                <div className="w-full md:w-1/2 lg:px-16 py-8">
                    <div className="flex flex-col justify-center space-y-6 items-center lg:items-start">
                        <img className="w-40" src={Logo} alt=""/>
                            <h2 className="text-2xl lg:text-4xl font-bold">Nur International</h2>
                            <div className="lg:text-xl text-gray-600">
                                <p><img className="w-6 inline pr-1" src={Phone} alt=""/> 01715315993</p>
                                <p className="my-2"><img className="w-6 inline pr-1" src={Location} alt=""/> 18 Purana Paltan, (4th Floor), Dhaka-1000</p>
                                <p><img className="w-6 inline pr-1" src={Email} alt=""/> nutintlbd@gmail.com</p>
                            </div>
                    </div>
                </div>
                {/* <!-- Hero Text Section --> */}
                <div className="w-full md:w-1/2 p-8">
                    <img className="rounded-2xl" src={Map} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Contact;