import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const links = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Hajj',
            path: '/hajj'
        },
        {
            id: 4,
            name: 'Umrah',
            path: '/umrah'
        },
        {
            id: 5,
            name: 'Contact',
            path: '/contact'
        }
    ]

    return (
        <div>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-sm relative">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                    <NavLink to="/" className="flex items-center">
                        <img src={Logo} className="mr-3 h-12 sm:h-16" alt="Flowbite Logo" />
                    </NavLink>


                    <div onClick={() => setOpen(!open)} className='lg:hidden block'>
                        <span>{open === true ? <XMarkIcon className="h-6 w-6 text-[#0274be] duration-500" /> : <Bars3Icon className="h-6 w-6 text-[#0274be] duration-500" />}</span>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {
                                links.map(link => <Link
                                    link={link}
                                    key={link.id}
                                ></Link>)
                            }
                        </ul>
                    </div>
                    <div className={`flex h-screen w-56 absolute top-[70px] ${open ? 'right-0' : '-right-80'}  bg-white z-10 duration-500 lg:hidden`}>
                        <ul className='flex flex-col mt-6'>
                            {
                                links.map(link => <Link
                                    link={link}
                                    key={link.id}
                                ></Link>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;