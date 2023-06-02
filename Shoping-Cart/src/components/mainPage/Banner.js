import React, { useState } from 'react';
import { DataBanner } from '../Data';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [data , setData] = useState(DataBanner);

    return (
        <div className="font-vazirMedium grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white m-3.5 md:m-6 lg:m-8 rounded-lg shadow-lg p-4">
            {data.map(item =>
                <Link className="banner-items" to={item.path} key={v4()}>
                    <div className="items-center flex flex-col">
                    <i>{item.icon}</i>
                    <h3>{item.name}</h3>
                    <span>{item.inventory}</span>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default Banner;