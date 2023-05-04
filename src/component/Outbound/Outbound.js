import React from 'react';
import Card from '../Card/Card';

const Outbound = ({loadData}) => {
    console.log(loadData);
    const outboundData = loadData.filter(data => data.category === 'Outbound');
    return (
        <section className="max-w-screen-xl mx-auto mt-20 px-8 lg:px-0">
            <h2 className="text-3xl lg:text-4xl font-semibold">Outbound Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {
                    outboundData.map(data => <Card
                        key={data.id}
                        data={data}
                    ></Card>)
                }


            </div>
        </section>
    );
};

export default Outbound;