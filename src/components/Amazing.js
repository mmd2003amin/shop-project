import React,{ useState } from 'react';
import ItemsAmazing from './ItemsAmazing';
import { DataAmazing } from './Data';
import { v4 } from 'uuid';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Amazing = () => {

    const [data , setData] = useState(DataAmazing);
    return (
        <div className="font-vazirMedium bg-red-600 m-3.5 md:m-6 lg:m-8 rounded-lg">
            <div>
                <h1 className="p-1.5 lg:pr-5 lg:pt-2.5 text-[12px] li:text-lg text-white font-bold">پیشنهاد شگفت انگیز</h1>
            </div>

            <div className="p-4">
                <Swiper
                navigation={true}
                spaceBetween={10}
                slidesPerView={3}
                modules={[Navigation]} 
                className="mySwiper"
                >
                    {data.map(item =>
                        <SwiperSlide key={v4()}>
                            <ItemsAmazing
                            img={item.img} 
                            price1={item.price1}
                            price2={item.price2} 
                            percent={item.percent} 
                            name={item.name}
                            />
                        </SwiperSlide>
                    )}  
                </Swiper>
            </div>
        </div>
    );
};

export default Amazing;