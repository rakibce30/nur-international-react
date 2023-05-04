import React from 'react';


const Card = ({data}) => {
    return (
        <div className="bg-white rounded-2xl py-4 px-6 text-center">
            <img className="rounded-2xl" src={data.image} alt="" />
            <h2 className="text-black text-xl lg:text-2xl font-bold my-2">{data.packageName}</h2>
            <p>{data.packageDetails}</p>
        </div>
    );
};

export default Card;