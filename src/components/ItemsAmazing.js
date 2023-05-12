import React from 'react';

const ItemsAmazing = ({ img , percent , price1 , price2 , name }) => {
    return (
        <div dir="ltr" className="cursor-pointer bg-white rounded-md p-1.5 li:pb-10 hover:">
            <div className="lg:ml-12"><img src={img} alt="slid"/></div>
            <div className="hidden md:flex text-blue-950 font-bold justify-center mt-7 mb-7">{name}</div>
            <div className="flex justify-around mt-6 li:mb-5">
                <h5 className="text-[10px] li:text-sm md:text-lg text-slate-800 font-semibold">{price2}</h5>
                <span className="text-[8px] li:text-[11px] md:text-sm text-center font-semibold bg-red-600 w-6 li:w-8 md:w-10 rounded-xl text-white h-fit">{percent}</span>
            </div>
            <i className=" text-[9px] li:text-[12px] md:text-sm font-semibold ml-2.5 line-through text-gray-400 flex li:justify-center">{price1}</i>
        </div>
    );
};

export default ItemsAmazing;