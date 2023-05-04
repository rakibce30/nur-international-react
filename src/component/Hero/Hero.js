import React from 'react';
import Button from '../Button/Button';
import Image from '../../images/Hero-img.png';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';
import Youtube from '../../images/youtube.png';

const Hero = () => {
    return (
        <section className="max-w-screen-xl mx-auto my-6 md:my-12 bg-white lg:rounded-2xl">
            <div className="flex flex-col md:flex-row items-center relative">
                {/* <!-- Hero Image Section --> */}
                <div className="w-full md:w-1/2">
                    <img className="lg:rounded-tl-2xl lg:rounded-bl-2xl" src={Image} alt=""/>
                </div>
                {/* <!-- Hero Text Section --> */}
                <div className="w-full md:w-1/2 p-4">
                    <div>
                        <h1 className="text-center lg:text-left text-5xl lg:text-7xl font-bold mb-8">Pioneer In Tour Solutions</h1>
                        <Button buttonText={'Contact Us'}></Button>
                    </div>
                    {/* <!-- Hero Social Icon --> */}
                    <div className="flex flex-row space-x-2 justify-end absolute bottom-4 right-4">
                        <img className="w-8" src={Facebook} alt=""/>
                        <img className="w-8" src={Twitter} alt=""/>
                        <img className="w-8" src={Youtube} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;