import React from 'react';

////////Images
//SliderHeader
import slide1Header from "../images/SliderHeader/Slide-1.jpg";
import slide2Header from "../images/SliderHeader/Slide-2.jpg";
import slide3Header from "../images/SliderHeader/Slide-3.jpg";
import slide4Header from "../images/SliderHeader/Slide-4.jpg";
import slide5Header from "../images/SliderHeader/Slide-5.jpg";

//Amazing
import slide1Amazing from "../images/Amazing/slide-1.webp";
import slide2Amazing from "../images/Amazing/slide-2.webp";
import slide3Amazing from "../images/Amazing/slide-3.webp";
import slide4Amazing from "../images/Amazing/slide-4.webp";
import slide5Amazing from "../images/Amazing/slide-5.webp";
import slide6Amazing from "../images/Amazing/slide-6.webp";
import slide7Amazing from "../images/Amazing/slide-7.webp";
import slide8Amazing from "../images/Amazing/slide-8.webp";

//Service
import image1Service from "../images/Service/1.svg";
import image2Service from "../images/Service/2.svg";
import image3Service from "../images/Service/3.svg";
import image4Service from "../images/Service/4.svg";
import image5Service from "../images/Service/5.svg";

////////Icons
//Banner
import { Home , Temp , Emoji , Basket , BackPack , Car } from "./SVG";


const DataBanner = () => [
    {icon:<Car /> , name:"خودرو و لوازم جانبی" , inventory:"2000 کالا"},
    {icon:<BackPack /> , name:"کیف و چمدان" , inventory:"54000 کالا"},
    {icon:<Home /> , name:"لوازم خانگی" , inventory:"24000 کالا"},
    {icon:<Basket /> , name:"سوپرمارکت" , inventory:"12000 کالا"},
    {icon:<Emoji /> , name:"آرایشی و بهداشتی" , inventory:"64000 کالا"},
    {icon:<Temp /> , name:"لوازم کمکی" , inventory:"18000 کالا"},
];


const DataMenuDesktop = () =>[
    {name:"مد و پوشاک"} ,
    {name:"خانه و آشپزخانه"} , 
    {name : "کتاب،لوازم تحریر"} , 
    {name:"ورزش و سفر"} , 
    {name:"وسایل نقلیه و صنعتی"} , 
    {name:"شگفت انگیزها"}
];


const DataItemsMenuDesktop = () => [
    {name:"لوازم جانبی گوشی" , name2:"گوشی موبایل" , name3:"ساعت هوشمند" ,
     name4:"اسپیکر بلوتوث و باسیم" , item1:"کیف و کاور گوشی" , item2:"پاور بانک" ,
     item3:"هندزفری،هدفون" , item4:"پایه نگهدارنده گوشی", item8:"آیفون اپل", item9:"هوآوی"},

    {name:"موبایل" , item1:"Apple" , item2:"Hoawei" , item3:"Xiaomi" ,
     item4:"Samsung" , item5:"ASUS" , item6:"Honor" , item7:"LG"},

    {name:"تبلت و کتابخوان" , item1:"Acer" , item2:"Apple" , item3:"Amazon" ,
     item4:"ASUS" , item5:"HTC" , item:"Samsung"},

    {name:"دوربین" , item1:"Canon" , item2:"Casio" , item3:"Nikon" , item4:"Sony"},

    {name:"کامپیوتر و تجهیزات جانبی" , item1:"هارد دیسک" ,
     item2:"نمایشگر" , item3:"مادر بورد" , item4:"کارت گرافیک" , item5:"پردازنده"},
];


const DataSliderHeader = () => [
    {img:slide1Header}, 
    {img:slide2Header}, 
    {img:slide3Header}, 
    {img:slide4Header}, 
    {img:slide5Header},
];

const DataAmazing = () => [
    { img:slide1Amazing , price1:"908,000" , price2:"699,000" , percent:"23%" , name:"هندزفری بی سیم هاینو تکو" },
    { img:slide2Amazing , price1:"350,000" , price2:"290,000" , percent:"17%" , name:"پایه نگهدارنده گوشی موبایل" },
    { img:slide3Amazing , price1:"1,559,000" , price2:"1,099,000" , percent:"30%" , name:"اسپیکر بلوتوثی کریتیو" },
    { img:slide4Amazing , price1:"4,049,000" , price2:"3,849,000" , percent:"5%" , name:"گوشی موبایل شیائومی" },
    { img:slide5Amazing , price1:"34,500" , price2:"27,900" , percent:"19%" , name:"اسباب بازی بسکتبال فکری" },
    { img:slide6Amazing , price1:"280,000" , price2:"170,800" , percent:"39%" , name:"لامپ ال ای دی 50 وات لیتومکس" },
    { img:slide7Amazing , price1:"21,000,000" , price2:"18,499,000" , percent:"12%" , name:"ساعت هوشمند اپل" },
    { img:slide8Amazing , price1:"800,000" , price2:"580,000" , percent:"27%" , name:"کیف رودوشی زنانه چرم مشهد" },
];

const DataService = () => [
    { image : image1Service , name : "تحویل اکسپرس" },
    { image : image2Service , name : "پشتیبانی 24 ساعته" },
    { image : image3Service , name : "پرداخت در محل" },
    { image : image4Service , name : "7 روز ضمانت بازگشت" },
    { image : image5Service , name : "ضمانت اصل بودن کالا" },
];

const DataWidgets = () => [
    { name : "راهنمای خرید جی تی کالا" , item1 : "نحوه ثبت سفارش" ,
     item2 : "رویه ارسال سفارش" , item3 : "شیوه‌های پرداخت" },

    { name : "خدمات مشتریان" , item1 : "پاسخ به پرسش‌های متداول" , item2 : "رویه‌های بازگرداندن کالا" ,
     item3 : "شرایط استفاده" , item4 : "حریم خصوصی" },

    { name : "با جی تی کالا" , item1 : "فروش در جی تی کالا" , item2 : "همکاری با سازمان‌ها" ,
     item3 : "فرصت‌های شغلی" , item4 : "تماس با جی تی کالا" , item5 : "درباره جی تی کالا" },
];

export { DataBanner , DataMenuDesktop , DataItemsMenuDesktop , DataSliderHeader , DataAmazing , DataService , DataWidgets };