import React from 'react';
import { Link } from 'react-router-dom';

const Affiliation = () => {
    return (
        <div className='bg-white py-12'>
            <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center lg:py-12'>


                {/* Air logo section------------------------------------------------- */}
                <div className='w-full lg:w-1/2 flex flex-col items-center lg:border-r-2'>
                    <div className='flex flex-row space-x-4'>
                        <Link><img className='w-[100px] lg:w-[150px]' src="./Images/usbangla.png" alt="" /></Link>
                        <Link><img className='w-[100px] lg:w-[150px]' src="/Images/emirate.png" alt="" /></Link>
                        <Link><img className='w-[100px] lg:w-[150px]' src="./Images/Ettihad.png" alt="" /></Link>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <Link><img className='w-[100px] lg:w-[150px]' src="./Images/Haab.png" alt="" /></Link>
                        <Link><img className='w-[70px] lg:w-[100px]' src="./Images/iata.png" alt="" /></Link>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <Link><img className='w-[100px] lg:w-[150px]' src="./Images/Novoair.png" alt="" /></Link>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <Link><img className='w-[100px] lg:w-[150px]' src="./Images/Regent.png" alt="" /></Link>
                        <Link><img className='w-[100px] lg:w-[150px]' src="./Images/Soudiairlines.png" alt="" /></Link>
                    </div>
                </div>


                {/* Hotel logo section------------------------------------------------- */}
                <div className='w-full lg:w-1/2 flex flex-col items-center'>
                    <div className='flex flex-row items-center space-x-4'>
                        <Link><img className='w-[60px] lg:w-[100px]' src="/Images/raffles.jpg" alt="" /></Link>
                        <Link><img className='w-[100px] lg:w-[150px]' src="/Images/inter-continental.jpg" alt="" /></Link>
                        <Link><img className='w-[90px] lg:w-[150px]' src="./Images/conrad.jpg" alt="" /></Link>
                    </div>
                    <div className='flex flex-row items-center space-x-4'>
                        <Link><img className='w-[70px] lg:w-[100px]' src="./Images/hilton.jpg" alt="" /></Link>
                        <Link><img className='w-[70px] lg:w-[100px]' src="./Images/sahaza.jpg" alt="" /></Link>
                    </div>
                    <div className='flex flex-row items-center space-x-4'>
                        <Link><img className='w-[70px] lg:w-[100px]' src="./Images/hyatt.jpg" alt="" /></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Affiliation;