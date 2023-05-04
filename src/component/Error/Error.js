import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Error = () => {
    return (
        <div className='flex flex-col h-screen space-y-3 justify-center items-center'>
            <h1 className='text-5xl font-semibold'>Oops!</h1>
            <p className='text-gray-500'>Page not found</p>
            <p className='italic underline flex items-center'>
                <ArrowRightIcon className="h-6 w-6 text-blue-500 mr-2" /> Back to Home page 
                <NavLink to='/' className="text-blue-500 no-underline"> Home</NavLink>
            </p>
        </div>
    );
};

export default Error;