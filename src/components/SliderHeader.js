import react, { useState } from "react";
import { DataSliderHeader } from "./Data";
import { v4 } from 'uuid';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination , EffectFade , Autoplay } from "swiper";

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderHeader =  () => {
  const [data , setData] = useState(DataSliderHeader);
  return (
    <Swiper
     slidesPerView={1} 
     modules={[Navigation , EffectFade , Pagination , Autoplay]} 
     pagination={{clickable: true,}} 
     effect={"fade"}
     autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
     className="mySwiper mt-1"
     >
        {data.map(item =>
          <SwiperSlide key={v4()}>
            <img src={item.img} alt="image"/>
          </SwiperSlide>
        )}
    </Swiper>
  );
};

export default SliderHeader ;