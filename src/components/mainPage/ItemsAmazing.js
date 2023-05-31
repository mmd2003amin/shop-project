import React from 'react';

const ItemsAmazing = ({ img , percent , price1 , price2 , name }) => {
    return (
        <div dir="ltr" className="cursor-pointer bg-white rounded-md p-1.5 li:pb-10 h-fit sm:h-72 lg:h-80">
            <div className="mx-auto w-fit sm:w-32 lg:w-40"><img src={img} alt="slid"/></div>
            <div className="text-center text-sm md:flex text-blue-950 justify-center sm:mt-7 sm:mb-7">{name}</div>
            <div className="flex justify-around mt-6 li:mb-5">
                <h5 className="text-[13px] text-slate-800">{price2}</h5>
                <span className="text-[11px] text-center font-semibold bg-red-600 w-6 li:w-8 md:w-10 rounded-xl text-white h-fit">{percent}</span>
            </div>
            <i className="text-[11px] font-semibold line-through text-gray-400 flex justify-center">{price1}</i>
        </div>
    );
};

export default ItemsAmazing;