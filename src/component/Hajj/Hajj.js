import React from 'react';
import Card from '../Card/Card';


const Hajj = ({loadData}) => {
    const hajjData = loadData.filter( data => data.category === 'Hajj');

    return (
        <section className="max-w-screen-xl mx-auto mt-20 px-8 lg:px-0">
            <h2 className="text-3xl lg:text-4xl font-semibold">Hajj Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {
                    hajjData.map( data => <Card 
                        key={data.id}
                        data={data}
                        ></Card>)
                }


            </div>
        </section>
    );
};

export default Hajj;