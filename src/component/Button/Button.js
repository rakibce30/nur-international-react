import React from 'react';

const Button = ({buttonText}) => {
    return (
        <button className="bg-black rounded text-white px-4 py-2 lg:text-xl font-semibold">{buttonText}</button>
    );
};

export default Button;