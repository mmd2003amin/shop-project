import React from 'react';

//Icons
import { BiArrowBack } from "react-icons/bi";

//Images
import image1 from "../images/SuperMarket/image1.webp";
import image2 from "../images/SuperMarket/image2.webp";
import image3 from "../images/SuperMarket/image3.jpg";
import image4 from "../images/SuperMarket/image4.jpg";

const SuperMarket = () => {
    return (
        <div className="font-vazirMedium bg-[#48d36e] rounded-lg m-3.5 md:m-6 lg:m-8 lg:flex justify-around items-center lg:pt-2 lg:pb-2">
            <div className="p-6">
                <h1 className="text-white text-sm md:text-xl lg:text-2xl font-bold md:font-black lg:mb-2">پیشنهاد سوپرمارکتی</h1>
                <p className="text-gray-300 text-sm font-extralight md:font-normal">شما می توانید در این قسمت از جدیدترین پیشنهادات سوپر مارکتی ما آشنا شوید</p>
            </div>

            <div className="flex justify-around pb-1.5 images-superMarket">
                <img src={image1} alt="image"/>
                <img src={image2} alt="image"/>
                <img src={image3} alt="image"/>
                <img className="hidden li:block" src={image4} alt="image"/>
            </div>

            <div className="hidden sm:flex items-center text-white font-medium text-sm p-6">
                مشاهده +8کالا
                <BiArrowBack className="mr-2 w-7 bg-red-600 rounded-xl" />
            </div>
        </div>
    );
};

export default SuperMarket;