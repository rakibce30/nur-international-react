import React from 'react';
import Affiliation from '../Affiliation/Affiliation';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div>
            <div className='bg-sky-200'>
                <div className='max-w-screen-xl mx-auto min-h-[300px] lg:min-h-[400px] flex flex-col px-4 justify-center items-center space-y-6 lg:space-y-16'>
                    <h1 className='text-center text-2xl lg:text-7xl font-bold font-amatic'>We believe people should do the work that only people can do</h1>
                    <p className='text-center text-sm'>
                        <span style={{ fontSize: '2em', fontWeight: '600' }}>
                            <span className='text-yellow-500'>We service for</span>{' '}
                            <TypeAnimation
                                sequence={[
                                    'Mice',
                                    1000,
                                    'Hamsters',
                                    1000,
                                    'Guinea Pigs',
                                    1000,
                                    'Chinchillas',
                                    1000,
                                ]}
                                repeat={Infinity}
                            />
                        </span>
                    </p>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto flex flex-col justify-between items-center px-4 md:flex-row my-16'>
                <div className='w-full mb-6 lg:mb-0 md:w-1/2'>
                    <h2 className='text-xl text-center lg:text-left lg:text-3xl mb-4 font-medium lg:font-semibold'>About Us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam id cumque tenetur, doloribus asperiores natus iste. Perferendis culpa labore ea magnam! Ex aliquid est deserunt incidunt ipsum obcaecati eum.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti at placeat expedita fugit odio deserunt cupiditate ipsam facilis consequuntur, id labore provident optio quasi iste hic illo earum quisquam beatae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non natus iure, earum ab ipsum corporis aliquid error illo dolor amet recusandae consequatur ea quod eius consectetur impedit illum sed voluptatum.<br/><br/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos incidunt perspiciatis, laudantium recusandae quisquam, est dicta, exercitationem quod adipisci error laboriosam dolor cupiditate accusantium? Vel totam hic debitis corrupti reprehenderit.
                    </p>
                </div>
                <div className='w-full md:w-1/2'>
                    <img className='max-h-[300px] lg:max-h-[400px] rounded-xl mx-auto' src="./Images/umrah.png" alt="" />
                </div>
            </div>

            <Affiliation></Affiliation>
        </div>
    );
};

export default About;