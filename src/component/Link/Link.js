import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ link }) => {
    return (
        <li>
            <NavLink to={link.path}
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };
                }}
                className="block py-2 pr-4 pl-3 text-[#0274be] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-black"
                aria-current="page">{link.name}</NavLink>
        </li>
    );
};

export default Link;