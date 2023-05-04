import React from 'react';
import Affiliation from '../Affiliation/Affiliation';
import Button from '../Button/Button';

const HajjPage = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto py-4 lg:py-12'>
                <img className='w-full h-[380px] rounded' src="./Images/hajj-offers.jpg" alt="" />
                <h2 className='text-xl my-2 lg:my-4 lg:text-3xl'>Most Popular Hajj Packages 2023 -2024 from Dhaka, Bangladesh</h2>
                <p>
                    Everybody is facing some types of problems that may be pre-activities which eventually become a barrier in the way of performing the pilgrimage. Most citizens don’t know how to apply for visas & passports at the right time or the right place in the right manner to get their visas & passports done in time. In this way, most of the brothers and sisters hang about failed to get their packages booked in time and they can’t become suitable to fulfill their dreams of performing Islamic pilgrimage.<br /><br />
                    As a solution for all these kinds of problems, it has been offering to guide and provide you on the topic of the packages and application of your visa, tickets & passports and we will absolutely help and consult you out in getting your visas & passports ready in time. We better know how to resolve these problems of late submission of the Hajj application, financial restrictions, lack of proper documentation, preregistration, and other similar issues.
                </p>
                <div className='bg-white rounded-lg p-4 my-8 shadow-lg flex flex-row items-center justify-between '>
                    <div className='flex flex-row space-x-12'>
                        <img className='w-[200px]' src="./Images/hajj.png" alt="" />
                        <div>
                            <h3 className='text-lg font-bold'>Hajj Package-A, 35 days</h3>
                            <ul className='mt-4'>
                                <li className='list-disc text-sm'>Hotel in Makkah: distance 400 meters from Haram Sharif & Madinah: 300 meters</li>
                                <li className='list-disc text-sm'>Meals (3 Times)</li>
                                <li className='list-disc text-sm'>Sharing Room (4 Persons)</li>
                                <li className='list-disc text-sm'>Excluding Kurbani</li>
                            </ul>
                        </div>
                    </div>
                    <Button buttonText={'Contact Us'}></Button>
                </div>
                <p>
                    Everybody is facing some types of problems that may be pre-activities which eventually become a barrier in the way of performing the pilgrimage. Most citizens don’t know how to apply for visas & passports at the right time or the right place in the right manner to get their visas & passports done in time. In this way, most of the brothers and sisters hang about failed to get their packages booked in time and they can’t become suitable to fulfill their dreams of performing Islamic pilgrimage.<br /><br />
                    As a solution for all these kinds of problems, it has been offering to guide and provide you on the topic of the packages and application of your visa, tickets & passports and we will absolutely help and consult you out in getting your visas & passports ready in time. We better know how to resolve these problems of late submission of the Hajj application, financial restrictions, lack of proper documentation, preregistration, and other similar issues.
                </p>
            </div>
            <Affiliation></Affiliation>
        </div>
    );
};

export default HajjPage;