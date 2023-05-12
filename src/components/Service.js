import React, { useState } from 'react';
import { DataService } from './Data';
import { v4 } from 'uuid';

const Service = () => {
    const [data , setData] = useState(DataService);
    return (
        <div className="font-vazirRegular grid grid-cols-2 m-auto md:flex justify-around items-center
         pr-0 pl-0 p-12 border-t border-gray-300 border-solid bg-gray-200">
            {data.map(item => 
               <div key={v4()} className="cursor-pointer flex flex-col items-center mt-5 md:mt-0">
                   <img src={item.image} alt="image"/>
                   <h3 className="text-gray-600 font-normal mt-2 text-sm">{item.name}</h3>
               </div> 
            )}
        </div>
    );
};

export default Service;