import React, { useState } from 'react';
import { DataWidgets } from '../Data';
import { v4 } from 'uuid';

//Icons
import { AiOutlineInstagram , AiOutlineTwitter , AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Widgets = () => {
    const [data , setData] = useState(DataWidgets);
    return (
        <div className="font-vazirMedium grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 widgets-div widgets-li border-t 
        border-gray-300 border-solid bg-gray-200">
            <div>
                <h3 className="text-gray-500 font-normal lg:font-medium text-sm">از تخفیف‌ها و جدیدترین‌های فروشگاه باخبر شوید:</h3>
                <div className="w-full">
                    <input className="text-[11px] md:text-[12px] text-gray-500 w-[70%] md:w-[60%] h-9 sm:h-10 
                     border-l-0 border-gray-400 border border-solid rounded-s-md outline-none pr-2 
                     placeholder:text-gray-200 font-semibold mt-3"
                     type="text" placeholder="آدرس ایمیل خود را وارد کنید ..."/>
                    <button className="rounded-e-md bg-red-500 h-9 sm:h-10 w-[30%] md:w-[25%] outline-none text-white font-normal text-sm">ارسال</button>
                </div>
                <h3 className="text-gray-600 font-medium text-sm">ما را در شبکه های اجتماعی دنبال کنید.</h3>
                <div className="mt-8 flex justify-between sm:justify-start">
                    <span className="sm:pl-7 cursor-pointer text-rose-800"><AiOutlineInstagram /></span>
                    <span className="sm:pl-7 cursor-pointer text-indigo-800"><FaTelegram /></span>
                    <span className="sm:pl-7 cursor-pointer text-blue-500"><AiOutlineTwitter /></span>
                    <span className="sm:pl-7 cursor-pointer text-green-500"><AiOutlineWhatsApp /></span>
                </div>
            </div>
                {data.map(item => 
                    <div key={v4()}>
                        <h1 className="text-md w-fit font-vazirExtraBold pb-3 border-b-2 border-red-400 border-solid">{item.name}</h1>
                        <ul className="text-gray-500">
                            <li>{item.item1}</li>
                            <li>{item.item2}</li>
                            <li>{item.item3}</li>
                            <li>{item.item4}</li>
                            <li>{item.item5}</li>
                        </ul>
                    </div>    
                )}     
        </div>
    );
};

export default Widgets;