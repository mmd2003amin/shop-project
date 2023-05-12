import React, { useState } from 'react';
import { DataBanner } from './Data';
import { v4 } from 'uuid';

const Banner = () => {
    const [data , setData] = useState(DataBanner);

    return (
        <div className="font-vazirMedium grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white m-3.5 md:m-6 lg:m-8 rounded-lg shadow-lg p-4 banner-items">
            {data.map(item =>
                <div key={v4()}>
                    <i>{item.icon}</i>
                    <h3>{item.name}</h3>
                    <span>{item.inventory}</span>
                </div>
            )}
        </div>
    );
};

export default Banner;