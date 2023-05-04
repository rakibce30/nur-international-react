import React from 'react';
import Marquee from "react-fast-marquee";
import './Slider.css';

const Slider = () => {
    return (
        <div className='relative slider max-w-screen-xl mx-auto bg-white rounded-xl py-2 mb-8'>

                <Marquee pauseOnHover  >
                    <div className='flex flex-row justify-center items-center '>
                        <img src='./Images/usbangla.png' alt="" />
                        <img src='./Images/emirate.png' alt="" />
                        <img src='./Images/Ettihad.png' alt="" />
                        <img src='./Images/Haab.png' alt="" />
                        <img src='./Images/iata.png' alt="" />
                        <img src='./Images/Novoair.png' alt="" />
                        <img src='./Images/Regent.png' alt="" />
                        <img src='./Images/Soudiairlines.png' alt="" />
                    </div>
                </Marquee>

        </div>
    );
};

export default Slider;